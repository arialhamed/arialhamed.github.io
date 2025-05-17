---
title: debian setup
layout: default
permalink: /catalog/debian-setup
redirect_from:
 - /catalog/debian-setup/
 - /debian-setup
 - /debian-setup/
 - /catalog/samba-setup
 - /catalog/samba-setup/
 - /samba-setup
 - /samba-setup/
---

<figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/arialhamed/static/main/images/catalog/debian.svg" style="width:50%;">
     <figcaption style="margin-top:1rem;"><i>Source: <a href="https://commons.wikimedia.org/wiki/File:Debian-OpenLogo.svg">Wikimedia Commons</a> and modified with <a href="https://inkscape.org/">Inkscape</a></i></figcaption>
</figure>

This is more, like, for me to reference to. i learned some things **and i will forget them** after a while, so here it is.

A lot of what is existing here is an extension of the [ubuntu setup page](/catalog/ubuntu-setup), though it would be more accurate to say that Ubuntu is an extension of Debian. That's why I decided to switch over from Ubuntu 

- [Nautilus](#nautilus)
- [Samba](#samba)
- [Elder Scrolls Online](#elder-scrolls-online)
- [Logitech Trackman Marble](#logitech-trackman-marble)
- [Setup commands](#setup-commands)

---

## Nautilus
### Change location of default bookmarks

While it's always easy to add a bookmark in any file manager, it becomes a different story when it comes to changing the location afterwards.
- In Windows, it's straight-forward and easy, well, for the existing default bookmarks anyway.
	- Right click
	- Go to 'location'
	- 'Move' + 'Apply'
	- Done
- In Linux with Gnome
	- What location?

Then it gets more complicated when it comes to splitting into **display server protocols**. There is [a whole list of protocols](https://en.wikipedia.org/wiki/List_of_display_servers) and if you're running Linux, you are definitely using one of these. 

**For all intends and purposes, what I have here is for Gnome Wayland**. _Some_ of these steps are sourced from [Arch Linux Wiki](https://wiki.archlinux.org)'s [XDG user directories page](https://wiki.archlinux.org/title/XDG_user_directories)

1. Run `xdg-user-dirs-update` to initialize  
``` bash
xdg-user-dirs-update
```
This will create the file in the next step 

1. Creating custom directories  
``` bash
nano ~/.config/user-dirs.dirs
```
Edit this file to remap from the default locations to new locations, like an external HDD for example. This block is how it looks like **after I edited it**:
``` bash
# This file is written by xdg-user-dirs-update
# If you want to change or add directories, just edit the line you're
# interested in. All local changes will be retained on the next run.
# Format is XDG_xxx_DIR="$HOME/yyy", where yyy is a shell-escaped
# homedir-relative path, or XDG_xxx_DIR="/yyy", where /yyy is an
# absolute path. No other format is supported.
# 
XDG_DESKTOP_DIR="$HOME/Desktop"
XDG_DOWNLOAD_DIR="$HOME/Downloads"
XDG_TEMPLATES_DIR="$HOME/Templates"
XDG_PUBLICSHARE_DIR="$HOME/Public"
XDG_DOCUMENTS_DIR="/media/arial/Home Volume/Documents"
XDG_MUSIC_DIR="/media/arial/Home Volume/Music"
XDG_PICTURES_DIR="/media/arial/Home Volume/Pictures"
XDG_VIDEOS_DIR="/media/arial/Home Volume/Videos"
```

1. Remap GTK bookmarks  
For some reason, doing this does not remove the bookmarks of the old ones, now the system thinks that those ones are by the user. That's because those exist in a different file, aka `~/.config/gtk-3.0/bookmarks`.
``` bash
nano cat ~/.config/gtk-3.0/bookmarks
```
The following is what I see:
``` bash
file:///home/arial/Documents
file:///home/arial/Music
file:///home/arial/Pictures
file:///home/arial/Videos
file:///home/arial/Downloads
```
Even though there are no duplicates, you should still make it so that it matches what you typed in `~/.config/user-dirs.dirs`
``` bash
file:///media/arial/Home%20Volume/Documents
file:///media/arial/Home%20Volume/Music
file:///media/arial/Home%20Volume/Pictures
file:///media/arial/Home%20Volume/Videos
file:///home/arial/Downloads
```
Except Downloads, now my select directories link to my external HDD.

1. Restart Nautilus  
Nautilus may still show whatever was there previously, so kill Nautilus then start it again. For other apps that do no use the main Nautilus process (like when you click on Files in the DE), like the file picker in Firefox, this step does not reload the changes unless you restart those apps as well (i.e. restarting Firefox)
``` bash
killall nautilus
```
Note: This does not "kill all" nautilus, as the nautilus is an endangered species and killing all nautilus is unethical. Using this command has been approved by the FDA and Linus Torvalds.

Oh yeah, even with all this, I'd just prefer to delete the existing home folders and us `ln`:
``` bash
ln -s "/media/arial/Home Volume/Documents" Documents
```
Then you don't need to handle all that I mentioned up there, unless your HDD enclosure uses a JMicron controller (and it indubitably sucks) in which either way I have a different guide for that _coming soon_!

Also, Gnome.. just kinda sucks. I stuck with it for a long while because of Dash-to-Dock which is what I insanely love, but I found a way to do it in KDE (in a much more configurable way, also without extensions), and after that, I ditched it for KDE on Debian.

---

## Samba

<figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/arialhamed/static/main/images/catalog/samba.svg" style="width:50%;">
     <figcaption style="margin-top:1rem;"><i>Source: <a href="https://commons.wikimedia.org/wiki/File:Logo_Samba_Software.svg">Wikimedia Commons</a><br><sub>(i had no idea there was a logo for this until April 2025)</sub></i></figcaption>
</figure>

File sharing. Sounds simple, innit? It is if you're patient enough (unlike me), but most of the instructions online don't really do a good job visualizing it imo. 

Here's a very scratchy guide anyway, to open up for a Debian/Ubuntu computer to share files to another computer (Debian/Ubuntu/Windows). This assumes that your server & client are in the same network

These steps derives from [Nick Congleton's article](https://linuxconfig.org/how-to-set-up-a-samba-server-on-debian-10-buster) on how to set up a Samba server on Debian 10, _and_ it should work for future versions as well. Also note that these steps are very, _very_ dumbed down & really just meant for me to refer to for a simple set up in my own home where I still live with my parents (as of April 2025). If we want to do more with Samba, please refer to the article instead of this.

1. Install Samba
``` bash
sudo apt install samba
```
1. Configure Samba's Global Settings
``` bash
codium /etc/samba/smb.conf
```
Take note of the `workgroup = WORKGROUP` at the start, this really indicates that Samba really was meant for Linux servers to send to Windows clients (but Linux clients works just as well)
1. Configure a new Share
``` text
[New Share]
    comment = A new share
    path = /home/chuwi/share
    browseable = yes
    read only = no
    guest ok = no
    valid users = chuwi
```
`[New Share]` is the name of the Share.  
`comment` is what it is.  
`path` is the path to the shared folder (i've not yet tested if contents on ext4 can be read by Windows clients).  
Set `browseable` to `yes` to make it appear in the Network part in whatever file manager the client computer is using. There can be shares that are not browsable (set to `no`) already existing like `printer` iirc.  
Set `read only` to `no` if you want whosoever to access this share to be able to CRUD in the folder.  
Set `guest ok` to `no` to disallow anonymous users to access the folder, set to `yes` if you want to experience fanum tax  
Set `valid users` to whoever you want to share the folder with. This is important to note as this is only available for Samba user profiles that are existing in the server PC. If you have a user that is new or not a Samba user _in your server_, then you would have to add them in. By default, your existing user (`chuwi` in this case) that you set while installing Linux on your server is already available, so if both the server and client is you, then you really don't need to create a new profile since you know the server's username and password.
1. Restart Samba
``` bash
systemctl restart smbd
```
1. Set up a Samba user
``` bash
smbpasswd -a chuwi
```
Note that only users who exist as users of the server can be added as a Samba user. This server & client setup is between you only, you may use your main account on the server (the one that you've given the name to during installation, `chuwi` in this case)
Now you've done the super minimal setup of Samba on your server PC. The next step will address the dw
1. How to connect to a Share  
In Linux:
``` bash
sudo apt install samba-client cifs-utils
```
Install these, then whatever file manager you use, go to Network, find the name of your machine, open it and then you should be able to see all of your Samba Shares! These would usually come packaged by default in Debian 12

---

## Elder Scrolls Online
<timestamp>May 3, 2025</timestamp>

There are some games that just do not pass the vibe check when it comes to Linux. Not too long ago, PewDiePie posted a video about his experience with Linux and [why you should too](https://www.youtube.com/watch?v=pVI_smLgTY0). I mean, ever since Valve released the Steam Deck, they proved that Linux is a very viable operating system for gaming, among many, many other things! 

However, not everything is milk & honey for the normal user, as Linux still only takes about [4.27% of the world's market share of desktop operating systems](https://gs.statcounter.com/os-market-share/desktop/worldwide), which also means that a lot of software developers do not have much incentive to port their software to Linux. 

Fortunately, we got [Wine](https://www.winehq.org/) for anything that you need to run a _.exe_ file. For games, there is [Proton](https://github.com/ValveSoftware/Proton), made by [Valve & Codeweavers in 2018](https://en.wikipedia.org/wiki/Proton_(software)) (and whoa, I didn't expect its release date to be that recent. No wonder Linux game was non-existent back then). Many Windows-exclusive games are now available to play in Linux, and it's all just a few clicks away (no terminal required!)

Then there are the more.. complicated software, like MMOs or games with their own installer, etc. There are many resources nowadays that you can find for games like these, and here, at the time of posting, is how I got Elder Scrolls Online working **with addons** in Debian 12!

Note: This guide expects you to be on [Debian 12 Bookworm](https://www.debian.org/distrib/) and using Gnome 43.9 (Wayland) as the desktop environment (though the desktop environment shouldn't matter at all, really). This guide also expects you to have at least have purchased [Elder Scrolls Online on Steam](https://store.steampowered.com/app/306130/The_Elder_Scrolls_Online/). 

1. Install Steam  
1. Install ESO  
I mean, duh. Just go to your library and install it. Also, trust me, you do not want to use the installer from Zenimax themselves (not on Linux anyway)
1. Configure ESO options  
At this point in Windows, you have nothing else to worry about, but at this point you _need_ to do following configurations.  
Right-click on ESO in your library, select "**Properties**". You should see field called "**LAUNCH OPTIONS**", that is where you should key in the following parameter:
``` bash
PROTON_SET_GAME_DRIVE=1 %command%
```
This will enable ESO to see that there is more than 20GB of available space that Proton allocates by default.  
Next, navigate to "**Compatibility**", check "**Force the use of a specific Steam Play compatibility tool**", then select "**Proton 9.0-4**". For some reason, this version is the only one working (not Hotfix or Experimental) <video muted loop autoplay nocontrols><source src="https://github.com/arialhamed/static/raw/refs/heads/main/video/catalog/debian-eso-steam-config.webm" type="video/webm">Your browser does not support the video tag.</video>
1. Installing Minion  
Thanks to Reddit user [enigmatic_bread](https://www.reddit.com/r/elderscrollsonline/comments/13jzw2o/for_steam_deck_and_linux_users_minion_in_a_flatpak/), ESO & WOW players on Linux (including Steam Deck) now have Minion on Flatpak!:
``` bash
flatpak install gg.minion.Minion
```
The developer added that it is huge since they "had to add a whole JRE which supports JFX to allow for minion to work."  
Remember to point it to your AddOns folder when it prompts you for it (and just like Minion itself, it will halt after it's done scanning, so you still need to kill it after it's done scanning, except that since you can run it in a terminal, you can see what it does in each step so that you know when to kill it!)
1. Configure Symlinks  
This step is actually optional if you do not copy over the 'Elder Scrolls Online' file in your 'Documents' folder back in Windows, and you'd rather create a new set of AddOns. I'm adding this step because I have it saved in my external storage that stored my library folders from Windows, including the 'Documents' folder, and my ESO AddOns are located there (and I really do not want to reinstall all of them).  
So what I did was run the game at least once. Doing that will create the 'Elder Scrolls Online' folder in the Proton container, something like this:
``` bash
~/.local/share/Steam/steamapps/compatdata/306130/pfx/drive_c/users/steamuser/Documents/Elder Scrolls Online
```
Here, I opened the terminal and located to that directory. You should see that there is only one folder in there named 'live'. Delete that folder & its contents, and then create a symlink here:
``` bash
ln -s ~/Documents/Elder\ Scrolls\ Online/live/ live
```
Ensure the `-s` flag there because hardlinks are wack /hj
1. Handling errors from AddOns during gameplay  
This one is also from my experience while setting it up. As of the writing of this post, I guess Minion was not updating the AddOns right, and I hope they fix that in the future (I couldn't find LibAddonMenu2.0 in Flatpak Minion). For now, I found that _[Dolgubon's Lazy Writ Crafter](https://www.esoui.com/downloads/info1346-DolgubonsLazyWritCrafter.html)_ was not functional, alongside some other add-ons, and honestly, all I did was **replace those add-ons manually via https://www.esoui.com/**. These will _**not**_ replace your variables, since those are saved in the SavedVariables folder that is in the 'live' folder, same as the AddOns folder.  
The only add-on that was built on Windows is TTC as it uses a disgusting .exe binary to update its prices. No matter, use [Linux Tamriel Trade Centre](https://www.esoui.com/downloads/info3249-LinuxTamrielTradeCenter.html).

---

## Logitech Trackman Marble

SO this is just an echo to [Arch Linux Wiki's dedicated article about this mouse](https://wiki.archlinux.org/title/Logitech_Marble_Mouse), which is absolutely phenomenal that a mouse that is basically 3 years older is still being remembered. Heck I was able to snag one myself just cuz I saw it for quite a deal of SGD$20 and now I kinda daily drive it as my left-handed trackball.

This section of this catalog is simply some commands on enabling scrolling on a mouse button (using the smaller buttons on the sides). I only show the ones that worked for me & my Logitech Trackman Marble (T-BC21)

### GNOME 3 and Wayland
Middle click emulation
``` bash
gsettings set org.gnome.desktop.peripherals.trackball middle-button-emulation true
```
Mouse wheel emulation (&lt;button_id&gt; is either 8 or 9 (left or right small button))
``` bash
gsettings set org.gnome.desktop.peripherals.trackball scroll-wheel-emulation-button <button_id>
```
Acceleration profile (either "flat", "adaptive" or "default")
``` bash
gsettings set org.gnome.desktop.peripherals.trackball accel-profile <profile>
```

### Plasma and Wayland
Mouse wheel emulation
``` bash
event="$(basename $(readlink /dev/input/by-id/usb-Logitech_USB_Trackball-event-mouse))"

qdbus org.kde.KWin /org/kde/KWin/InputDevice/$event org.kde.KWin.InputDevice.scrollOnButtonDown true
```
By default the small left button is used. If you want to use the small right button, set 
``` bash
qdbus org.kde.KWin /org/kde/KWin/InputDevice/$event org.kde.KWin.InputDevice.scrollButton 276
```
For other buttons, follow the table below:
|Button|Kwin button code|Function (default)|
|-|-|-|
|Large button left|272|left click|
|Large button right|273|right click|
|Small button left|275|browser forward|
|Small button right|276|browser back|

---

## Setup commands

Say you've decided to leave Canonical and get an DE-agnostic distro like Debian or Arch, but like me, you chose Gnome at installation and you're now on some other DE like KDE, and you've made your mind and don't want to have Gnome anymore. Here's a command I found [here](https://askubuntu.com/a/1240089) that can clear Gnome of your system to a certain extent.
``` bash
sudo apt-get remove $(apt list --installed "gnome*" 2>/dev/null | awk -F'/' 'NR>1{print $1}')
```
