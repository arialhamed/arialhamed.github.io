---
title: "chess"
permalink: /games/chess
redirect_from:
 - /games/chess/
 - /game/chess
 - /game/chess/
 - /chess
 - /chess/
layout: none
---
<html>
    <head>
        <title>arial's chess</title>
        {% include icon.html %}
        <style>
            body {
                background-color: #333;
            }
            img {
                width: 100%;
            }
            td {
                width: 60px;
                height: 60px;
                text-align: center;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select:none;
                -o-user-select:none;
                user-select:none; 
            }
            td.bgBlack {
                background-color: #bb8c4c;
            }
            td.bgWhite {
                background-color: #e3c16f;
            }
            td.bgBlack:hover {
                background-color: #cb9c5c;
            }
            td.bgWhite:hover {
                background-color: #f3d17f;
            }
            td.bgBlack:active {
                background-color: #ab7c3c;
            }
            td.bgWhite:active {
                background-color: #d3b15f;
            }
            td.bgText {
                text-align: center;
                font-size: 25px;
                color: white;
                background-color: #333;
            }
            @keyframes selectedTileOrigin {
                0%, 100% {box-shadow: inset 0px 0px 0px 2px #44e; -webkit-box-shadow: inset 0px 0px 0px 2px #44e}
                50%      {box-shadow: inset 0px 0px 0px 5px #44e; -webkit-box-shadow: inset 0px 0px 0px 5px #44e}
            }
            @keyframes selectedTileDestLegal {
                0%, 100% {box-shadow: inset 0px 0px 0px 2px #4e4; -webkit-box-shadow: inset 0px 0px 0px 2px #4e4}
                50%      {box-shadow: inset 0px 0px 0px 5px #4e4; -webkit-box-shadow: inset 0px 0px 0px 5px #4e4}
            }
            @keyframes selectedTileDestIllegal {
                0%, 100% {box-shadow: inset 0px 0px 0px 2px #e44; -webkit-box-shadow: inset 0px 0px 0px 2px #e44}
                50%      {box-shadow: inset 0px 0px 0px 5px #e44; -webkit-box-shadow: inset 0px 0px 0px 5px #e44}
            }  
            /* meant for alternate looping & ease-out */
            @keyframes selected {
                0%   {transform: translateY(0px);}
                100% {transform: translateY(-10px);}
            }
        </style>
        <!-- <script src="https://arialhamed.github.io/static/js/bootstrap/jquery.min.js"></script> -->
        <!-- <script type="module" src="/static/js/chess.js"></script>
        <script>
            import { Chess } from './chess.js'
            const chess = new Chess();
            while (!chess.game_over()) {
                const moves = chess.moves();
                const move = moves[Math.floor(Math.random() * moves.length)];
                chess.move(move);
            }
            console.log(chess.pgn());
        </script> -->
    </head>
    <body>
        <table style="border-collapse:collapse;border:0px #000;width:90vh;height:90vh;">
            <tr>
                <td class="tile bgText"></td>
                <td class="tile bgText">a</td>
                <td class="tile bgText">b</td>
                <td class="tile bgText">c</td>
                <td class="tile bgText">d</td>
                <td class="tile bgText">e</td>
                <td class="tile bgText">f</td>
                <td class="tile bgText">g</td>
                <td class="tile bgText">h</td>
                <td class="tile bgText"></td>
            </tr>
            <tr>
                <td class="tile bgText">8</td>
                <td id="A800" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="B801" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="C802" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="D803" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="E804" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="F805" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="G806" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="H807" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td class="tile bgText">8</td>
            </tr>
            <tr>
                <td class="tile bgText">7</td>
                <td id="A708" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="B709" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="C710" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="D711" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="E712" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="F713" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="G714" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="H715" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td class="tile bgText">7</td>
            </tr>
            <tr>
                <td class="tile bgText">6</td>
                <td id="A616" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="B617" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="C618" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="D619" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="E620" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="F621" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="G622" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="H623" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td class="tile bgText">6</td>
            </tr>
            <tr>
                <td class="tile bgText">5</td>
                <td id="A524" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="B525" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="C526" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="D527" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="E528" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="F529" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="G530" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="H531" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td class="tile bgText">5</td>
            </tr>
            <tr>
                <td class="tile bgText">4</td>
                <td id="A432" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="B433" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="C434" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="D435" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="E436" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="F437" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="G438" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="H439" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td class="tile bgText">4</td>
            </tr>
            <tr>
                <td class="tile bgText">3</td>
                <td id="A340" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="B341" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="C342" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="D343" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="E344" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="F345" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="G346" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="H347" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td class="tile bgText">3</td>
            </tr>
            <tr>
                <td class="tile bgText">2</td>
                <td id="A248" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="B249" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="C250" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="D251" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="E252" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="F253" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="G254" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="H255" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td class="tile bgText">2</td>
            </tr>
            <tr>
                <td class="tile bgText">1</td>
                <td id="A156" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="B157" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="C158" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="D159" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="E160" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="F161" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="G162" class="tile playable bgBlack" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td id="H163" class="tile playable bgWhite" onclick="clickedTile(this.id)"><img class="boardPiece" src=""></td>
                <td class="tile bgText">1</td>
            </tr>
            <tr>
                <td class="tile bgText"></td>
                <td class="tile bgText">a</td>
                <td class="tile bgText">b</td>
                <td class="tile bgText">c</td>
                <td class="tile bgText">d</td>
                <td class="tile bgText">e</td>
                <td class="tile bgText">f</td>
                <td class="tile bgText">g</td>
                <td class="tile bgText">h</td>
                <td class="tile bgText"></td>
            </tr>
        </table>
        <div id="last-update" style="font-size:70%;text-align:center;color:aliceblue;"></div>
        <script>
            // The line below is for the update text at the bottom of the screen
            getLatestUpate(); function convertTZ(date, tzString) {return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));} async function getLatestUpate() {const response = await fetch("https://api.github.com/repos/arialhamed/arialhamed.github.io/commits"); const all = await response.json(); const current = all[0]['commit']['author']['date']; const bruh = convertTZ(current.substring(0,4)+"/"+current.substring(5,7)+"/"+current.substring(8,10)+" "+current.substring(11,14)+":"+current.substring(14,17)+":"+current.substring(17,19)+" +0000", "Asia/Singapore"); const zeroPad = (num, places) => String(num).padStart(places, '0'); document.getElementById('last-update').innerHTML = "this website was last updated in "+bruh.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][bruh.getMonth()]+" "+bruh.getFullYear()+", "+zeroPad(parseInt(bruh.getHours()),2)+":"+zeroPad(parseInt(bruh.getMinutes()),2)+":"+zeroPad(parseInt(bruh.getSeconds()),2)+" (GMT+8, Singapore Time).<br><a href=\"/\" style=\"color: aliceblue;\">Click here to return to main website</a>"; if (document.getElementById('last-update').innerHTML.includes("NaN")){window.open("https://arialhamed.github.io/maintenance","_self")}}
            // NOTE: Order goes from top-left to bottom-right, as is routine
            // r.svg => https://raw.githubusercontent.com/arialhamed/static/main/images/games/chess/bR.svg
            piece = { 'P': 100, 'N': 280, 'B': 320, 'R': 479, 'Q': 929, 'K': 60000 };
            pst={'P':[0,0,0,0,0,0,0,0,78,83,86,73,102,82,85,90,7,29,21,44,40,31,44,7,-17,16,-2,15,14,0,15,-13,-26,3,10,9,6,1,0,-23,-22,9,5,-11,-10,-2,3,-19,-31,8,-7,-37,-36,-14,3,-31,0,0,0,0,0,0,0,0],'N':[-66,-53,-75,-75,-10,-55,-58,-70,-3,-6,100,-36,4,62,-4,-14,10,67,1,74,73,27,62,-2,24,24,45,37,33,41,25,17,-1,5,31,21,22,35,2,0,-18,10,13,22,18,15,11,-14,-23,-15,2,0,2,0,-23,-20,-74,-23,-26,-24,-19,-35,-22,-69],'B':[-59,-78,-82,-76,-23,-107,-37,-50,-11,20,35,-42,-39,31,2,-22,-9,39,-32,41,52,-10,28,-14,25,17,20,34,26,25,15,10,13,10,17,23,17,16,0,7,14,25,24,15,8,25,20,15,19,20,11,6,7,6,20,16,-7,2,-15,-12,-14,-15,-10,-10],'R':[35,29,33,4,37,33,56,50,55,29,56,67,55,62,34,60,19,35,28,33,45,27,25,15,0,5,16,13,18,-4,-9,-6,-28,-35,-16,-21,-13,-29,-46,-30,-42,-28,-42,-25,-25,-35,-26,-46,-53,-38,-31,-26,-29,-43,-44,-53,-30,-24,-18,5,-2,-18,-31,-32],'Q':[6,1,-8,-104,69,24,88,26,14,32,60,-10,20,76,57,24,-2,43,32,60,72,63,43,2,1,-16,22,17,25,20,-13,-6,-14,-15,-2,-5,-1,-10,-20,-22,-30,-6,-13,-11,-16,-11,-16,-27,-36,-18,0,-19,-15,-15,-21,-38,-39,-30,-31,-13,-31,-36,-34,-42],'K':[4,54,47,-99,-99,60,83,-62,-32,10,55,56,56,55,10,3,-62,12,-57,44,-67,28,37,-31,-55,50,11,-4,-19,13,0,-49,-55,-43,-52,-28,-51,-47,-8,-50,-47,-42,-43,-79,-64,-32,-29,-32,-4,3,-14,-50,-57,-18,13,4,17,30,-3,-14,6,-1,40,18]};
            // Pad tables and join piece and pst dictionaries
            // for k, table in pst.items():
            //     padrow = lambda row: (0,) + tuple(x+piece[k] for x in row) + (0,)
            //     pst[k] = sum((padrow(table[i*8:i*8+8]) for i in range(8)), ())
            //     pst[k] = (0,)*20 + pst[k] + (0,)*20
            // for (var k in pst)
            currentPos = [
                "r","n","b","q","k","b","n","r",
                "p","p","p","p","p","p","p","p",
                "x","x","x","x","x","x","x","x",
                "x","x","x","x","x","x","x","x",
                "x","x","x","x","x","x","x","x",
                "x","x","x","x","x","x","x","x",
                "P","P","P","P","P","P","P","P",
                "R","N","B","Q","K","B","N","R"
            ];
            const [N, E, S, W] = [-8, 1, 8, -1];
            movement = {
                'P': [N, N+N, N+W, N+E],
                'N': [N+N+E, E+N+E, E+S+E, S+S+E, S+S+W, W+S+W, W+N+W, N+N+W],
                'B': [N+E, S+E, S+W, N+W],
                'R': [N, E, S, W],
                'Q': [N, E, S, W, N+E, S+E, S+W, N+W],
                'K': [N, E, S, W, N+E, S+E, S+W, N+W]
            }
            // history tracking
            const history = [];
            // ID on board, which includes index
            var currentSelectionID = "";
            // INITIALIZE COSMETIC ACTIONS 
            updateBoard()
            function updateBoard(){
                for (var i = 0; i < currentPos.length; i++){
                    document.getElementsByClassName("boardPiece")[i].setAttribute("src", "https://raw.githubusercontent.com/arialhamed/static/main/images/games/chess/"+currentPos[i].substr(0)+".svg");
                }
            }
            // RESPONSE FUNCTION when clicking any tile, for logical AND cosmetic functions
            function clickedTile(tile_id){
                // this is actually img inside the td
                // holler();
                const targetedTile = document.getElementById(tile_id).firstChild;
                // check if there is piece there AND if is player piece (uppercase )
                const currentPiece = currentPos[parseInt(tile_id.substr(2))]
                if (targetedTile.src != "https://raw.githubusercontent.com/arialhamed/static/main/images/games/chess/x.svg" && currentPiece == currentPiece.toUpperCase()){
                    // if there is no current piece selected, select piece & highlight
                    if (currentSelectionID == ""){
                        currentSelectionID = tile_id
                        toggleHighlightTile(tile_id);
                    // if there is a piece selected
                    } else {
                        // if piece was already selected (same), deselect and unhighlight
                        if (tile_id == currentSelectionID){
                            currentSelectionID = ""
                            toggleHighlightTile(tile_id);
                        } else {
                        // else select and highlight tile
                            toggleHighlightTile(currentSelectionID);
                            currentSelectionID = tile_id
                            toggleHighlightTile(tile_id);
                        }
                    }
                // if no piece, deselect
                } else {
                    if (currentSelectionID != ""){
                        toggleHighlightTile(currentSelectionID);
                        currentSelectionID = ""
                    }
                }
            }   
            function toggleHighlightTile(tile_id){
                const targetedTile = document.getElementById(tile_id).firstChild
                // targetedTile.addEventListener("animationiteration", trailingAnimFunc, false)
                if (targetedTile.style.animation == "" && targetedTile.src != "https://raw.githubusercontent.com/arialhamed/static/main/images/games/chess/x.svg"){
                    targetedTile.style.animation = "selected 0.4s ease-out 0s infinite alternate";
                    // targetedTile.style.animation
                    // highlight available moves
                    const posIndex = tile_id.substr(2); // B249 -> 49
                    const pieceType = currentPos[posIndex]; // layout[49] -> "P" (pawn)
                    switch(pieceType){
                        case "P":
                            console.log("Pawn selected");
                            // loop through all board tiles and determine if directions are suitable
                            // if so, highlight
                            // check if a piece is there 
                            // 
                            // for (var i = 0; i < movement['P'].length; i++){
                            //     if (currentPos[posIndex + movement['P'][i]])
                            // }
                            break;
                        case "R":
                            console.log("Rook selected");
                            break;
                        case "N":
                            console.log("Knight selected");
                            break;
                        case "B":
                            console.log("Bishop selected");
                            break;
                        case "Q":
                            console.log("Queen selected");
                            break;
                        case "K":
                            console.log("King selected");
                            break;
                        default:
                            console.log("bruh");
                    }
                } else {
                    targetedTile.style.animation = "";
                    // targetedTile.addEventListener("animationiteration webkitAnimationIteration", () => {
                    //     targetedTile.style.animation = "";
                    //     targetedTile.removeEventListener("animationiteration webkitAnimationIteration", this);
                    // }, {once: true});
                }   
            }
            // function trailingAnimFunc()
            function toggleHighlightAvailable(tile_id){
                return false
            }
            // this is where all the people jump first
            // var isHollering = true;
            // holler();
            // function holler(){
            //     if (!isHollering){
            //         for (var i = 0; i < document.getElementsByClassName("boardPiece").length; i++){
            //             const kallang = document.getElementsByClassName("boardPiece")[arr[i]].style.animation = "";
            //         }; 
            //     } else {
            //         var arr = [];
            //         while(arr.length < 32){
            //             var r = Math.floor(Math.random() * 32);
            //             if(arr.indexOf(r) === true){arr.push(r)};
            //         }
            //         for (var i = 0; i < document.getElementsByClassName("boardPiece").letngh; i++){
            //             const kallang = document.getElementsByClassName("boardPiece")[arr[i]].style.animation = "selected 0.4s ease-out ."+i+"s infinite alternate";
            //         }; 
            //         isHollering = false;
            //     }
            // }
        </script>
    </body>
</html>