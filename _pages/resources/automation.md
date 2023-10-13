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

<ul id="scripts_list"></ul>

<div id="scripts_content"></div>

<script>
listResults();
function slugify(e){return String(e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}
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
    if (details["type"] == "dir"){
        const directory = await fetch(details["url"]);
        const directoryList = await directory.json();
        directoryList.forEach(addToHTML);
    } else {
        const responseFile = await fetch(details["download_url"]);
        const responseContent = await responseFile.text();
        document.getElementById("scripts_content").innerHTML += "\
        <h3 id=\"" + slugify(details["name"]) + "\"><a href=\"" + details["download_url"] + "\" target=\"_blank\">" + details["name"] + "</a></h3> \
        <div style='white-space: pre-line;'> \ {% highlight python %} \ " + responseContent + " \ {% endhighlight %} \ </div> \
        <br><br> \
        ";
        document.getElementById("scripts_list").innerHTML += "<li><a href=\"#" + slugify(details["name"]) + "\">" + details["name"] + "</a></li>"
    }
}
</script>

{% include comments.html url=page.url %}