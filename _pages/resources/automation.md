---
title: "Automation with Python"
permalink: /resources/automation
redirect_from:
 - /resources/automation/
 - /automation
 - /automation/
layout: default
prism: true
---
# Automation Scripts 

Disclaimer: All scripts here are tested and functional in Windows 10, and most scripts (unless otherwise stated) are tested and functional in Python 3.9

Python was the first language I have ever learnt when I started my journey into IT. Learnt it back in 2017, when it was part of the new Computing subject for GCE "O" Levels. Ever since then though, I barely use it in any actual homework in my NYP course, with likely 3 modules that are an exception.

However, Python has some pretty useful uses in handling files, and as a data hoarder, using Python for automating data handling is just what I need. When I started using Linux heavily in mid 2022, I soon picked up bash as well. 

This page is just simply some scripts that I use to automate some stuff. Each script should have plenty of comments inside to explain what it does. Like the other guides, this page is more for my own reference.
<hr>

<ul id="scripts_list"></ul>

<div id="scripts_content">
    <pre data-src="https://raw.githubusercontent.com/arialhamed/convenience/main/repeatables/instagram_comment_purge.py"></pre>
    <pre data-src="https://raw.githubusercontent.com/arialhamed/convenience/main/repeatables/setup.sh"></pre>
    <pre data-src="https://raw.githubusercontent.com/arialhamed/convenience/main/repeatables/timestamp.py"></pre>
    <pre data-src="https://raw.githubusercontent.com/arialhamed/convenience/main/repeatables/update-git.sh"></pre>
    <pre data-src="https://raw.githubusercontent.com/arialhamed/convenience/main/others/file_party_time.py"></pre>
    <pre data-src="https://raw.githubusercontent.com/arialhamed/convenience/main/size%20reduction/dedup.py"></pre>
    <pre data-src="https://raw.githubusercontent.com/arialhamed/convenience/main/size%20reduction/split_video.py"></pre>
    <pre data-src="https://raw.githubusercontent.com/arialhamed/convenience/main/size%20reduction/video-compressor.sh"></pre>
</div>

<script>
listResults();
async function listResults(){
  let intakeText = "";
  const response = await fetch("https://api.github.com/repos/arialhamed/convenience/contents/");
  const all = await response.json();
  const allSecondLayer = all.filter(object => {
    return object["type"] == "dir";
  })
  allSecondLayer.forEach(addToHTML);
}
async function addToHTML(details){
  if (details["type"] == "dir"){
    const directory = await fetch(details["url"]);
    const directoryList = await directory.json();
    directoryList.forEach(addToHTML);
  } else {
    console.log(details["download_url"])
  }
}
</script>


<script src="https://unpkg.com/prismjs@1.29.0/components/prism-core.min.js"></script>
<script src="https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
<script src="https://unpkg.com/prismjs@1.29.0/plugins/file-highlight/prism-file-highlight.min.js"></script>
<script src="https://unpkg.com/prismjs@1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>

{% include comments.html url=page.url %}