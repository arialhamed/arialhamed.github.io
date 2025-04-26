---
title: ubuntu tips
layout: default
permalink: /guides/ubuntu-setup
redirect_from:
 - /guides/ubuntu-setup/
 - /ubuntu-setup
 - /ubuntu-setup/
---

<div style="text-align:center;">
     <img src="https://raw.githubusercontent.com/arialhamed/static/main/images/guides/ubuntu.svg" style="width:50%;">
</div>

<br><br>

This is more, like, for me to reference to. i learned some things **and i will forget them** after a while, so here it is.

I also have some [preference commands](#preference-commands) that i can input when installing ubuntu (and it's derivatives) fresh

All commands here are tested on Ubuntu 22.04


<br><br><br>

---

## Getting device info via Terminal


### Get Windows License Key from machine 
``` bash
sudo tail -c+57 /sys/firmware/acpi/tables/MSDM
```

### Get machine's serial number
``` bash
sudo dmidecode -t system | grep Serial
```

### Get machine's Video RAM (minor graphics card details)
``` bash
glxinfo | egrep -i 'device|memory'
```

### Get machine's RAM info
``` bash
sudo dmidecode --type 17
```

### Get machine's battery info
``` bash
upower -i /org/freedesktop/UPower/devices/battery_BAT0
```

if your machine has more than 1 rechargeable battery, replace `_BAT0` with `_BAT1`.

### Get WiFi password(s) (must be currently/previously connected networks)
``` bash
sudo grep psk= /etc/NetworkManager/system-connections/*
```

### Find current session's display server protocol

``` bash
~$ loginctl
SESSION  UID USER      SEAT  TTY
     c2 1000 arialhamed seat0    

1 sessions listed.
~$ loginctl show-session c2 -p Type
Type=x11
```

The `c2` in the first output is used as the 2nd paremeter for `loginctl` in the next user input, as shown above.

Note that there are <a href="https://en.wikipedia.org/wiki/Windowing_system#Display_server_communications_protocols">6 known protocols</a>

### Linux Hardware
This requires `hw-probe` package
``` bash
sudo -E hw-probe --all --upload
```

<br><br><br>

---

### Temperature monitor from Terminal
This is a way to keep a tab on how hot your laptop would be. You would need to install the `lm-sensors` package through `apt` before running the `watch` command

``` bash
watch -n .2 sensors
```

<br><br><br>

---

### ESO in Linux (or just large programs on Proton/Wine)
or just large Steam Games in general that are not built for Linux compatibility. For some reason, Proton or whatever will give you a very limited amount of storage for your Windows games to work with. This is an unfortunate case for _Elder Scrolls Online_, where it actually makes use of an external installer/launcher after downloading about 100GB of the game straight from Steam. After the initial download though, I don't think it actually downloads again, the installer/launcher is just there to apply updates when there is. To solve the limited storage space problem:

1. Go to your **Steam library**
1. **Right click** on the game that you want Wine to increase itself in size
1. Choose **Properties**
1. The second thing in the first page that you see should be "LAUNCH OPTIONS". In that text box, enter the following:
     * `PROTON_SET_GAME_DRIVE=1 %command%`

note that you actually need that total space in the start, minimum 128GB storage should be fine but i personally wouldn't recommend that. Also, it sure does work for me, though i may not guarantee that it'll work for everyone in different time periods (as would everything else here, really)

Answer found <a href="https://www.reddit.com/r/linuxquestions/comments/n4dbiy/eso_on_proton_disk_space_issue_with_linux_pop_os/gwv9qbj/?utm_source=share&utm_medium=web2x&context=3">on Reddit</a>.

<br><br><br>

---

### Locked folder in your own computer
I noticed that sometimes i get locked folders whenever i do some meta stuff that involves ubuntu. 

``` bash
sudo chown -R $USER: $HOME
```

`$USER` refers to the current user, which is you. <br>`$HOME` refers to the current user's home directory. Just entering `$HOME` itself, bash will return "Is a directory".

Just to put it here, say for example, my _APKs_ folder in my removable storage is locked for whatever reason. I just replaced `$HOME` with the exact location of the folder.

``` bash
sudo chown -R $USER: /media/arialhamed/080D1CF03C033DFF/APKs
```

<br><br><br>

---

### Timestamps in terminal/bash/console (whatever you call it)
I find that this is a rather cool feature for whatever you want to do on the console, like if i left a command to run, i may want to know when it finished when i was gone or in another window. 

``` bash
sudo nano ~/.bashrc
```

A window should appear where you see a whole bunch of text and comments in it. Add the following to end of the file:

``` text
export PROMPT_COMMAND="echo -n \[\$(date +%H:%M:%S)\]\ "
```

it's good to leave your own comment in as well telling future you what it is. Next, _save_ and _exit_. Close and open console, and you should see something like this:

``` bash
[23:40:09] arialhamed@C640:~$
```

yup, i typed this tip on 11:40pm.

Source: <a href="https://askubuntu.com/questions/193416/adding-timestamps-to-terminal-prompts">AskUbuntu</a>

<br><br><br>

---

<br><br><br>

---

### Connecting laptop to WiFi from phone
This requires the phone (tested on Android) to be already connected to the WiFi that you want your Linux machine (which should be a laptop) to be connected to too. 

1. Install Zbar (required for the last step).
``` bash
sudo apt install zbar-tools
```
2. Clone the following repository in your desired location, the change current directory into the repository.
``` bash
git clone https://github.com/kokoye2007/wifi-qr; cd wifi-qr
```
3. Run the file as shown.
``` bash
./wifi-qr s
```
4. Your webcam will turn on, and a window will open showing the webcam feed. You should have your WiFi QR code available through your phone. Simply just show your phone screen to the webcame and the window will close if it picks up, and you should be automatically connected to the network.

To check the network password, there's [a tip here that lists WiFi passwords](#get-wifi-passwords-must-be-currentlypreviously-connected-networks).

<br><br><br>

---

### Building all kinds of different stuff on Ubuntu
Single line commands (enter superuser mode by `sudo -s`) for different software to download and compile automatically. More or less, these commands are for me and my own file structure, where I put my Repos in its own 'Repos' file at the same level as Downloads and Documents. These commands will assume that the Repos folder exists in the Home directory.

<a href="https://wiki.dolphin-emu.org/index.php?title=Building_Dolphin_on_Linux">Dolphin Emulator</a>:

```
sudo apt install --no-install-recommends ca-certificates qtbase5-dev qtbase5-private-dev git cmake make gcc g++ pkg-config libavcodec-dev libavformat-dev libavutil-dev libswscale-dev libxi-dev libxrandr-dev libudev-dev libevdev-dev libsfml-dev libminiupnpc-dev libmbedtls-dev libcurl4-openssl-dev libhidapi-dev libsystemd-dev libbluetooth-dev libasound2-dev libpulse-dev libpugixml-dev libbz2-dev libzstd-dev liblzo2-dev libpng-dev libusb-1.0-0-dev gettext -y; cd Repos; rm -r -f dolphin-emu; mkdir dolphin-emu; cd dolphin-emu; git clone https://github.com/dolphin-emu/dolphin; cd dolphin; git submodule update --init; mkdir Build && cd Build; cmake ..; make -j$(nproc); sudo make install; exit

```

QDirStat: 
```
sudo apt-get install build-essential qtbase5-dev zlib1g-dev -y; cd Repos; rm -r -f shundhammer; mkdir shundhammer; cd shundhammer; git clone https://github.com/shundhammer/qdirstat; cd qdirstat; qmake; make; sudo make install; exit

```


<br><br><br>

---

### Configure Firefox touch input for Wayland
unlike Windows, touch input is an after-thought, so naturally, whether its X11 or Wayland, Firefox is not optimized for convertible laptops (like the one i have right now as of time of writing this [05-Sept-2022]). So here's what to do:

1. Open Konsole and type this in: 
``` console
sudo nano /etc/security/pam_env.conf
```

2. Add the following to the end of the file:
```
MOZ_ENABLE_WAYLAND=1
MOZ_USE_XINPUT2 DEFAULT=1
```

<br><br><br>

---

### Discord Rich Presence in Visual Studio Code
Unlike Windows, Linux is always a bit harder for commercial applications and it's integrations meant for Windows. If anyone installed Discord through _snap_ and installed any Discord Presence extension in Visual Studio Code, they may notice that Discord will not report any activity reported under your profile. 

Well, if you want to show off to your friends that you're doing something else than gaming, here's the solution for you!

1. If you have Discord (and the presence thing doesn't work), uninstall it. I had it installed via snap so I did `sudo snap remove discord`
1. Go to <a href="https://discordapp.com/">https://discordapp.com/</a> and download the [.deb file](https://discord.com/api/download?platform=linux&format=deb)
1. Go to your Downloads folder and open Terminal there, and enter the following: `dpkg -i discord*.deb`
1. Got an error? That's expected (i think), so type in the following: `sudo apt install --fix-broken`, then **try the previous step again**. The error happened because its missing libc++1
1. Open Discord and sign in
1. Install <a href="https://marketplace.visualstudio.com/items?itemName=LeonardSSH.vscord">Discord Rich Presence</a> (not sure if other extensions work, maybe they can) in Visual Studio Code (i think any latest stable of vscode works, i know snap installed Visual Studio Code works). Restart Visual Studio Code if necessary.
1. ding! it should work. it worked for me, though i'm not sure if it works for everyone.

<img src="https://raw.githubusercontent.com/arialhamed/static/main/images/guides/ubuntu-discord.png" width="100%">


Source: <a href="https://github.com/iCrawl/discord-vscode/issues/77">Discord Rich Presence's GitHub Issues</a>

<br><br><br>

---

### Installing Minecraft, like, correctly

If you have any existing Minecraft installation, remove it first. One known installation (which i have problems with) is through snap:

``` bash
sudo snap remove mc-installer
```

Download the official `Minecraft.deb` package from <a href="">their official site</a> and run this in the same directory as the package:

``` bash
sudo dpkg --install --force-depends Minecraft.deb
```

<br><br><br>

---

### Setting battery thresholds without using GUI

This does it for 1 battery (likely internal battery is 0 then external is 1)

``` bash
echo 85 | sudo tee /sys/class/power_supply/BAT0/charge_stop_threshold;
echo 75 | sudo tee /sys/class/power_supply/BAT0/charge_start_threshold;
```

These lines needs root access. Hypothetically, if you need to run this at startup without the need for root access authentication, I suggest you create your own `service` in your system 

TODO: put threshold service walkthrough here

<br><br><br>

---

### Is shutdown taking too long?

Does `shutdown now`{:.bash} & `shutdown -P 0`{:.bash} still take ages and those weird characters appearing like @^@^@^@^@^@^@^@^@^ ? Well, I may or may not have found a way to fix that! 

1. Create backups of `/etc/systemd/system.conf`{:.bash} & `/etc/systemd/user.conf`{:.bash} just in case, preferably outside of the system.
1. Open both of those up with any text editor of your choice.
1. Both with have this line, `#DefaultTimeoutStopSec=90s`.
1. Change that to `DefaultTimeoutStopSec=3s`, or any amount, on both files. Note that I removed the comment char as well.
1. `reboot`


Source: [ItsFOSS](https://itsfoss.com/long-shutdown-linux/)

---

### My own setup command.

the following are just **my** own commands that i run before taking a nap or have lunch after fresh installing a new ubuntu installation. It just downloads a pre-made shell script and runs it.
``` properties
curl -s -L https://github.com/arialhamed/convenience/raw/main/repeatables/setup.sh | bash
```

note for ari: the command above is configured for Kubuntu, where certain packages already exist as it's own version that belongs in KDE, such as _KDE Partition Manager_ that is the KDE version for _GParted_. This is also configured for if you're dual-booting with Windows, which would allow you to run Visual Studio instead of MonoDevelop.



{{ page.last_modified_at | date: 'Last modified: %B %d, %y at %H:%M:%S' }}