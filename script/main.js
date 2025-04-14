

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
//const backsound = new Audio("audio/backsound.wav");
//backsound.loop = true;



window.onload = () => {
    document.getElementById('arrowbackbutton').addEventListener('click', () => Move(1));
    document.getElementById('arrowleftbutton').addEventListener('click', () => Move(2));
    document.getElementById('arrowstraightbutton').addEventListener('click', () => Move(3));
    document.getElementById('arrowrightbutton').addEventListener('click', () => Move(4));
    document.getElementById('object13').addEventListener('click', () => GetKey());
    //backsound.play();
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

    console.log("Current block befor change " + currentBlock)


    GetNextBlock();

    currentBlock = map.find(o => o.block === nextBlock);
    ActivateDoors();
    MonsterMovment();

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

    console.log(nextBlock)

}

function Controller(one, two, three, four) {

    console.log("Door 1" + one + " Door 2" + two + "Door 3" + three + "Door 4" + four)

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

        console.log("Last Door: " + monsterLastBlock)
        console.log("Antal dörrar: " + Object.keys(monsterBlock.doors).length)



        if(Object.keys(monsterBlock.doors).length == 1)
        {
            monsterLastBlock = monsterBlock.block
            monsterBlock = map.find(o => o.block === monsterBlock.doors[key]);
            break;
        }

        if(String(monsterLastBlock) != String(monsterBlock.doors[key]))
        {
            monsterLastBlock = monsterBlock.block
            monsterBlock = map.find(o => o.block === monsterBlock.doors[key]);
            console.log("Monster:" + monsterBlock.block)
            console.log("Last Door Change: " + monsterLastBlock)
            break;
        }
    }
}





