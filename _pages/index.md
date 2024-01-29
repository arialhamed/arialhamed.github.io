---
title: "Arial Hamed"
layout: default
permalink: /
---

<h1><span class='uwu'>UwU</span></h1>

looking for my cv and/or resume? go to my <a href="/about"><code>about</code> page</a>.  
<!-- <span onmouseover="this.innerHTML=''">here to look at some projects i did? go to my [`projects` page](/projects).</span>   -->
need some tips or guidance in certain IT topics? check out all my [`guides`](/guides).  
[`chess`](/chess)? its not a project i'm rushing tbh.  
want see some sweet [`emulation`](/emulator) action? uwu  
personally, i'm very proud of my [`automation`](/automation) scripts i created! _uwu_  
you can also [`browse my public repositories`](/browse-my-repos) with this javascript-heavy pages that i'm also proud of as well :3  
think this homepage could be better? same. in fact, you can just leave comments almost anywhere in this website. 

<br>

feel free to explore at your own discretion :3

<br>

latest jekyll build for [arifhamed.github.io](https://arifhamed.github.io) deployed on {{ site.time | date: "%A, %Y %B %d, %H:%M:%S, GMT %Z:00" }}, compiled & hosted by [GitHub Pages](https://pages.github.com/). 

<!-- <span id="time" ondblclick='window.open("https://github.com/arialhamed/arialhamed.github.io", "_self")'>i can't get the latest update to this website smh</span> -->

<script>
// consider making like a count thingy between the site.time by Jekyll and the gh.api
    // getLatestCommitDate();
    // function convertTZ(date, tzString) {
    //     return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
    // }
    // async function getLatestCommitDate() {
    //     const response = await fetch("https://api.github.com/repos/arialhamed/arialhamed.github.io/commits");
    //     const all = await response.json();
    //     const current = all[0]['commit']['author']['date'];
    //     const bruh = convertTZ(current.substring(0,4)+"/"+current.substring(5,7)+"/"+current.substring(8,10)+" "+current.substring(11,14)+":"+current.substring(14,17)+":"+current.substring(17,19)+" +0000", "Asia/Singapore");
    //     const zeroPad = (num, places) => String(num).padStart(places, '0');
    //     console.log(bruh.getDate());
    //     console.log(bruh.getMonth());
    //     console.log(bruh.getFullYear());
    //     console.log(bruh.getHours());
    //     console.log(bruh.getMinutes());
    //     console.log(bruh.getSeconds());
    //     console.log("wumbology");
    //     console.log(parseInt('{{ site.time | date: "%H"}}'));
    //     console.log(parseInt('{{ site.time | date: "%M"}}'));
    //     console.log(parseInt('{{ site.time | date: "%S"}}'));
    // }
</script> 


{% include comments.html url=page.url %}
