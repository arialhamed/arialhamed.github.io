---
title: SRIHash
permalink: /tools/srihash
layout: default
redirect_from:
 - /tools/srihash/
 - /srihash
 - /srihash/
---
<script src="https://arialhamed.github.io/static/js/clipboard.js" defer=""></script>
<script src="https://arialhamed.github.io/static/js/srihash.js" defer=""></script>
<pre id="for-copy" style="display:none;"></pre>
<div id="app" class="container">
    <div class="container" id="sriAppContainer">
        <div id="sri-app" style="text-align: center;">
            <h1>SRI Hash Generator</h1>
            <label for="url">Enter the URL of the resource you wish to use:</label>
            <form id="sri-form" action="#">
                <input id="url" class="form-control" name="url" type="url" value="" placeholder="Resource URL" required="" autofocus="" spellcheck="false">
                <br>
                <select id="sriHash" type="select">
                    <option value="sha256">SHA-256</option>
                    <option value="sha384" selected="">SHA-384</option>
                    <option value="sha512">SHA-512</option>
                </select>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input id="sriSubmit" class="btn btn-secondary" type="submit" value="Hash!">
            </form>
            <pre id="sri-snippet" name="sriSnippet" style="background-color: #fff1;"></pre>
            <div id="sri-error"></div>
        </div>
    </div>
</div>
