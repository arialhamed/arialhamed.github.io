---
title: thinkpad tips
layout: default
permalink: /guides/thinkpad
redirect_from:
 - /guides/thinkpad/
 - /thinkpad
 - /thinkpad/
---

<div style="text-align:center;">
     <img src="https://raw.githubusercontent.com/arialhamed/static/main/images/2560px-IBM_ThinkPad_logo_askew.svg.png" style="width:50%;">
</div>

<br><br>

This is more, like, for me to reference to. i learned some things **and i will forget them** after a while, so here it is.

Some tips i have here, probably. Not much to show here tbh, just some stuff copied over from <a href="https://forum.thinkpads.com/" target="_blank">https://forum.thinkpads.com</a>.


<br><br><br>

---

## Configure X220 ThinkVantage button

```
in Windows 10, this procedure applies:
First steps (modifying registry to accept any .exe or .bat file)
1. Open regedit as admin

2. Navigate to Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Lenovo\ShortcutKey\AppLaunch (if the directory doesn't exist install Lenovo drivers)

3. In AppLaunch directory create a new Key called 'Ex_17' (without quotes)

3-1. In Ex_17 directory create new DWORD value called 'AppType' (without quotes)

3-2. Right click on the newly created AppType value and select Modify option

3-3. In value data field type '10001' (without quotes). In base, select hexadecimal.

4. In Ex_17 directory create a new Key called 'Desktop' (without quotes)

5. In Desktop directory create a new String value named File.

6. Right click on the newly created File value and select Modify option

7. In value data field provide path to the executable/batch script/whatever you want to launch

7-1. In Desktop directory create a new string value named Parameters. (leave data field blank)

8. Save changes

9. Voila your thinkvantage button now launches whatever app you want on Windows 10

Second: if you want to open Lenovo Vantage, do this:
1. Make a new notepad document in a location of your choice (root, users/ username folder, documents folder... you'll need to provide the exact path in last step)

2. Copy-paste following in the newly created txt file

@echo off
start/min explorer.exe shell:appsFolder\E046963F.LenovoCompanion_k1h2ywk1493x8!App

3. change txt file name and extension. Could be any name (e.g. LenovoVantage) but extension must be .bat

2. In above steps, enter this in step 7: [Location]:[Filename] (e.g. "C:\Users\[username]\LenovoVantage.bat" without inverted commas, replacing [username] with your username)

Lastly if/ in case LenovoVantage windows app location/ name changes, do this to confirm:

1. Run/ Win+R > "shell:appsFolder" (without inverted commas). An explorer window titled "applications" will open

2. Locate Lenovo Vantage. Right click > create shortcut > click yes to dialogue "windows can't create a shortcut here..." to send shortcut to your desktop

3. On desktop Lenovo Vantage shortcut, right click > properties > shortcut tab, look under target/ target type to confirm above name (E046963F.LenovoCompanion_k1h2ywk1493x8!App). Note "target" might be greyed out or full name (e.g. last letters of "!app") not visible. This is OK as you're only confirming. If the name is different, the difference will be before the "!App" ending. If still no success, google "running windows store apps from batch script" to find a slighly more elaborate procedure. Note: in my case, the name got from googling above was slightly different (longer with version numbers, etc.) than in shortcut; it didn't work: so use above steps to get exact syntax but use app name as appears in shortcut.
```

Source: <a href="https://forum.thinkpads.com/viewtopic.php?t=105732" target="_blank">Thinkpads Forum</a>
