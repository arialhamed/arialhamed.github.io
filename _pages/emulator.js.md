---
title: Emulator.JS
permalink: /emulator
layout: default
---

<div style="max-width:100%; max-height:100%;">
    <div id="game"></div>
</div>
<script>
    EJS_player = '#game';
    EJS_core = 'nds';
    EJS_gameName = 'The Legend of Zelda - The Minish Cap';
    EJS_color = '#222';
    EJS_startOnLoaded = true;
    EJS_Buttons = { playPause: false, restart: true, mute: false, settings: false, fullscreen: true, saveState: false, loadState: false, screenRecord: false, gamepad: true, cheat: false, volume: false, saveSavFiles: false, loadSavFiles: false, quickSave: false, quickLoad: false, screenshot: false, cacheManager: false };
    EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/';
    EJS_gameUrl = "https://raw.githubusercontent.com/arialhamed/static/main/games/roms/nds/the-legend-of-zelda-spirit-tracks.zip";
    // EJS_defaultControls = {0: {0: {'value': '221','value2': 'BUTTON_2','keycode': '88'},1: {'value': '61','value2': 'BUTTON_4','keycode': '83'},2: {'value': '222','value2': 'SELECT','keycode': '86'},3: {'value': '13','value2': 'START','keycode': '13'},4: {'value': '87','value2': 'DPAD_UP','keycode': '38'},5: {'value': '83','value2': 'DPAD_DOWN','keycode': '40'},6: {'value': '65','value2': 'DPAD_LEFT','keycode': '37'},7: {'value': '68','value2': 'DPAD_RIGHT','keycode': '39'},8: {'value': '220','value2': 'BUTTON_1','keycode': '90'},9: {'value': '8','value2': 'BUTTON_3','keycode': '65'},10: {'value': '81','value2': 'LEFT_TOP_SHOULDER','keycode': '81'},11: {'value': '69','value2': 'RIGHT_TOP_SHOULDER','keycode': '69'},12: {'value': 'e','value2': 'LEFT_BOTTOM_SHOULDER','keycode': '69'},13: {'value': 'w','value2': 'RIGHT_BOTTOM_SHOULDER','keycode': '87'},14: {'value2': 'LEFT_STICK'},15: {'value2': 'RIGHT_STICK'},16: {'value': 'h','value2': 'LEFT_STICK_X:+1','keycode': '72'},17: {'value': 'f','value2': 'LEFT_STICK_X:-1','keycode': '70'},18: {'value': 'g','value2': 'LEFT_STICK_Y:+1','keycode': '71'},19: {'value': 't','value2': 'LEFT_STICK_Y:-1','keycode': '84'},20: {'value': 'l','value2': 'RIGHT_STICK_X:+1','keycode': '76'},21: {'value': 'j','value2': 'RIGHT_STICK_X:-1','keycode': '74'},22: {'value': 'k','value2': 'RIGHT_STICK_Y:+1','keycode': '75'},23: {'value': 'i','value2': 'RIGHT_STICK_Y:-1','keycode': '73'},24: {},25: {},26: {},27: {},28: {},29: {}}};
</script>
<script src='https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/loader.js'></script>
