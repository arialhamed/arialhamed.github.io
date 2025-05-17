---
title: Overpowered Android Gaming
permalink: /catalog/overpowered-android-gaming
layout: default
redirect_from:
 - /catalog/overpowered-android-gaming/
---

## Overpowered Android Gaming (June 2023)

Note: This does not include Google Play Store, but rather this guide is meant for WSA Sideloading

DISCLAIMER: <a href="https://arialhamed.github.io/">https://arialhamed.github.io/</a> and any associates, partners & stakeholders do not condone illicit distribution & piracy of Android package files & softwares. **You are required to have legal access to the needed files for this guide**. You can find such files legally via certified distributers such as <a href="https://en.uptodown.com/android">UpToDown</a> & <a href="https://www.apkmirror.com/">APKMirror</a>.

Disclaimers aside, I call this setup overpowered because using a laptop or PC device, which has a laptop or PC CPU, is much more overpowered compared to phone CPU.

1. Download Revision OS, Windows 11 Version, <a href="https://revi.cc/revios/download">here for their site</a> (or <a href="https://pixeldrain.com/u/EtQ5TmBH">here for direct download</a>), install OS to PC.
1. Install Firefox (optional but recommended)
1. Go to <a href="https://store.rg-adguard.net/">rg-adguard</a>
1. Select the **Productid** option, paste this ID: **9p3395vx91nr**, select the **Slow** option, and click the Check button.
1. Download the probably largest file, around 1.3GB or so. If there are 2 or more similar sized entries, select & download the latest version. Make sure it is saved as either **.appx** or **.msixbundle** file
1. Open **Windows PowerShell** as **Administrator**, go to the directory where that file is
1. Type in `Add-AppxPackage Microsoft*.msixbundle`
1. WSA should be installed. You can test it by clicking on "Files", it will open the Google files app. Before that, you may need to go to enable Virtual Machine Platform
1. (Skip if you already have done so) Search for "Turn Windows features on or off" through Windows Search. Check "Virtual Machine Platform", click "OK" then restart your computer.
1. Download <a href="https://github.com/alesimula/wsa_pacman">WSA Pacman</a>. At first .apk or .xapk installation, you may need to click on some other stuff to allow installation (such as enabling Developer mode in WSA, and allowing ADB debugging between WSA & WSA Pacman)

<br><br><br><br><br>

[2023-07-12] Note that attempting to install .xapk files are a bit buggy (like it won't install and Pacman will be stuck at loading). I would definitely attempt to find if there is a different format in creating my .xapk files 

[2023-08-04] I'll leave the .iso for ReviOS (Windows **_10_**) right over [here](https://pixeldrain.com/u/nuwAvC3M).

[2025-01-29] Ignore the last log update above, installing ReviOS via their <a href="https://revi.cc/docs/playbook/general">playbooks</a> and <a href="https://ameliorated.io/">AME Wizard</a> is fine, it does the job well and is much more customizable. However if you want to install without an email account, you may need to find some ways to circumvent it. You may find some results online for the latest details.
