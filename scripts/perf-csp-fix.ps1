# CSP Fix: Replace inline onload handlers with media="print" + css-swap.js
# The original perf-update.ps1 used inline onload which is blocked by CSP script-src 'self'

$projectRoot = Split-Path -Parent $PSScriptRoot
$htmlFiles = Get-ChildItem -Path $projectRoot -Filter "*.html" -File | Where-Object { $_.Name -ne "index.html" -and $_.Name -ne "404.html" }

$count = 0
foreach ($file in $htmlFiles) {
    $lines = Get-Content -Path $file.FullName -Encoding UTF8
    $newLines = @()
    $changed = $false

    foreach ($line in $lines) {
        $newLine = $line

        # Fix 1: Google Fonts — preload+onload -> stylesheet+media=print+id
        if ($line -match 'rel="preload" as="style".*fonts\.googleapis\.com.*onload=') {
            $newLine = $line -replace 'rel="preload" as="style" (href="https://fonts\.googleapis\.com[^"]+") onload="[^"]*"', 'rel="stylesheet" $1 media="print" id="css-fonts"'
            $changed = $true
        }

        # Fix 2: Font Awesome — preload+onload -> stylesheet+media=print+id
        if ($line -match 'rel="preload" as="style".*font-awesome.*onload=') {
            $newLine = $line -replace 'rel="preload" as="style" (href="https://cdnjs\.cloudflare\.com[^"]+") onload="[^"]*"', 'rel="stylesheet" $1 media="print" id="css-fa"'
            $changed = $true
        }

        # Fix 3: main.css — remove onload, add id
        if ($line -match 'main\.css.*media="print".*onload=') {
            $newLine = $line -replace '(href="assets/css/main\.css") media="print" onload="[^"]*"', '$1 media="print" id="css-main"'
            $changed = $true
        }

        # Fix 4: Add css-swap.js as first deferred script (before calculators-core.js)
        if ($line -match '<script defer src="assets/js/calculators-core\.js"') {
            $newLines += '    <!-- css-swap.js MUST be first: swaps non-blocking stylesheets from media="print" to "all" -->'
            $newLines += '    <script defer src="assets/js/css-swap.js"></script>'
            $changed = $true
        }

        $newLines += $newLine
    }

    if ($changed) {
        Set-Content -Path $file.FullName -Value $newLines -Encoding UTF8
        $count++
        Write-Host "  [OK] $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "`nCSP-fixed $count files" -ForegroundColor Cyan
