# Daily push: copies Vineet's React practice from Desktop\React into ReactPractice and pushes it.
# Run by D:\daily-push\push-all.ps1 when Vineet texts "push". -DryRun shows what would go without writing.
# Unlike the other practice repos, each React project keeps its own folder layout here (first-react-app\src\App.jsx),
# so a project can be cloned and run with "npm install" and "npm run dev".
#   - Every new file and every file changed since it was last pushed goes up.
#   - Your own code (.jsx/.js/.ts/.tsx/.css under src\) gets one commit per file.
#   - Project set-up files (package.json, vite.config.js, index.html, public\, images) go in one commit per project.
#   - Never pushed: node_modules, dist, build, .env files, logs, and empty files (they wait until written).
param([switch]$DryRun)

$ErrorActionPreference = 'Stop'
$Repo   = 'D:\ReactPractice'
$Src    = 'C:\Users\Vineet\OneDrive\Desktop\React'
$Log    = Join-Path $Repo 'tools\daily-push.log'
$Readme = Join-Path $Repo 'README.md'
$SkipRe = '\\(node_modules|dist|dist-ssr|build|coverage|\.git|\.vite|\.next|\.expo)\\|\\\.env[^\\]*$|\.log$|\.local$'
$BS     = [string][char]92

function Log($msg) {
    $line = "{0:yyyy-MM-dd HH:mm:ss}  {1}" -f (Get-Date), $msg
    if (-not $DryRun) { Add-Content -Path $Log -Value $line -Encoding utf8 }
    Write-Host $line
}

# Same file? Text compares without Windows line ends or trailing blank lines; images compare byte for byte.
function Same($a, $b) {
    if (-not (Test-Path -LiteralPath $b)) { return $false }
    if ($a -match '\.(png|jpe?g|gif|ico|webp)$') {
        return ((Get-FileHash -LiteralPath $a).Hash -eq (Get-FileHash -LiteralPath $b).Hash)
    }
    $x = ([IO.File]::ReadAllText($a) -replace "`r`n", "`n").TrimEnd()
    $y = ([IO.File]::ReadAllText($b) -replace "`r`n", "`n").TrimEnd()
    return $x -ceq $y
}

function Is-Code($rel) { return ($rel -match '\\src\\' -and $rel -match '\.(jsx|js|tsx|ts|css)$') }

try {
    Set-Location $Repo
    if (-not $DryRun -and (git ls-remote --heads origin main)) { git pull --rebase --quiet origin main }
    $today = Get-Date -Format 'yyyy-MM-dd'
    if (-not (Test-Path $Src)) { Log "No Desktop\React folder."; exit 0 }

    $changed = @(Get-ChildItem -LiteralPath $Src -Recurse -File | Where-Object {
        $_.FullName -notmatch $SkipRe -and $_.Length -gt 0
    } | ForEach-Object {
        $rel = $_.FullName.Substring($Src.Length).TrimStart($BS)
        $dest = Join-Path $Repo $rel
        if (-not (Same $_.FullName $dest)) {
            [pscustomobject]@{ File = $_; Rel = $rel; Dest = $dest; New = -not (Test-Path -LiteralPath $dest); Code = (Is-Code $rel) }
        }
    })
    if (-not $changed) { Log "No new or updated React files."; exit 0 }

    if (-not (Test-Path $Readme)) {
        $intro = "# ReactPractice`r`n`r`nDaily React practice: components, props, state, hooks, forms, routing and small apps, pushed as I learn React.`r`n`r`n" +
                 "Each folder is a full project: open it, run ``npm install`` then ``npm run dev``.`r`n`r`n## Files`r`n`r`n| Date | File | What I did |`r`n|------|------|------------|"
        if (-not $DryRun) { Set-Content -Path $Readme -Value $intro -Encoding utf8 }
    }
    $link = { param($r) $r.Replace($BS, '/').Replace(' ', '%20') }

    # 1. Set-up files, one commit per project (oldest first).
    foreach ($grp in ($changed | Where-Object { -not $_.Code } | Group-Object { $_.Rel.Split($BS)[0] })) {
        $proj = $grp.Name
        $isNew = -not (git ls-files -- $proj)
        if ($DryRun) { Log "Dry run would push $($grp.Count) set-up file(s) of $proj"; continue }
        foreach ($c in $grp.Group) {
            New-Item -ItemType Directory -Force -Path (Split-Path $c.Dest) | Out-Null
            Copy-Item -LiteralPath $c.File.FullName -Destination $c.Dest -Force
        }
        $what = if ($isNew) { "Started the $proj project (Vite + React set-up)" } else { "Updated the $proj project set-up" }
        Add-Content -Path $Readme -Value ("| $today | [{0}]({1}) | {2} |" -f $proj, (& $link $proj), $what) -Encoding utf8
        git add -A -- $proj README.md
        git commit --quiet -m "$what" -m (($grp.Group | ForEach-Object { $_.Rel }) -join "`n")
        Log "$what ($($grp.Count) files)"
    }

    # 2. My own code, one commit per file (oldest first).
    foreach ($c in ($changed | Where-Object { $_.Code } | Sort-Object { $_.File.LastWriteTime })) {
        $proj = $c.Rel.Split($BS)[0]
        $msg  = if ($c.New) { "Learning React: $($c.File.Name)" } else { "Practising React again: my updated $($c.File.Name)" }
        if ($DryRun) { Log "Dry run would push $($c.Rel)  [$msg]"; continue }
        New-Item -ItemType Directory -Force -Path (Split-Path $c.Dest) | Out-Null
        Copy-Item -LiteralPath $c.File.FullName -Destination $c.Dest -Force
        $what = if ($c.New) { "Learning React in $proj" } else { "Updated in $proj" }
        Add-Content -Path $Readme -Value ("| $today | [{0}]({1}) | {2} |" -f $c.File.Name, (& $link $c.Rel), $what) -Encoding utf8
        git add -- $c.Dest README.md
        git commit --quiet -m $msg -m "From $($c.Rel)."
        Log "Committed $($c.Rel)"
    }

    if (-not $DryRun) {
        git add -- tools
        if (git status --porcelain -- tools) { git commit --quiet -m "Daily push script and log" -- tools }
        git push --quiet -u origin main
        Log "Pushed to GitHub"
    }
}
catch {
    Log "FAILED: $($_.Exception.Message)"
    exit 1
}
