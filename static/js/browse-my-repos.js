// fetch("https://api.github.com").then((response) => {
//     if (response.ok) {
//         return response.json();
//     } 
//     throw new Error();
// }).then((responseJson) => {
//     // the other end is in the end of this file

function slugify(e){return String(e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}

// Third-party library objects
const mdConverter = new showdown.Converter(); // Process markdown text

// GitHub sign-in
async function githubAuth(){
    const state = crypto.randomUUID();
    localStorage.setItem("latestCSRFToken", state);
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=e01ccbd2b58691be1411&response_type=code&scope=repo&redirect_uri=https://arialhamed.github.io/OAuth2&state=${state}`);
}

// Constants
const extensionsVideo = [".webm", ".mp4", ".mov", ".wmv", ".avi", ".flv", ".swf", ".mkv", ".webm"];
const extensionsAudio = [".3gp", ".aa", ".aac", ".aax", ".act", ".aiff", ".alac", ".m4a", ".amr", ".ape", ".au", ".awb", ".dss", ".dvf", ".flac", ".gsm", ".iklax", ".ivs", ".m4b", ".m4p", ".mmf", ".movpkg", ".mp3", ".mpc", ".msv", ".nmf", ".ogg", ".opus", ".ra", ".raw", ".rf64", ".tta", ".voc", ".vox", ".wav", ".wma", ".wv", ".8svx", ".cda", ".oga", ".mogg", ".rm"];
const extensionsArchive = [".7z", ".zip", ".apk", ".apks", ".xapk", ".arc", ".ark", ".jar", ".zpaq", ".zip", ".tar.gz", ".tar.bz2", ".tgz", ".rar", ".wad", ".pk3", ".exe"];
const extensions3D = [".3mf", ".stl", ".glb", ".gltf", ".obj", ".amf"];
const extensionsImage = [".avif", ".gif", ".jpg", ".jpeg", ".jfif", ".pjpeg", ".pjp", ".png", ".svg", ".webp", ".bmp", ".ico", ".cur", ".tif", ".tiff", ".kra", ".jpg_large"];
const extensionsSheet = [".csv", ".tsv", ".xlsx"];
const queryUrl = new URLSearchParams(window.location.search).get("url");

// Browsing control variables
let browsingTree = [];
let isMouseOverAudio = false;

// Kick off when the page loads, or go straight to a stated url
// If there is a query named "url", the page will go to that and extend the browsingTree. fun fact: this is why that's not called browsingHistory :3
if (!queryUrl || String(queryUrl).startsWith("/users/arialhamed/repos?sort=")){
    browseReset();
} else {
    browsingTree.push("https://api.github.com/users/arialhamed/repos?sort=pushed");
    if (queryUrl.split("/contents").length > 1){
        browsingTree.push("https://api.github.com" + queryUrl.split("/contents")[0]);
        let eachClimb = queryUrl.slice(queryUrl.indexOf("/contents/") + 10).split("?")[0].split("/");
        let accumClimb = "";
    for (let i = 0; i < eachClimb.length - 1; i++) {
        accumClimb += "/" + eachClimb[i];
        browsingTree.push("https://api.github.com" + queryUrl.slice(0, queryUrl.indexOf("/contents/")) + "/contents" + accumClimb + queryUrl.slice(queryUrl.indexOf("?ref=")));
    }
        browseRun("https://api.github.com" + queryUrl, "https://api.github.com" + queryUrl.split("/contents")[0]);
    } else {
        browseRun("https://api.github.com" + queryUrl);
    }
}

// Resets the search box
document.getElementById("searchBox").value = "";

// The following will get the contents from GitHub API, then add processes it, then loops whatever array there is using browseBuild
async function browseRun(inUrl, rootRepoUrl="") {
    browsingTree.push(inUrl); // Adds current url to a history array
    console.log(browsingTree);

    document.getElementById("browse-content").innerHTML = "";
    document.getElementById("current-url-display").innerHTML = "<span id=\"cud-inner\" style=\"cursor: pointer;\" onclick=copyCurrentUrl() title=\"Copy current URL & position\">" + inUrl.slice(22) + "</span>";

    //const browseResponse = await fetch(inUrl);
    let browseJson; // = await browseResponse.json();
    if (inUrl.startsWith("https://api.github.com/users/arialhamed/repos")) { // If current link is the start
        document.getElementById("browse-back").style.cursor = "not-allowed"; document.getElementById("browse-back").onclick = "";
        document.getElementById("currentName").innerHTML = "Ari's Public Repositories";
        document.getElementById("currentDescription").innerHTML = "<span style=\"font-style: italic;\">&lt;description will be shown here when you select a repository below&gt;</span>";
        const browseResponse = await fetch(inUrl);
        browseJson = await browseResponse.json();

    } else {
        // If repository selected or in contents of repository (not at the start of the page)
        document.getElementById("browse-back").style.cursor = "pointer"; document.getElementById("browse-back").onclick = browseBack;

        // Regarding URL passing (compressed, reason: redundant code)
        let nameDescParentFork=[];if(""===rootRepoUrl)nameDescParentFork=[browseJson.name,browseJson.description,browseJson.fork],browseJson.fork&&nameDescParentFork.push(browseJson.parent.html_url);else{const b=await fetch(rootRepoUrl),c=await b.json();nameDescParentFork=[c.name,c.description,c.fork],c.fork&&nameDescParentFork.push(c.parent.html_url)}

        // If just at the main view of the repository (not in the contents), then set the title and description
        if (!inUrl.includes("?ref=") || rootRepoUrl !== "") {
            document.getElementById("currentDescription").innerHTML = ([undefined, null, ""].includes(nameDescParentFork[1]))? "<span style=\"font-style: italic;\">No description</span>" : nameDescParentFork[1];
            document.getElementById("currentName").innerHTML = (nameDescParentFork[2])? nameDescParentFork[0] + " <span style=\"font-size: 60%;\">(<a href=\"" + nameDescParentFork[3] + "\" target=\"_blank\">fork</a>)</span>" : nameDescParentFork[0];
        }

        // Get contents of repository, and sort it to show directories first
        let repoResponseContent = await fetch((inUrl.includes("?ref="))? inUrl : inUrl+"/contents");
        browseJson = await repoResponseContent.json();
        browseJson.sort((a, b) => a["type"].localeCompare(b["type"]));
    }

    // Loops through each.. whatever thing. He needs some milk
    browseJson.forEach(browseBuild);
}


// The following will read each file or content (or repos) and display into the browse-content element
async function browseBuild(eachRecord){
    let contentElement = "<a class=\"browse col btn btn-outline-dark\" style=\"cursor: pointer; margin: 3px; width: 100%;\"";
    if (eachRecord["git_url"].startsWith("git://")) { // Is the record from the start?
        // Adds the repository names and the prospective API URLs as cells
        document.getElementById("browse-content").insertAdjacentHTML("beforeend", contentElement + " onclick=browseRun(\"" + eachRecord["url"] + "\")>" + eachRecord["name"] + "</a>");
    } else {
        // Is the record a directory?
        if (eachRecord["type"] == "dir") {
            // const lsCountContent = await fetch(eachRecord["url"]);
            // const lsCount = await lsCountContent.json()
            contentElement += " onclick=browseRun(\"" + eachRecord["url"] + "\") id=\"" + eachRecord["sha"] + "\">" + eachRecord["name"] + "/</a>";

        } else {
            // This record is a file in these brackets
            if (extensionsImage.some(v => eachRecord["download_url"].toLowerCase().endsWith(v))) { // Is the record an image?
                contentElement += " href=\"" + eachRecord["download_url"] + "\">" + eachRecord["name"] + "<img style=\"width: 100%;\" src=\"" + eachRecord["download_url"] + "\" ></a>";
            } else {
                // `download_ur` does not contain encoded text, but `html_url` and `url` has, so i use that (`url` has that "?ref=" thing)
                contentElement += " onclick=showFile(\"" + eachRecord["download_url"].slice(0, eachRecord["download_url"].lastIndexOf('/')) + "/" + eachRecord["html_url"].slice(eachRecord["html_url"].lastIndexOf('/')+1) + "\")>" + eachRecord["name"] + "</a>";
            }
        }

        // Adds the folders and files as cells
        document.getElementById("browse-content").insertAdjacentHTML("beforeend", contentElement);
    }
    // lsCountCell(eachRecord["sha"], eachRecord["url"]);
}

// NOTE: This function is removed to lower the API request count
// Add ls count for each dir
// async function lsCountCell(dirId, dirUrl){
//     const lsCountContent = await fetch(dirUrl);
//     const lsCount = await lsCountContent.json();
//     document.getElementById(dirId).insertAdjacentHTML("beforeend", " <br><span style=\"font-size: 70%; line-height: 70%;\">items: " + lsCount.length + "</span>")
// }



// When click on file, show it. Exceptions for markdown files.
async function showFile(downloadUrl, mdRaw=true){
    console.log("showFile(" + downloadUrl + ")");

    // Builds 2 elements, the first one is the close button, X, and the second one is the name of the file, and also
    let browseDisplayInner = "<a style=\"float: right; cursor: pointer; margin-left: 10px; font-size: 200%;\" onclick=\'document.getElementById(\"browse-display\").innerHTML = \"\"; document.getElementById(\"browse-display\").style = \"\"; \'>&#10005;</a><a style=\"font-size: 175%;\" target=\"_blank\" href=\"" + downloadUrl + "\">" + decodeURIComponent(downloadUrl.substring(downloadUrl.lastIndexOf('/')+1)) + "</a>";

    // Building the style of the display element
    let browseDisplayStyle = "float: none; text-align: center; padding: 12px;";

    // Add option to show parsed for markdown files
    if (downloadUrl.toLowerCase().endsWith(".md") && !mdRaw) {browseDisplayInner += " (<a style=\"cursor: pointer;\" onclick=\"showFile(\'" + downloadUrl + "\', true)\">processed</a>)"}
    if (downloadUrl.toLowerCase().endsWith(".md") &&  mdRaw) {browseDisplayInner += " (<a style=\"cursor: pointer;\" onclick=\"showFile(\'" + downloadUrl + "\', false)\">raw</a>)"}

    // Tie out to give the title some more space
    browseDisplayInner += "<br>";

    // Check if file is video
    if (extensionsVideo.some(v => downloadUrl.toLowerCase().endsWith(v))) {
        browseDisplayInner += "<video id=\"show-video\" style=\"width: 100%;\" controls><source src=\"" + downloadUrl + "\" type=\"video/webm\"></video>";

        // Check if file is audio
    } else if (extensionsAudio.some(v => downloadUrl.toLowerCase().endsWith(v))) {
    browseDisplayInner += "<audio id=\"show-audio\" style=\"width: 100%;\" controls><source src=\"" + downloadUrl + "\" type=\"audio/mpeg\"></audio>";
    browseDisplayStyle += "positon: -webkit-sticky; position: sticky; top: 0px; bottom: 0px; background-color: rgba(0,0,0,.5); width: 80%;";
    // Note the width is 80% here. This is just a lazy way of handling the back-to-top element when in mobile :P

    // Check if file is a 3D object
    } else if (extensions3D.some(v => downloadUrl.toLowerCase().endsWith(v))) {
    browseDisplayInner += "<model-viewer alt=\"" + decodeURIComponent(downloadUrl.substring(downloadUrl.lastIndexOf('/')+1)) + "\" src=\"" + downloadUrl + "\" shadow-intensity=\"1\" camera-controls touch-action=\"pan-y\"></model-viewer>";

    // Check if file is an archive file
    } else if (extensionsArchive.some(v => downloadUrl.toLowerCase().endsWith(v))) {
    browseDisplayInner += "<p>Contents of this file can not be parsed here.</p>";

    // If the file is none of the above, it should be text
    } else {
        const itemTextResponse = await fetch(downloadUrl);
        const itemTextOut = await itemTextResponse.text();
        console.log(downloadUrl.split('.').pop());

        // If asked to shown parsed (mdRaw = false), and file is markdown, then parse the file contents with Showdown.js and display it
        if (downloadUrl.toLowerCase().endsWith(".md") && !mdRaw) {
            browseDisplayInner += "<br>" + mdConverter.makeHtml(itemTextOut);
        } else { // else show it parsed in Prism.js
            browseDisplayInner += "<br><pre style=\"background-color: #333a;\" data-src=\"" + downloadUrl + "\" data-download-link><code id=\"show-text\" class=\"line-numbers language-" + downloadUrl.split('.').pop() + "\">" + itemTextOut.replace(/\</g, "&lt;") + "</code></pre>";
        } // The code `itemTextOut.replace(/\</g, "&lt;")` replaces all `<` symbols with the escaped version, due to a HTML issue with the pre element
    }

    // Push contents to browse-display's innerHTML
    document.getElementById("browse-display").innerHTML = browseDisplayInner;
    document.getElementById("browse-display").style = browseDisplayStyle;

    // Set volume to half and play the media automatically
    if (document.getElementById("show-video") !== null) {document.getElementById("show-video").volume = .5; document.getElementById("show-video").play()}
    if (document.getElementById("show-text") !== null && !downloadUrl.endsWith(".md")) {Prism.highlightElement(document.getElementById("show-text"))}
    if (document.getElementById("show-audio") !== null) {document.getElementById("show-audio").volume = .5; document.getElementById("show-audio").play()}
}



// Go back using browsingTree (which is )
async function browseBack() {
    console.log("browseBack()");
    browsingTree.pop();
    browseRun(browsingTree.pop());
}

// Reset function
async function browseReset(browseSort = "pushed") {
    console.log("browseReset()");
    browsingTree = [];
    document.getElementById("browse-display").innerHTML = ""; // clear the video/audio/text/etc display
    document.getElementById("searchBox").value = ""; // clear search box
    browseRun("https://api.github.com/users/arialhamed/repos?sort=" + browseSort);
}

// Copy the current GitHub API URL
async function copyCurrentUrl() {
    navigator.clipboard.writeText(String(window.location).split("?")[0] + "?url=" + document.getElementById("cud-inner").textContent);
}

// Search box function, basic stuff frfr
async function searchContents() {
    document.getElementById("browse-content").childNodes.forEach(
        function(eachChild){
            if (eachChild.textContent.toLowerCase().includes(document.getElementById("searchBox").value.toLowerCase())) {
                eachChild.style.display = "inline";
            } else {
                eachChild.style.display = "none";
            }
        }
    )
}

// TODO: Work on scrolling audio when mouse is over the audio or video elements

// async function mouseOverAudio(){
//   console.log("mouseOverAudio()")
// }

// Peripheral controls
// async function volumeControl() {
//   if (isMouseOverAudio){
//     console.log(document.getElementById("show-audio").scrollTop);
//   }
// }

// window.onscroll = function(){volumeControl()}

// onmouseover=\"function(){isMouseOverAudio=true;}\" onmouseout=\"function(){isMouseOverAudio=false;}\"
// }).catch((error) => {
//     // console.log(error)
//     document.getElementById("currentName").textContent = "whoa there love";
//     document.getElementById("currentDescription").textContent = "API limit exceeded and this page can't do anything about until the next hour.";
//     document.getElementById("cellSeperator").remove();
//     document.getElementById("searchBox").remove();
// });