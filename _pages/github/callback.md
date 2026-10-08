---
title: You've signed in
layout: default
permalink: /github/callback
disable_nav: true
---

## oauth-ing to github..

<script>
	window.onload = function() {
		const params = new URLSearchParams(window.location.search);
		const code = params.get('code');
		if (code) {
			fetch(`https://arialhamed.pythonanywhere.com/github/callback?code=${code}`, {headers: {}})
			.then(response => response.json())
			.then(data => {
				localStorage.setItem('github_token', data.access_token);
				// Now you can use the token to make authenticated API calls

				window.location.href=localStorage.getItem("github_login_last_page")
			});
		}
	};
</script>