const cipher=b=>{var c=a=>a.split("").map(a=>a.charCodeAt(0)),d=a=>("0"+(+a).toString(16)).substr(-2),a=a=>c(b).reduce((a,b)=>a^b,a);return b=>b.split("").map(c).map(a).map(d).join("")},decipher=a=>{var b=b=>(()=>a.split("").map(a=>a.charCodeAt(0)))().reduce((a,b)=>a^b,b);return a=>a.match(/.{1,2}/g).map(a=>parseInt(a,16)).map(b).map(a=>String.fromCharCode(a)).join("")};
function slugify(e){return String(e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}
function formatBytes(a,b=2){if(0===a)return"0 bytes";const c=Math.floor(Math.log(a)/Math.log(1024));return parseFloat((a/Math.pow(1024,c)).toFixed(b))+" "+["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][c]}
$(document).ready(function(){$("a").on("click",function(o){var t;""!==this.hash&&(o.preventDefault(),t=this.hash,$("html, body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t}))})});

const all_imgs = document.getElementsByTagName("img");
for (var i = 0; i < all_imgs.length; i++) document.getElementsByTagName("img")[i].setAttribute("onerror", 'this.src="https://github.com/arialhamed/static/raw/main/images/missing.jpeg";');

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
async function connectCheck(){const a=await fetch("https://arialhamed.pythonanywhere.com/track"),b=await a.json();console.log("current site: "+b.site)}

function apk(e) {
	window.open(decipher("blazelifeundaunted")("6e727276753c2929616f726e73642865696b2967746f606e676b636229757269746761632974636a636775637529626971686a6967622947564d7529") + e, "_self")
}
document.getElementsByTagName("video")[0].onended = function() {
	this.load(), this.play()
}, dragElement(document.getElementById("mydiv")), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (document.getElementById("project_tagline").innerHTML = "");