---
title: firefox
layout: default
permalink: /guides/firefox
redirect_from:
 - /guides/firefox/
 - /firefox
 - /firefox/
---

<figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/arialhamed/static/main/images/guides/firefox.svg" style="width:50%;">
     <figcaption style="margin-top:1rem;"><i>Source: <a href="https://commons.wikimedia.org/wiki/File:Firefox_logo,_2017.svg">Wikimedia Commons</a> and modified with <a href="https://inkscape.org/">Inkscape</a></i></figcaption>
</figure>

aight, if you're this deep in my website you probably already know what Firefox is and probably already using it.

### Visual Studio Code on Web

This is why I made this page. For the life of me, for years, I couldn't figure out how to make [Visual Studio Code on Web](https://vscode.dev) work in Firefox. It was almost as if only I was the only one who kept on facing this error:
```
Unable to resolve resource vscode-vfs://
```
*then after the `//` it says the &lt;user&gt;/&lt;repository&gt;.

#### So here's the full list of how I solved it:

1. Add exception for vscode on web in Firefox's Enchanced Tracking Protection

That's it. THAT'S IT. THAT IS ALLLL. OMGGGG

I will be fuming, for, like a day. Not that big of a deal tbh. Of course it requires it it requires to proprietary software to interact with GitHub's credential handler or smtg idk.