---
title: Emulator.JS
permalink: /emulator
layout: default
emulator: true
---

<div style="max-width:100%; max-height:100%;">
    <div id="game"></div>
</div>
<script>
    EJS_player = '#game';
    EJS_core = 'gba';
    EJS_gameName = 'The Legend of Zelda - The Minish Cap';
    EJS_color = '#222';
    EJS_startOnLoaded = true;
    EJS_Buttons = { playPause: false, restart: true, mute: false, settings: false, fullscreen: true, saveState: false, loadState: false, screenRecord: false, gamepad: true, cheat: false, volume: false, saveSavFiles: false, loadSavFiles: false, quickSave: false, quickLoad: false, screenshot: false, cacheManager: false };
    EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/';
    EJS_gameUrl = "https://raw.githubusercontent.com/arialhamed/static/main/games/roms/gba/metroid-fusion.zip";
    EJS_Settings = {defaultControllers: {'0': {'0': {'value': '40'},'1': {'value': '37'},'2': {'value': '16'},'3': {'value': '27'},'4': {'value': '87'},'5': {'value': '83'},'6': {'value': '65'},'7': {'value': '68'},'8': {'value': '39'},'9': {'value': '38'},'10': {'value': '81'},'11': {'value': '69'}},'1': {},'2': {},'3': {}}}
</script>
<script src='https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/loader.js'></script>
