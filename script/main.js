

import { map } from './data.js';
let imortedMap = map
console.log(imortedMap)

let currentBlock = map.find(o => o.block === 10.3);
let nextBlock;
let lastDoor = 1;
let hexDoor = 0;

let objectLocation;
let objectType;
let objectOnDisplay = false;

let keys = 0;
let advice = false;

let monsterBlock = map.find(o => o.block === 7.8);
let monsterLastBlock = 0;

let url = "https://api.api-ninjas.com/v1/advice?X-Api-Key=1DLuYMGAVEIYGLVmQ8iClw==2pMAKPgkruLPjNAF"

const footsteps = new Audio('audio/footsteps.wav');
const backsound = new Audio("audio/backsound.wav");
const monsterRoare1 = new Audio('audio/roar1.wav');
const monsterRoare2 = new Audio('audio/roar2.wav');

const pickup = new Audio('audio/pickup.wav');
backsound.loop = true;
//backsound.play();


window.onload = () => {
    document.getElementById('arrowbackbutton').addEventListener('click', () => Move(1));
    document.getElementById('arrowleftbutton').addEventListener('click', () => Move(2));
    document.getElementById('arrowstraightbutton').addEventListener('click', () => Move(3));
    document.getElementById('arrowrightbutton').addEventListener('click', () => Move(4));
    document.getElementById('object13').addEventListener('click', () => GetKey());
    document.getElementById('object14').addEventListener('click', () => Win());

};




function Move(doorChosen) {

    if (objectOnDisplay) {
        RemoveObjectDisplay()
        objectOnDisplay = false;
    }

    if (advice == true) {
        RemoveAdvice()
        advice = false;
    }

    GetHexDoor(doorChosen);

    footsteps.play();


    GetNextBlock();

    currentBlock = map.find(o => o.block === nextBlock);
    ActivateDoors();
    MonsterMovment();
    MonsterDirect();

    if (monsterBlock.block === currentBlock.block) {
        //GameOver();
    }

    console.log("D")
    checkAll(1);
    console.log("L")
    checkAll(2);
    console.log("S")
    checkAll(3);
    console.log("R")
    checkAll(4);


    if (currentBlock.object != null) { DisplayObject(); }


}

function GetHexDoor(doorChosen) { // ta bort 2 case
    switch (lastDoor) {
        case 1:
            {
                switch (doorChosen) {
                    case 1: hexDoor = 1; lastDoor = 3; break;
                    case 2: hexDoor = 2; lastDoor = 4; break;
                    case 3: hexDoor = 3; lastDoor = 1; break;
                    case 4: hexDoor = 4; lastDoor = 2; break;
                }
                break;
            }
        case 2:
            {
                switch (doorChosen) {
                    case 1: hexDoor = 2; lastDoor = 4; break;
                    case 2: hexDoor = 3; lastDoor = 1; break;
                    case 3: hexDoor = 4; lastDoor = 2; break;
                    case 4: hexDoor = 1; lastDoor = 3; break;
                }
                break;
            }
        case 3:
            {
                switch (doorChosen) {
                    case 1: hexDoor = 3; lastDoor = 1; break;
                    case 2: hexDoor = 4; lastDoor = 2; break;
                    case 3: hexDoor = 1; lastDoor = 3; break;
                    case 4: hexDoor = 2; lastDoor = 4; break;
                }
                break;
            }
        case 4:
            {
                switch (doorChosen) {
                    case 1: hexDoor = 4; lastDoor = 2; break;
                    case 2: hexDoor = 1; lastDoor = 3; break;
                    case 3: hexDoor = 2; lastDoor = 4; break;
                    case 4: hexDoor = 3; lastDoor = 1; break;
                }
                break;
            }

    }
}


function ActivateDoors() {

    let one, two, three, four

    switch (lastDoor) {
        case 1:
            {
                currentBlock.doors[1] == null ? one = false : one = true;
                currentBlock.doors[2] == null ? two = false : two = true;
                currentBlock.doors[3] == null ? three = false : three = true;
                currentBlock.doors[4] == null ? four = false : four = true;
                Controller(one, two, three, four);
                break;
            }
        case 2:
            {
                currentBlock.doors[2] == null ? one = false : one = true;
                currentBlock.doors[3] == null ? two = false : two = true;
                currentBlock.doors[4] == null ? three = false : three = true;
                currentBlock.doors[1] == null ? four = false : four = true;

                Controller(one, two, three, four);
                break;
            }

        case 3:
            {
                currentBlock.doors[3] == null ? one = false : one = true;
                currentBlock.doors[4] == null ? two = false : two = true;
                currentBlock.doors[1] == null ? three = false : three = true;
                currentBlock.doors[2] == null ? four = false : four = true;
                Controller(one, two, three, four);
                break;
            }

        case 4:
            {
                currentBlock.doors[4] == null ? one = false : one = true;
                currentBlock.doors[1] == null ? two = false : two = true;
                currentBlock.doors[2] == null ? three = false : three = true;
                currentBlock.doors[3] == null ? four = false : four = true;
                Controller(one, two, three, four);
                break;
            }
    }
}


function GetNextBlock() {
    nextBlock = currentBlock.doors[hexDoor]
    console.warn("Player: " + nextBlock)
}

function Controller(one, two, three, four) {


    if (one === true) {
        document.getElementById("arrowbackbutton").style.visibility = "visible"
    }
    else {
        document.getElementById("arrowbackbutton").style.visibility = "hidden"
    }


    if (two === true) {
        document.getElementById("doorleft").style.visibility = "visible"
        document.getElementById("arrowleftbutton").style.visibility = "visible"
    }
    else {
        document.getElementById("doorleft").style.visibility = "hidden"
        document.getElementById("arrowleftbutton").style.visibility = "hidden";
    }


    if (three === true) {
        document.getElementById("doorcenter").style.visibility = "visible"
        document.getElementById("arrowstraightbutton").style.visibility = "visible"
    }
    else {
        document.getElementById("doorcenter").style.visibility = "hidden"
        document.getElementById("arrowstraightbutton").style.visibility = "hidden";
    }


    if (four === true) {
        document.getElementById("doorright").style.visibility = "visible"
        document.getElementById("arrowrightbutton").style.visibility = "visible"
    }
    else {
        document.getElementById("doorright").style.visibility = "hidden"
        document.getElementById("arrowrightbutton").style.visibility = "hidden";
    }
}

function GetObjectLocation() {
    switch (lastDoor) {
        case 1:
            {
                currentBlock.objectLocation == 2 ? objectLocation = 1 : null;
                currentBlock.objectLocation == 3 ? objectLocation = 2 : null;
                currentBlock.objectLocation == 4 ? objectLocation = 3 : null;
                break;

            }

        case 2:
            {
                currentBlock.objectLocation == 1 ? objectLocation = 3 : null;
                currentBlock.objectLocation == 3 ? objectLocation = 1 : null;
                currentBlock.objectLocation == 4 ? objectLocation = 2 : null;
                break;

            }

        case 3:
            {
                currentBlock.objectLocation == 1 ? objectLocation = 2 : null;
                currentBlock.objectLocation == 2 ? objectLocation = 3 : null;
                currentBlock.objectLocation == 4 ? objectLocation = 1 : null;
                break;

            }

        case 4:
            {
                currentBlock.objectLocation == 1 ? objectLocation = 1 : null;
                currentBlock.objectLocation == 2 ? objectLocation = 2 : null;
                currentBlock.objectLocation == 3 ? objectLocation = 3 : null;
                break;

            }
    }
}

function DisplayObject() {

    objectType = currentBlock.object;
    GetObjectLocation()


    let objectId = "object" + objectType;
    let objectPosition;

    if (objectType == 1) {
        objectPosition = "positionT" + objectLocation;
    }

    else {
        objectPosition = "position" + objectLocation;
    }


    document.getElementById(objectId).className = objectPosition;

    objectOnDisplay = true;

}

function RemoveObjectDisplay() {
    let objectId = "object" + objectType;
    document.getElementById(objectId).className = "hidden";
}

function GetKey() {
    keys++;
    console.log("Keys: " + keys);
    pickup.play();

    let removeKey = map.find(o => o.block === currentBlock.block);
    if (removeKey) removeKey.object = null;
    GetAdvice()
    RemoveObjectDisplay()
}


function GetAdvice() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("advicePop").textContent = data.advice;
        });

    document.getElementById("advicePop").classList.remove("hidden");
    advice = true;

}

function RemoveAdvice() {
    document.getElementById("advicePop").classList.add("hidden");
    document.getElementById("advicePop").textContent = "";

}

function MonsterMovment() {

    while (true) {

        let keysArray = Object.keys(monsterBlock.doors);
        let random = Math.floor(Math.random() * keysArray.length);
        let key = keysArray[random]



        if (Object.keys(monsterBlock.doors).length == 1) {
            monsterLastBlock = monsterBlock.block
            monsterBlock = map.find(o => o.block === monsterBlock.doors[key]);
            console.log("Monster: " + monsterBlock.block)
            break;
        }

        if (String(monsterLastBlock) != String(monsterBlock.doors[key])) {
            monsterLastBlock = monsterBlock.block
            monsterBlock = map.find(o => o.block === monsterBlock.doors[key]);
            console.warn("Monster: " + monsterBlock.block)
            break;
        }
    }
}

function MonsterDirect() {
    let playerLocation = currentBlock.block.toString().split('.');
    let playerHorizontal = parseInt(playerLocation[0]);
    let playerVertical = parseInt(playerLocation[1]);

    let monsterLocation = monsterBlock.block.toString().split('.');
    let monsterHorizontal = parseInt(monsterLocation[0]);
    let monsterVertical = parseInt(monsterLocation[1]);

    let sH;
    let sV;


    sH = playerHorizontal > monsterHorizontal ? 1 : 3; // 1 m till v, 3 till h, 2 samma
    sH = playerHorizontal == monsterHorizontal ? 2 : sH;

    sV = playerVertical > monsterVertical ? 1 : 3; // 1 monster är läggre, 3 högre, 2 samma
    sV = playerVertical == monsterVertical ? 2 : sV;


}

function checkDirect(DirectionToCheck, Times, blockStart, monsterDistance, test) {
    let allblocks = [];

    if (blockStart === null) { return; }

    let door = blockStart.doors?.[DirectionToCheck];
    if (!door) { return; }

    for (let i = 1; i <= Times; i++) {
        monsterDistance++;
        allblocks.push(door);

        //console.log("Room: " + door.toString() + "  Monster: " + monsterBlock.block.toString())

        if (door.toString() === monsterBlock.block.toString()) {
            MonsterSound(monsterDistance)

        }

        let blockT = map.find(o => o.block === door);
        if (!blockT || !blockT.doors || !blockT.doors[DirectionToCheck]) {
            break;
        }

        door = blockT.doors[DirectionToCheck];
    }


    console.log(test + " Blocks:  " + allblocks)
    //console.log("Blocks i riktning " + DirectionToCheck + ":", allblocks);
    return allblocks
}


function checkAll(start) {

    let St, Bk, Lf, Rg

    switch (start) {
        case 1:
            St = 1;
            Bk = 3;
            Lf = 4;
            Rg = 2;
            break;

        case 2:

            St = 2;
            Bk = 4;
            Lf = 1;
            Rg = 3;
            break;

        case 3:
            St = 3;
            Bk = 1;
            Lf = 2;
            Rg = 4;
            break;

        case 4:
            St = 4;
            Bk = 2;
            Lf = 3;
            Rg = 1;
            break;
    }

    let A = checkDirect(St, 4, currentBlock, 0, "A")

    let B = checkDirect(Rg, 3, CheckBlock(A, 0), 1, "B")
    let C = checkDirect(St, 2, CheckBlock(B, 0), 2, "C")
    let D = checkDirect(Rg, 1, CheckBlock(C, 0), 3, "D")
    let E = checkDirect(St, 1, CheckBlock(B, 1), 3, "E")
    let F = checkDirect(Bk, 1, CheckBlock(B, 1), 3, "F")
    let G = checkDirect(Rg, 2, CheckBlock(A, 1), 2, "G")
    let H = checkDirect(Rg, 1, CheckBlock(A, 2), 3, "H")
    let P = checkDirect(St, 1, CheckBlock(G, 0), 3, "P")

    let I = checkDirect(Lf, 3, CheckBlock(A, 0), 1, "I")
    let J = checkDirect(St, 2, CheckBlock(I, 0), 2, "J")
    let K = checkDirect(Lf, 1, CheckBlock(J, 0), 3, "K")
    let L = checkDirect(St, 1, CheckBlock(I, 1), 3, "L")
    let M = checkDirect(Bk, 1, CheckBlock(I, 1), 3, "M")
    let N = checkDirect(Lf, 2, CheckBlock(A, 1), 2, "N")
    let O = checkDirect(Lf, 1, CheckBlock(A, 2), 3, "O")
    let Q = checkDirect(St, 1, CheckBlock(N, 0), 3, "Q")
}

function CheckBlock(blocket, index) {
    if (!blocket) { return null; }
    if (!blocket[index]) { return null; }
    return map.find(o => o.block === blocket[index])
}

function MonsterSound(dist) {


    console.warn("CASE:  " + dist)
    switch (dist) {
        case 2:
            monsterRoare2.play();
            break;

        case 4:
            monsterRoare1.play();
            break;
    }

}

function GameOver() {
    const gameOver = new Audio('audio/end.wav');
    gameOver.play();
    document.getElementById("gameView").classList.add("hidden");
    document.getElementById("gameover").classList.remove("hidden");


}

function Win() {
    if (keys === 4) {
        backsound.pause();
        const win = new Audio('audio/win.mp3');
        win.play();
        document.getElementById("gameView").classList.add("hidden");
        document.getElementById("WIN").classList.remove("hidden");
    }

}



