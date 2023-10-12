---
title: "Automation with Python"
permalink: /resources/automation
redirect_from:
 - /resources/automation/
 - /automation
 - /automation/
layout: default
---
# Automation Scripts 

Disclaimer: All scripts here are tested and functional in Windows 10, and most scripts (unless otherwise stated) are tested and functional in Python 3.9

Python was the first language I have ever learnt when I started my journey into IT. Learnt it back in 2017, when it was part of the new Computing subject for GCE "O" Levels. Ever since then though, I barely use it in any actual homework in my NYP course, with likely 3 modules that are an exception.

However, Python has some pretty useful uses in handling files, and as a data hoarder, using Python for automating data handling is just what I need. When I started using Linux heavily in mid 2022, I soon picked up bash as well. 

This page is just simply some scripts that I use to automate some stuff. Each script should have plenty of comments inside to explain what it does. Like the other guides, this page is more for my own reference.
<hr>

{% include https://raw.githubusercontent.com/arialhamed/convenience/main/size%20reduction/split_video.py %}

<ul id="nutz"></ul>

<script>
listResults();
async function listResults(){
    let intakeText = "";
    const response = await fetch("https://api.github.com/repos/arialhamed/convenience/contents/");
    const all = await response.json();
    const allSecondLayer = all.filter(object => {
        return object["type"] = "dir";
    })
    allSecondLayer.forEach(addToHTML);
}
async function addToHTML(details){
    if (details["type"] == "dir" ){
        const directory = await fetch(details["url"]);
        const directoryList = await directory.json();
        directoryList.forEach(addToHTML)
    } else {
        document.getElementById("nutz").innerHTML += "<li><a href=\"" + details["download_url"] + "\">" + details["name"] + "</a></li>";
    }
}
</script>

{% include comments.html url=page.url %}