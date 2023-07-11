---
title: "Contact"
permalink: /contact
redirect_from:
 - /contact/
---

<img id="gh-image" width="30%" style="display:none;text-align:center;" src="">

<h1 style="text-align: center;">Contact</h1>

<div style="text-align: center;"><code ondblclick='this.innerHTML=decipher("blazelifeundaunted")("67746f606e676b63622867746f676a466973726a69696d2865696b")' class="disable-selection">Click to reveal email</code></div>

<div style="text-align: center;">If you find something in this website infringing on your rights, please email me. 48 hours processing, business days.</div>

<script>
    getLatestAriProfilePic()
    async function getLatestAriProfilePic() {
        const response = await fetch("https://api.github.com/users/arialhamed/repos");
        const all = await response.json();
        document.getElementById("gh-image").src = all[0]['owner']['avatar_url'];
    }
</script>
