var fruit;
var knife; 
var apple, appleCut;
var orange, orangeCut;
var banana, bananaCut;
var watermelon, watermelonCut;
var bomb; 
var fruitGroup, bombGroup;

function preload(){
  watermelon = loadImage("watermelon.png");
  watermelonCut = loadImage("watermeloncut.png");
  apple = loadImage("apple.jpg");
  appleCut = loadImage("applecut.png");
  orange = loadImage("orange.jpg");
  orangeCut = loadImage("orangecut.jpg")
  banana = loadImage("banana.png");
  bananaCut = loadImage("bananacut.jpg")
  bomb = loadImage("bomb.png")

  knifeImg = loadImage("knife.png");
  gameOver = loadImage("gameover.png");

  kSound = loadSound("knifeSound.mp3");
  gOver = loadSound("gameOver.mp3");
}

function setup(){
  canvas = createCanvas(600,600)

  knife = createSprite(40,200,20,20)
  knife.addImage(knifeImg)

  score = 0;
  fruitGroup = createGroup();
  bombGroup = createGroup();
  

}

function draw(){
  background("white")
  

 fruits()
 Bmonster()

  knife.y = World.mouseY
  knife.x = World.mouseX

  drawSprites();
}

function fruits(){
  if(World.frameCount%60===0){
    fruit = createSprite(400,300,20,20)
    fruit.addImage(apple)
    fruit.velocityX = 6
    fruit.scale = 0.15
    fruit.x = 0
    fruit.x = Math.random(400,700)
  }
  
}

function Bmonster(){
  if(World.frameCount%210===0){
    monster = createSprite(40,300,20,20)
    monster.addImage("moving", bomb)
    monster.velocityX = 6
    monster.scale = 0.15

  }
  
 
}