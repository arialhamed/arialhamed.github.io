---
title: debian setup
layout: default
permalink: /guides/debian-setup
redirect_from:
 - /guides/debian-setup/
 - /debian-setup
 - /debian-setup/
 - /guides/samba-setup
 - /guides/samba-setup/
 - /samba-setup
 - /samba-setup/
---

<figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/arialhamed/static/main/images/guides/debian.svg" style="width:50%;">
     <figcaption style="margin-top:1rem;"><i>Source: <a href="https://commons.wikimedia.org/wiki/File:Debian-OpenLogo.svg">Wikimedia Commons</a> and modified with <a href="https://inkscape.org/">Inkscape</a></i></figcaption>
</figure>

This is more, like, for me to reference to. i learned some things **and i will forget them** after a while, so here it is.

A lot of what is existing here is an extension of the [ubuntu setup page](/guides/ubuntu-setup), though it would be more accurate to say that Ubuntu is an extension of Debian. That's why I decided to switch over from Ubuntu (but I still like Gnome lol)

- [Nautilus](#nautilus)

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

2. Creating custom directories
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

3. Remap GTK bookmarks  
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

4. Restart Nautilus

Nautilus may still show whatever was there previously, so kill Nautilus then start it again. For other apps that do no use the main Nautilus process (like when you click on Files in the DE), like the file picker in Firefox, this step does not reload the changes unless you restart those apps as well (i.e. restarting Firefox)
``` bash
killall nautilus
```
Note: This does not kill all nautilus, as the nautilus is an endangered species and killing all nautilus is unethical.

---

## Samba

<figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/arialhamed/static/main/images/guides/samba.svg" style="width:50%;">
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
smbpasswd -a arial
```
1. How to connect to a Share  
In Linux:
``` bash
sudo apt install samba-client cifs-utils
```
Install these, then whatever file manager you use, go to Network, find the name of your machine, open it and then you should be able to see all of your Samba Shares!

I have Mullvad on my `chuwi` server and it allows fi