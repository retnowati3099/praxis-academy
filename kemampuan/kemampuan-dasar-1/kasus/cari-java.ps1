$files = Get-ChildItem "D:\DATA KULIAH\SEMESTER 3\GRAFIKA KOMPUTER\TUGAS" -Recurse -Include *.java
$file = Split-Path -Path $files
$arr = @()
if (($file| Measure-Object).Count -gt 0) {
	foreach ($f in $file){
		$arr += $f
	}
	$arr1 = $arr | Select-Object -Unique
	foreach($directory in $arr1){
		Write-Host Ada file Java pada direktori $directory
	}
}
else{
		Write-Host Tidak Ada file Java
}
