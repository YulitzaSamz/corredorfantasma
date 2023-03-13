var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
}

function draw(){
  background(0);
    
    if(tower.y > 400){
      tower.y = 300
    }
    spawnDoors();

    drawSprites();

}

function spawnDoors() {
  //escribir código aquí para aparecer puertas en la torre.
  if (frameCount % 240 === 0) {
  
  }
}

