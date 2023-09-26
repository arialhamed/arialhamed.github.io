---
title: "Arial Hamed"
layout: default
permalink: /
---

# optimize technology, preserve humanity. 

looking for my cv? go to my <a href="/about"><code>about</code> page</a>.  
<span onmouseover="this.innerHTML=''">here to look at some projects i did? go to my [`projects` page](/projects).</span>  
need some tips or guidance in certain IT topics? check out all my [`guides`](/guides).  
[`chess`](/chess)? its not a project i'm rushing tbh.  
think this homepage could be better? same. in fact, you can just leave comments almost anywhere in this website.  

<!--got time to kill on your android phone? download some apks from my [`apk` resource page](/resources/apk).-->

<!--want to give me stuff for free? check out my [`carousell wishlist`](/carousell-wishlist)-->

latest build for [arifhamed.github.io](https://arifhamed.github.io) deployed on {{ site.time | date: "%A, %Y %B %d, %H:%M:%S, GMT %Z:00" }}. 

<!-- <span id="time" ondblclick='window.open("https://github.com/arialhamed/arialhamed.github.io", "_self")'>i can't get the latest update to this website smh</span> -->

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
        console.log(bruh.getDate());
        console.log(bruh.getMonth());
        console.log(bruh.getFullYear());
        console.log(bruh.getHours());
        console.log(bruh.getMinutes());
        console.log(bruh.getSeconds());
        console.log("wumbology");
        console.log(parseInt('{{ site.time | date: "%H"}}'));
        console.log(parseInt('{{ site.time | date: "%M"}}'));
        console.log(parseInt('{{ site.time | date: "%S"}}'));
        // document.getElementById('time').innerHTML = "this website was last updated in "+bruh.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][bruh.getMonth()]+" "+bruh.getFullYear()+", "+zeroPad(parseInt(bruh.getHours()),2)+":"+zeroPad(parseInt(bruh.getMinutes()),2)+":"+zeroPad(parseInt(bruh.getSeconds()),2)+" (GMT+8, Singapore Time).";
        // if (document.getElementById('time').innerHTML.includes("NaN")){
        //     document.getElementById('time').innerHTML = "you could be on mobile right now, yeah i see you. OwO";
        // }
    }
</script> 


{% include comments.html url=page.url %}
