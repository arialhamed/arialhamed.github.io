---
title: "Arial Hamed"
layout: default
permalink: /
funky: true
---

<!-- <link rel="stylesheet" href="https://arialhamed.github.io/static/css/bootstrap.min.css">
<script src="https://arialhamed.github.io/static/js/jquery.min.js"></script>
<script src="https://arialhamed.github.io/static/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://arialhamed.github.io/static/css/site.css"> -->


# arial hamed's guides, blogs & resources <br><span style="font-size:60%;">my casual digital abode</span>

need my cv? go to my <a href="/about"><code>about</code> page</a>.

<span onmouseover="this.innerHTML=''">here to look at some projects i did? go to my [`projects` page](/projects).</span>

looking for some tips or guidance in certain IT topics? check out all my [`guides`](/guides).

[`chess`](/chess)? its not a project i'm rushing tbh

thought there would be more here? check the commented out elements, they're not necessary

<!--got time to kill on your android phone? download some apks from my [`apk` resource page](/resources/apk).-->

<!--<span onmouseover="this.innerHTML=''">got an iphone instead? too bad, i don't have one.</span>-->

<!--want to give me stuff for free? check out my [`carousell wishlist`](/carousell-wishlist)-->

think this homepage could be better? same. in fact, you can just leave comments almost anywhere in this website.

<span id="time" ondblclick='window.open("https://github.com/arialhamed/arialhamed.github.io", "_self")'>i can't get the latest update to this website smh</span>

<script>
    getLatestCommitDate();
    function convertTZ(date, tzString) {
        return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
    }
    async function getLatestCommitDate() {
        const response = await fetch("https://api.github.com/repos/arialhamed/arialhamed.github.io/commits");
        const all = await response.json();
        const current = all[0]['commit']['author']['date'];
        const bruh = convertTZ(current.substring(0,4)+"/"+current.substring(5,7)+"/"+current.substring(8,10)+" "+current.substring(11,14)+":"+current.substring(14,17)+":"+current.substring(17,19)+" +0000", "Asia/Singapore");
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        document.getElementById('time').innerHTML = "this website was last updated in "+bruh.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][bruh.getMonth()]+" "+bruh.getFullYear()+", "+zeroPad(parseInt(bruh.getHours()),2)+":"+zeroPad(parseInt(bruh.getMinutes()),2)+":"+zeroPad(parseInt(bruh.getSeconds()),2)+" (GMT+8, Singapore Time).";
        if (document.getElementById('time').innerHTML.includes("NaN")){
            document.getElementById('time').innerHTML = "you could be on mobile right now, yeah i see you. OwO";
        }
    }
</script>


{% include comments.html url=page.url %}
<br><br>
<a href="https://raw.githubusercontent.com/arialhamed/static/main/images/trans-in-transformers.jpg" style="text-decoration:none;color:#202020;width:100%;">test</a>
