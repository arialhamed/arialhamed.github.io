---
layout: default
permalink: /todo
title: "arial's to-do list"
redirect_from: 
 - /todo/
 - /to-do
 - /to-do/
 - /todo-list
 - /todo-list/
 - /to-do-list
 - /to-do-list/
 - /list
 - /list/
 - /todolist
 - /todolist/

---

*started since Apr 24, 2025

# todo list
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
	- [x] True disappearance off-screen (display is none)
	- [ ] Handling multiple `raiseModal` calls
- [x] Enable a toggle between alternative views (between cells or list)
- [x] URL changes when navigating in browse-my-repos
- [ ] Test if GitHub Pages uses checkboxes in their markdown
	- [x] It's a universal markdown thing lol
	- [x] Removed 'disabled` attribute
	- [ ] Consider making it disabled in a different way for non-authenticated users, and authenticated users (i.e. literally just me) will be able to make the changes true (somehow)
- [ ] Enable cancellation of browseRun when a new browseRun is ran again (ref: sky cotl memories repo then back to main page)
- [ ] Disable particles.js background by getting performance of device
- [ ] File downloading via blob (both authenticated & non-authenticated browsers)
- [x] Private repository indicator
	- [9d2a80102ab81e8cfbd8409235be4af6e4eccea8](https://github.com/arialhamed/arialhamed.github.io/commit/9d2a80102ab81e8cfbd8409235be4af6e4eccea8)
- [x] Further optimize the kick-off, seems a bit repetitive at some parts now that i'm using /content on the base root
	- [89ff17f4082cf7d872ba47abc8fc9cb67a23fbf7](https://github.com/arialhamed/arialhamed.github.io/commit/89ff17f4082cf7d872ba47abc8fc9cb67a23fbf7)
	- [1be5948e00ea4d0c01180de546ba821a08f3a71e](https://github.com/arialhamed/arialhamed.github.io/commit/1be5948e00ea4d0c01180de546ba821a08f3a71e)
- [x] Remove the classes from all SVGs in a separate commit
	- [8175ede6e2ab1b8a9da204bd62a52bb8b9cfd4ba](https://github.com/arialhamed/arialhamed.github.io/commit/8175ede6e2ab1b8a9da204bd62a52bb8b9cfd4ba)
- [x] Move todo list to some other place
- [ ] Consider if I should leave links to commits in this todo, cuz that won't accumulate to an ungodly long todo list /s
- [ ] Clipboard file contents to base64 to upload to repo
	- Copy image from a website -> Go back to repo browser -> Ctrl + V -> Uploaded

Known limits:
- Unable to add modified datetime for file contents
	- This is due to GitHub API's abuse detection or something
