var kakashiImg
var hidanImg
var kakazuImg
var painImg
var backgroundImg

function preload() {

kakashiImg = loadAnimation ("Kakashi-1.png","Kakashi-2.png","Kakashi-3.png","Kakashi-4.png","Kakashi-5.png")
hidanImg = loadImage ("Hidan.png")
kakazuImg = loadImage ("Kakazu.png")
painImg = loadImage ("Pain.png")
backgroundImg = loadImage ("GameBG.jpg")

}


function setup() {
  createCanvas(600,400);

  Background = createSprite(300,200);
  Background.addAnimation("Background",backgroundImg)
  Background.scale = 2

  }

  Kakashi = createSprite(150, 325, 50, 50);
  Kakashi.addAnimation("KakashiRunning",kakashiImg)
  Kakashi.scale = 0.8


}




function draw() {
  background(255,255,255);  
  background("green");
  drawSprites();

  if(Background.x < 600 ){
    Background.x = width/2;
 }
}