$dirs = @('c:\Users\mrsou\Desktop\zynexis\components', 'c:\Users\mrsou\Desktop\zynexis\app')
$files = Get-ChildItem -Path $dirs -Recurse -Include '*.tsx','*.ts','*.css'

foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw -Encoding UTF8
  if (-not $content) { continue }

  $updated = $content `
    -replace '#3B82F6', '#10B981' `
    -replace '#2563EB', '#059669' `
    -replace 'via-blue-500', 'via-emerald-500' `
    -replace 'to-indigo-600', 'to-emerald-600' `
    -replace 'border-blue-500', 'border-emerald-500' `
    -replace 'text-blue-500', 'text-emerald-500' `
    -replace 'bg-blue-500', 'bg-emerald-500' `
    -replace 'hover:bg-blue-500', 'hover:bg-emerald-500' `
    -replace 'hover:text-blue-500', 'hover:text-emerald-500' `
    -replace 'bg-blue-600', 'bg-emerald-600' `
    -replace 'border-blue-600', 'border-emerald-600' `
    -replace 'hover:bg-blue-600', 'hover:bg-emerald-600' `
    -replace 'rgba\(59,\s*130,\s*246', 'rgba(16, 185, 129' `
    -replace 'shadow-\[0_0_20px_rgba\(59,130,246,([^)]+)\)\]', 'shadow-[0_0_20px_rgba(16,185,129,$1)]' `
    -replace 'shadow-\[0_0_25px_rgba\(59,130,246,([^)]+)\)\]', 'shadow-[0_0_25px_rgba(16,185,129,$1)]' `
    -replace 'shadow-\[0_0_15px_rgba\(59,130,246,([^)]+)\)\]', 'shadow-[0_0_15px_rgba(16,185,129,$1)]'

  if ($updated -ne $content) {
    Set-Content $file.FullName $updated -Encoding UTF8 -NoNewline
    Write-Output "Updated: $($file.Name)"
  }
}
Write-Output "Done."
