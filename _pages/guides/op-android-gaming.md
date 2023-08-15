---
title: Overpowered Android Gaming
permalink: /guides/overpowered-android-gaming
layout: default
redirect_from:
 - /guides/overpowered-android-gaming/
---

## Overpowered Android Gaming (June 2023)

Note: This does not include Google Play Store, but rather this guide is meant for WSA Sideloading

DISCLAIMER: <a href="https://arialhamed.github.io/">https://arialhamed.github.io/</a> and any associates, partners & stakeholders do not condone illicit distribution & piracy of Android package files & softwares. **You are required to have legal access to the needed files for this guide**. You can find such files legally via certified distributers such as <a href="https://en.uptodown.com/android" target="_blank">UpToDown</a> & <a href="https://www.apkmirror.com/" target="_blank">APKMirror</a>.

Disclaimers aside, I call this setup overpowered because using a laptop or PC device, which has a laptop or PC CPU, is much more overpowered compared to phone CPU.

1. Download Revision OS, Windows 11 Version, <a href="https://revi.cc/revios/download" target="_blank">here for their site</a> (or <a href="https://pixeldrain.com/u/EtQ5TmBH" target="_blank">here for direct download</a>), install OS to PC.
1. Install Firefox (optional but recommended)
1. Go to <a href="https://store.rg-adguard.net/" target="_blank">rg-adguard</a>
1. Select the **Productid** option, paste this ID: **9p3395vx91nr**, select the **Slow** option, and click the Check button.
1. Download the probably largest file, around 1.3GB or so. If there are 2 or more similar sized entries, select & download the latest version. Make sure it is saved as either **.appx** or **.msixbundle** file
1. Open **Windows PowerShell** as **Administrator**, go to the directory where that file is
1. Type in `Add-AppxPackage Microsoft*.msixbundle`
1. WSA should be installed. 
1. Download <a href="https://github.com/alesimula/wsa_pacman" target="_blank">WSA Pacman</a>. At first .apk or .xapk installation, you may need to click on some other stuff to allow installation (such as enabling Developer mode in WSA, and allowing ADB debugging between WSA & WSA Pacman)

<br><br><br><br><br>

[2023-07-12] Note that attempting to install .xapk files are a bit buggy (like it won't install and Pacman will be stuck at loading). I would definitely attempt to find if there is a different format in creating my .xapk files 

[2023-08-04] I'll leave the .iso for ReviOS (Windows **_10_**) right over [here](https://pixeldrain.com/u/nuwAvC3M).


