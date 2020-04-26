var doorImage1 = document.getElementById('door1');

var doorImage2= document.getElementById('door2');
    
var doorImage3= document.getElementById('door3');

var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

var spaceDoorPath= "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

var closedDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

var startButton = document.getElementById('start');

var currentlyPlaying = true;

var numClosedDoor =3;

let openDoor1= '';
let openDoor2 = '';
let openDoor3= '';

const isBot=(door) => {
  if (door.src===botDoorPath) {return true;}
  else {return false;}
}

const isClicked=door => {
  if (door.src===closedDoorPath){return false;}
  else {return true;}
}

const playDoor = (door) => {
    numClosedDoor--;
    if (numClosedDoor===0) {gameOver('win');}
    else if (isBot(door)===true) {gameOver();}
  };

const randomChoreDoorGenerator =()=> {
  const choreDoor = Math.floor(Math.random()*numClosedDoor);
if (choreDoor ===0) {openDoor1=botDoorPath; openDoor2 = beachDoorPath; openDoor3 = spaceDoorPath; }
else if (choreDoor===1){openDoor2=botDoorPath;openDoor3 = beachDoorPath; openDoor1 = spaceDoorPath;}
else if (choreDoor===2) {openDoor3=botDoorPath; openDoor3 = beachDoorPath; openDoor1 = spaceDoorPath;}
else {return false}
}


doorImage1.onclick = () => {
if (currentlyPlaying && !isClicked(doorImage1)) {doorImage1.src=openDoor1;
playDoor(doorImage1);}}


doorImage2.onclick = () =>  {
if (currentlyPlaying && !isClicked(doorImage2)) {doorImage2.src=openDoor2;
playDoor(doorImage2);}}

doorImage3.onclick = () =>  {
if (currentlyPlaying && !isClicked(doorImage3)) {doorImage3.src=openDoor3;
playDoor(doorImage3);}}

startButton.onclick = () => {
  if (currentlyPlaying===false) {startRound()}
}

const startRound = () => {
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  numClosedDoor=3;
  startButton.innerHTML='Good Luck!'
  currentlyPlaying=true;
  randomChoreDoorGenerator();
}


const gameOver = (status)=> {
if (status==='win') {startButton.innerHTML='You win! Play again?';}  
else {startButton.innerHTML='Game over! Play again?';}
currentlyPlaying=false;
}

startRound();
