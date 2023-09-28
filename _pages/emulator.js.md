---
title: emulator.js
permalink: /emulator
redirect_from: 
 - /emulator/
 - /emulators
 - /emulators/
 - /emulator-js
 - /emulator-js/
 - /emulators-js
 - /emulators-js/
 - /emulatorjs
 - /emulatorjs/
 - /emulatorsjs
 - /emulatorsjs/
layout: default
emulator: true
---

<div style="max-width:100%; max-height:100%;">
  <div id="game"></div>
  <div id="loading-gif" style="text-align:center;"><img src="https://raw.githubusercontent.com/arialhamed/static/main/images/spinner.gif"></div>
</div>
<br>
<table style="border: none;" width="100%">
  <tbody>
    <tr>
      <td width="50%" id="left-table">
        Default controls:
        <table>
          <tbody>
            <tr><td>Key</td><td>Binding</td></tr>
            <tr><td>A</td><td>K</td></tr>
            <tr><td>B</td><td>J</td></tr>
            <tr><td>LT</td><td>I</td></tr>
            <tr><td>RT</td><td>L</td></tr>
            <tr><td>Up</td><td>W</td></tr>
            <tr><td>Down</td><td>S</td></tr>
            <tr><td>Left</td><td>A</td></tr>
            <tr><td>Right</td><td>D</td></tr>
            <tr><td>Start</td><td>Enter</td></tr>
            <tr><td>Select</td><td>Delete</td></tr>
            <tr><td>Q. Save</td><td>F2</td></tr>
            <tr><td>Q. Load</td><td>F4</td></tr>
            <tr><td>Fast-Forward</td><td>Shift</td></tr>
          </tbody>
        </table>
      </td>
      <td width="50%">
        List of games:
        <ul id="gba-intake">
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<script>
listGBA();
async function listGBA(){
  let gbaIntakeText = "";
  const response = await fetch("https://api.github.com/repos/arialhamed/static/contents/games/roms/gba");
  const all = await response.json();
  all.forEach(addToHTML);
  document.getElementById("gba-intake").innerHTML = gbaIntakeText;
  async function addToHTML(romDeets){
    gbaIntakeText += "<li><a href=\"/emulator?rom=" + romDeets["name"] + "\">" + romDeets["name"].slice(0, -4) + "</a></li>";
  }
}
// Read URL for EmulatorJS. If there is no rom query loaded, don't load emulator settings
const currentQuery = new URLSearchParams(window.location.search); 
const romName = currentQuery.get("rom");
if (!romName) {
  // This will be loaded in the page first
  document.getElementById("left-table").innerHTML = "Select one of the games here to start playing.<br><br>Particles background is disabled to optimize gameplay.<br><br>EmulatorJS by <a href=\"https://github.com/EmulatorJS/EmulatorJS\">Ethan O\'Brien</a>";
  document.getElementById("loading-gif").innerHTML = "";
} 
// EmulatorJS
EJS_player = '#game';
EJS_core = romName.slice(-3);
// EJS_gameName = 'The Legend of Zelda - The Minish Cap';
EJS_color = '#222';
EJS_startOnLoaded = true; 
EJS_onGameStart = function(e){ document.getElementById("loading-gif").innerHTML = ""; };
EJS_Buttons = { playPause: false, restart: true, mute: false, settings: false, fullscreen: true, saveState: false, loadState: false, screenRecord: false, gamepad: true, cheat: false, volume: true, saveSavFiles: false, loadSavFiles: false, quickSave: false, quickLoad: false, screenshot: false, cacheManager: false };
EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/';
EJS_gameUrl = "https://raw.githubusercontent.com/arialhamed/static/main/games/roms/" + romName.slice(-3) + "/" + romName;
EJS_biosUrl = "https://raw.githubusercontent.com/arialhamed/static/main/others/" + romName.slice(-3) + ".zip";
EJS_defaultControls = {
  0: {
    0: {'value' : 'j', 'value2' : 'BUTTON_2', 'keycode': '74'}, // B
    // 1: {'value' : '', 'value2' : '', 'keycode': ''}, // Y
    2: {'value' : 'delete', 'value2' : 'SELECT', 'keycode': '46'}, // SELECT
    3: {'value' : 'enter', 'value2' : 'START', 'keycode': '13'}, // START
    4: {'value' : 'w', 'value2' : 'LEFT_STICK_Y:-1', 'keycode': '87'}, // UP
    5: {'value' : 's', 'value2' : 'LEFT_STICK_Y:+1', 'keycode': '83'}, // DOWN
    6: {'value' : 'a', 'value2' : 'LEFT_STICK_X:-1', 'keycode': '65'}, // LEFT
    7: {'value' : 'd', 'value2' : 'LEFT_STICK_X:+1', 'keycode': '68'}, // RIGHT
    8: {'value' : 'k', 'value2' : 'BUTTON_3', 'keycode': '75'}, // A 
    // 9: {'value' : '', 'value2' : '', 'keycode': ''}, // X
    10: {'value' : 'i', 'value2' : 'LEFT_TOP_SHOULDER', 'keycode': '73'}, // L
    11: {'value' : 'l', 'value2' : 'RIGHT_TOP_SHOULDER', 'keycode': '76'}, // R
    24: {'value' : 'f2', 'value2' : '', 'keycode': '113'}, // QUICK SAVE
    25: {'value' : 'f4', 'value2' : '', 'keycode': '115'}, // QUICK LOAD
    27: {'value' : 'shift', 'value2' : '', 'keycode': '16'} // FAST
    // 28: {'value' : 'r', 'value2' : '', 'keycode': '82'} // SLOW
  },
  1: {},
  2: {},
  3: {}
}
</script>

<script src='https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/loader.js'></script>
