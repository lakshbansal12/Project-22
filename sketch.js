var starImage , fairyImage , backgroundImage
var fairy , star , starBody
var fairyVoice
var myWorld , myEngine

function preload()
{
   //preload the images here
   starImage=loadImage("images/star.png");
   backgroundImage=loadImage("images/starnight.png");
   fairyImage=loadAnimation("images/fairy1.png","images/fairy2.png");
   fairyVoice=loadSound("sound/JoyMusic.mp3")

}

function setup() {
  createCanvas(800, 750);
  fairyVoice.play()
  fairy=createSprite(150,600)
  fairy.addAnimation("fairy",fairyImage)
  fairy.scale=0.2;
  star=createSprite(670,30)
  star.addImage("star",starImage)
  star.scale=0.3;

  myEngine=Matter.Engine.create()
  myWorld=myEngine.world
  var options = {
    restitution:0.5,
    isStatic:true
  }
  starbody=Matter.Bodies.circle(670,30,5,options)
  Matter.World.add(myWorld,starbody)
}


function draw() {
  background(backgroundImage);
  Matter.Engine.update(myEngine)
  star.x=starbody.position.x;
  star.y=starbody.position.y;
  if(starbody.position.y>470 && star.y>470){
    Matter.Body.setStatic(starbody,true)
  }
  drawSprites();
  
}

function keyPressed() {
if(keyCode === RIGHT_ARROW){
  fairy.x+=20
}
if(keyCode === LEFT_ARROW){
fairy.x-=20

}
if(keyCode === DOWN_ARROW){
  Matter.Body.setStatic(starbody,false)
}
}
