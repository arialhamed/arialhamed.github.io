---
title: You've signed in
layout: default
permalink: /github/callback
disable_nav: true
---

# Signing in..

testing empty.html layout

you'll be deported back to where you were soon

<script>
	window.onload = function() {
		const params = new URLSearchParams(window.location.search);
		const code = params.get('code');
		if (code) {
			fetch(`https://arialhamed.pythonanywhere.com/github/callback?code=${code}`)
			.then(response => response.json())
			.then(data => {
				localStorage.setItem('github_token', data.access_token);
				// Now you can use the token to make authenticated API calls

				// setTimeout(()=>{window.location.href=localStorage.getItem("github_login_last_page")}, 3000)
				window.location.href=localStorage.getItem("github_login_last_page")
			});
		}
	};
</script>