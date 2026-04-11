# Performance Optimization Batch Updater
# Applies all 6 changes from the implementation plan to all HTML files
# Run from project root: powershell -ExecutionPolicy Bypass -File scripts/perf-update.ps1

param(
    [switch]$DryRun
)

$projectRoot = Split-Path -Parent $PSScriptRoot
$htmlFiles = Get-ChildItem -Path $projectRoot -Filter "*.html" -File | Where-Object { $_.Name -ne "index.html" -and $_.Name -ne "404.html" }

$totalFiles = $htmlFiles.Count
$updatedFiles = 0
$skippedFiles = 0
$errors = @()

Write-Host "=== Calc Labz Performance Optimization ===" -ForegroundColor Cyan
Write-Host "Found $totalFiles HTML files to process (excluding index.html and 404.html)"
if ($DryRun) { Write-Host "[DRY RUN] No files will be modified" -ForegroundColor Yellow }
Write-Host ""

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $original = $content
    $changes = 0

    # 1. Google Fonts: render-blocking -> preload+swap + drop weight 500
    # Match the pattern with wght@400;500;600;700;800 or wght@400;600;700;800
    if ($content -match '<link rel="stylesheet" href="https://fonts\.googleapis\.com/css2\?family=Inter:wght@400;(?:500;)?600;700;800&(?:amp;)?display=swap">') {
        $content = $content -replace '<link rel="stylesheet" href="https://fonts\.googleapis\.com/css2\?family=Inter:wght@400;(?:500;)?600;700;800&(amp;)?display=swap">', '<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" onload="this.onload=null;this.rel=''stylesheet''">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"></noscript>'
        $changes++
    }

    # 2. Font Awesome: render-blocking -> preload+swap
    if ($content -match '<link rel="stylesheet" href="https://cdnjs\.cloudflare\.com/ajax/libs/font-awesome/6\.5\.1/css/all\.min\.css">') {
        $content = $content -replace '<link rel="stylesheet" href="https://cdnjs\.cloudflare\.com/ajax/libs/font-awesome/6\.5\.1/css/all\.min\.css">', '<link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" onload="this.onload=null;this.rel=''stylesheet''">
    <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></noscript>'
        $changes++
    }

    # 3. main.css: render-blocking -> media print swap
    if ($content -match '<link rel="stylesheet" href="assets/css/main\.css">') {
        $content = $content -replace '<link rel="stylesheet" href="assets/css/main\.css">', '<link rel="stylesheet" href="assets/css/main.css" media="print" onload="this.media=''all''">
    <noscript><link rel="stylesheet" href="assets/css/main.css"></noscript>'
        $changes++
    }

    # 4. Remove redundant preload for calculators-core.js
    if ($content -match '<link rel="preload" as="script" href="assets/js/calculators-core\.js">') {
        # Remove the preload line and its comment
        $content = $content -replace '    <!-- ═══ PRELOAD — core JS bundle \(P1: replaces monolithic calculators\.js\) ═══ -->\r?\n    <link rel="preload" as="script" href="assets/js/calculators-core\.js">', '    <!-- Preload removed: calculators-core.js is deferred and discovered by parser; preload wastes priority -->'
        $changes++
    }

    # 5. Update section comments for clarity
    $content = $content -replace '<!-- ═══ FONTS ═══ -->', '<!-- ═══ FONTS (non-blocking) ═══ -->'
    $content = $content -replace '<!-- ═══ FONT AWESOME ═══ -->', '<!-- ═══ FONT AWESOME (non-blocking) ═══ -->'
    $content = $content -replace '<!-- ═══ MAIN CSS ═══ -->', '<!-- ═══ MAIN CSS (non-blocking — critical CSS is inlined above) ═══ -->'

    # 6. Add fetchpriority="high" to header logo image (LCP element)
    if ($content -match '<img src="/calclabz-logo\.png" alt="Calc Labz" width="160" height="32">') {
        $content = $content -replace '<img src="/calclabz-logo\.png" alt="Calc Labz" width="160" height="32">', '<img src="/calclabz-logo.png" alt="Calc Labz" width="160" height="32" fetchpriority="high">'
        $changes++
    }

    if ($content -ne $original) {
        if (-not $DryRun) {
            Set-Content -Path $file.FullName -Value $content -NoNewline -Encoding UTF8
        }
        $updatedFiles++
        Write-Host "  [OK] $($file.Name) ($changes changes)" -ForegroundColor Green
    } else {
        $skippedFiles++
        Write-Host "  [SKIP] $($file.Name) (no matching patterns)" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "=== Summary ===" -ForegroundColor Cyan
Write-Host "  Updated: $updatedFiles files" -ForegroundColor Green
Write-Host "  Skipped: $skippedFiles files" -ForegroundColor Gray
if ($errors.Count -gt 0) {
    Write-Host "  Errors: $($errors.Count)" -ForegroundColor Red
    $errors | ForEach-Object { Write-Host "    $_" -ForegroundColor Red }
}
if ($DryRun) { Write-Host "  [DRY RUN] No files were modified" -ForegroundColor Yellow }
