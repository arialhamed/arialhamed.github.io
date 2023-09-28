---
title: Emulator.JS
permalink: /emulator
layout: default
emulator: true
---

<div style="max-width:100%; max-height:100%;">
  <div id="game"></div>
</div>
<br>
<table style="border: none;" width="100%">
  <tbody>
    <tr>
      <td width="50%">
        Default controls:
        <ul>
          <li>LT -> U</li>
          <li>A -> O</li>
          <li>B -> I</li>
          <li>RT -> P</li>
          <li>UP -> W</li>
          <li>DOWN -> S</li>
          <li>LEFT -> A</li>
          <li>RIGHT -> D</li>
          <li>START -> Esc</li>
          <li>SELECT -> Backtick</li>
          <li>FAST-FORWARD -> Shift</li>
        </ul>
      </td>
      <td width="50%">
        Current game:
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
// Read URL for EmulatorJS
const currentQuery = new URLSearchParams(window.location.search); 
const romName = currentQuery.get("rom");
// EmulatorJS
EJS_player = '#game';
EJS_core = romName.slice(-3);
// EJS_gameName = 'The Legend of Zelda - The Minish Cap';
EJS_color = '#222';
EJS_startOnLoaded = true;
EJS_Buttons = { playPause: false, restart: true, mute: false, settings: false, fullscreen: true, saveState: false, loadState: false, screenRecord: false, gamepad: true, cheat: false, volume: false, saveSavFiles: false, loadSavFiles: false, quickSave: false, quickLoad: false, screenshot: false, cacheManager: false };
EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/';
EJS_gameUrl = "https://raw.githubusercontent.com/arialhamed/static/main/games/roms/gba/" + romName;
EJS_biosUrl = "https://raw.githubusercontent.com/arialhamed/static/main/others/gba_bios.bin";
EJS_defaultControls = {
  0: {
    0: {'value' : 'i', 'value2' : 'BUTTON_2', 'keycode': '73'}, // B
    // 1: {'value' : '', 'value2' : '', 'keycode': ''}, // Y
    2: {'value' : '`', 'value2' : 'SELECT', 'keycode': '192'}, // SELECT
    3: {'value' : 'escape', 'value2' : 'START', 'keycode': '27'}, // START
    4: {'value' : 'w', 'value2' : 'LEFT_STICK_Y:-1', 'keycode': '87'}, // UP
    5: {'value' : 's', 'value2' : 'LEFT_STICK_Y:+1', 'keycode': '83'}, // DOWN
    6: {'value' : 'a', 'value2' : 'LEFT_STICK_X:-1', 'keycode': '65'}, // LEFT
    7: {'value' : 'd', 'value2' : 'LEFT_STICK_X:+1', 'keycode': '68'}, // RIGHT
    8: {'value' : 'o', 'value2' : 'BUTTON_3', 'keycode': '79'}, // A 
    // 9: {'value' : '', 'value2' : '', 'keycode': ''}, // X
    10: {'value' : 'u', 'value2' : 'LEFT_TOP_SHOULDER', 'keycode': '85'}, // L
    11: {'value' : 'p', 'value2' : 'RIGHT_TOP_SHOULDER', 'keycode': '80'}, // R
    24: {'value' : 'f2', 'value2' : '', 'keycode': '113'}, // QUICK SAVE
    25: {'value' : 'f3', 'value2' : '', 'keycode': '115'}, // QUICK LOAD
    27: {'value' : 'shift', 'value2' : '', 'keycode': '16'} // FAST
    // 28: {'value' : 'r', 'value2' : '', 'keycode': '82'} // SLOW
  },
  1: {},
  2: {},
  3: {}
}
</script>
<script src='https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/loader.js'></script>
