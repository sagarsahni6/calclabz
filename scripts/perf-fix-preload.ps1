# Remove the preload line + its comment from all calculator HTML files
$projectRoot = Split-Path -Parent $PSScriptRoot
$htmlFiles = Get-ChildItem -Path $projectRoot -Filter "*.html" -File | Where-Object { $_.Name -ne "index.html" -and $_.Name -ne "404.html" }

$count = 0
foreach ($file in $htmlFiles) {
    $lines = Get-Content -Path $file.FullName -Encoding UTF8
    $newLines = @()
    $skipNext = $false

    foreach ($line in $lines) {
        if ($line -match 'PRELOAD.*core JS bundle') {
            # Skip this comment line and mark next line for skipping
            $skipNext = $true
            $newLines += '    <!-- Preload removed: calculators-core.js is deferred; preload wastes priority -->'
            continue
        }
        if ($skipNext -and $line -match 'preload.*calculators-core') {
            $skipNext = $false
            continue
        }
        $skipNext = $false
        $newLines += $line
    }

    $newContent = $newLines -join "`r`n"
    $oldContent = $lines -join "`r`n"

    if ($newContent -ne $oldContent) {
        Set-Content -Path $file.FullName -Value $newLines -Encoding UTF8
        $count++
        Write-Host "  [OK] $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "`nRemoved preload from $count files" -ForegroundColor Cyan
