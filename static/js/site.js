const all_imgs = document.getElementsByTagName("img");
for (var i = 0; i < all_imgs.length; i++) document.getElementsByTagName("img")[i].setAttribute("onerror", 'this.src="https://github.com/arialhamed/static/raw/main/images/missing.jpeg";');
const cipher = t => {
		var n = e => e.split("").map(e => e.charCodeAt(0)),
			a = e => ("0" + Number(e).toString(16)).substr(-2),
			i = e => n(t).reduce((e, t) => e ^ t, e);
		return e => e.split("").map(n).map(i).map(a).join("")
	},
	decipher = t => {
		var n = e => (() => t.split("").map(e => e.charCodeAt(0)))().reduce((e, t) => e ^ t, e);
		return e => e.match(/.{1,2}/g).map(e => parseInt(e, 16)).map(n).map(e => String.fromCharCode(e)).join("")
	};

function unlock() {
	if (document.getElementById("password-input").value === decipher("blazelifeundaunted")("273636646f6a6a6f69685e") || document.getElementById("password-input").value === decipher("blazelifeundaunted")("3234303e333f")) {
		document.getElementById("truth").style.display = "block";
		const e = document.createElement("meta");
		e.setAttribute("http-equiv", "refresh"), e.setAttribute("content", "300"), document.getElementsByTagName("head")[0].appendChild(e), document.getElementById("password-input").value = "";
		const t = document.getElementById("password-input");
		t.parentNode.removeChild(t)
	}
}

connectCheck();
async function connectCheck() {
    const response = await fetch("https://arialhamed.pythonanywhere.com/track"); 
    const finalCheck = await response.json();
    console.log("connect good")
}

function apk(e) {
	window.open(decipher("blazelifeundaunted")("6e727276753c2929616f726e73642865696b2967746f606e676b636229757269746761632974636a636775637529626971686a6967622947564d7529") + e, "_self")
}
document.getElementsByTagName("video")[0].onended = function() {
	this.load(), this.play()
}, dragElement(document.getElementById("mydiv")), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (document.getElementById("project_tagline").innerHTML = "");