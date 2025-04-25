---
title: "Arial Hamed"
layout: default
permalink: /
---

<!-- h1><span title=":3" class="uwu"></span></h1 -->

<br>

### hii welcome to my #linkinbio and kinda my portfolio

This is my website where i get to express myself, my own canvas, talk about some interesting things like technology & it's interaction with humans, and it's also my personal tool 🛠

I'll let this melody, harmony & rhythm of HTML, CSS & JS (respectively) do all the talking! :3

<br>

<!-- <span title="compiled & hosted by GitHub Pages">latest site deployment: {{ site.time | date: "%A, %Y %B %d, %H:%M:%S, GMT %Z:00" }}.</span> -->

<input type="checkbox" id="check_status" checked style="display: none;">
<span id="action_status" title="compiled &amp; hosted by GitHub Pages">Checking current status..</span>

<br>

To-do list for the [repo browser](/resources/browse-my-repos/):
- [x] Alternative to `jsmediatags` as it does not return lyrics for _.flac_ files
	- Found `music-metadata`
- [ ] Faster audio loading
	- Still need to consider between `fetch` and `XMLHttpRequest`
	- Found out that using `.blob()` takes a lot of time. Downloading does not take too much time but it should be streaming anyway (average flacs are around 20MB to 50MB 💀).
- [x] Authentication to GitHub API via GitHub Apps
	- [x] Saving token to localStorage
	- [x] Login page
- [x] Upload file to repository
- [ ] Upload multiple files to repository
- [ ] Homemade Modal
	- [x] Remaining time progress bar
	- [ ] True disappearance off-screen (display is none)
- [x] Enable a toggle between alternative views (between cells or list)
- [x] URL changes when navigating in browse-my-repos
- [ ] Test if GitHub Pages uses checkboxes in their markdown
	- [x] It's a universal markdown thing lol
	- [x] Removed 'disabled` attribute
	- [ ] Consider making it disabled in a different way for non-authenticated users, and authenticated users (i.e. literally just me) will be able to make the changes true (somehow)
- [ ] Enable cancellation of browseRun when a new browseRun is ran again (ref: sky cotl memories repo then back to main page)
- [ ] Restructure to have inUrl as the root dir of repo contents instead of the url to the repo (like add /contents to standardize between all content urls, not necessary for all repo view)
- [ ] Disable particles.js background by getting performance of device
- [ ] File downloading via blob (both authenticated & non-authenticated browsers)
- [x] Private repository indicator
- [ ] Further optimize the kick-off, seems a bit repetitive at some parts now that i'm using /content on the base root
- [x] Remove the classes from all SVGs in a separate commit
- [ ] Move todo list to some other place

Known limits:
- Unable to add modified datetime for file contents
	- This is due to GitHub API's abuse detection or something

<script>
let working_seconds=0;
continuum_status_check=()=>{
	if(gId("check_status").checked){
		fetch("https://api.github.com/repos/arialhamed/arialhamed.github.io/actions/runs?per_page=1", {headers: {Accept: `application/vnd.github.raw+json`}})
		.then(r=>r.json())
		.then(j=>{
			elapsed_seconds = Math.floor((new Date() - new Date(j["workflow_runs"][0]["created_at"])) / 1000);
			if(j["workflow_runs"][0]["status"]!="completed"){
				gId("action_status").innerHTML=`i'm currently building this website! (started ${elapsed_seconds} seconds ago)`;
			}else{
				gId("action_status").innerHTML="latest website deployment: "+new Date(j["workflow_runs"][0]["updated_at"]).toLocaleDateString("en-US",{year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric'});
				gId("check_status").click();
				// upload seconds somewhere
			}
		})
	}
}
setInterval(continuum_status_check, 1000)
gId("action_status").onclick=()=>{gId("action_status").innerHTML="Checking current status..";gId("check_status").click()};
</script>

{% include comments.html url=page.url %}
