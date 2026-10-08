---
title: "Arial Hamed"
layout: default
permalink: /
# redirect_to:
#  - https://homepage.arialhamed.com
---

<br>

### hi

this is my website. this is vaguely where i am. i yap here time-to-time

take some time to chill around here idk lol

<br>

<!-- <span title="compiled & hosted by GitHub Pages">latest site deployment: {{ site.time | date: "%A, %Y %B %d, %H:%M:%S, GMT %Z:00" }}.</span> -->

<input type="checkbox" id="check_status" checked style="display: none;">
<span id="action_status" title="compiled &amp; hosted by GitHub Pages">Checking current status..</span>

<script>
let working_seconds=0;
continuum_status_check=()=>{
	if(gId("check_status").checked){
		fetch("https://api.github.com/repos/arialhamed/arialhamed.github.io/actions/runs?per_page=1", {headers: {Accept: `application/vnd.github.raw+json`}})
		.then(r=>r.json())
		.then(j=>{
			elapsed_seconds = Math.floor((new Date() - new Date(j.workflow_runs[0].created_at)) / 1000);
			if(j.workflow_runs[0].status!="completed"){
				gId("action_status").innerHTML=`i'm alive, and the cloud is currently building this website! (started ${elapsed_seconds} seconds ago)`;
			}else{
				gId("action_status").innerHTML=`latest website deployment: ${new Date(j.workflow_runs[0].updated_at).toLocaleDateString(navigator.languages[0],{year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric'})} (${j.workflow_runs[0].conclusion})`;
				gId("check_status").click();
				// upload seconds somewhere
			}
		})
	}
}
setInterval(continuum_status_check, 1000)
gId("action_status").onclick=()=>{gId("action_status").innerHTML="Checking current status..";gId("check_status").click()};
</script>

