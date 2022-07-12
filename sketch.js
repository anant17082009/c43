var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var titleimg
var ball,ballimg


function preload() {
  backgroundImage = loadImage("./assets/background2.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
 titleimg = loadImage("./assets/title.png")
 ballimg = loadImage("./assets/ball.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  form = new Form()

  car1 = createSprite(500,20,20,20)
  car1.addImage(car1_img)
  car1.scale = 0.10
  car1.visible = false
  

  ball = createSprite(windowWidth/2-100 , windowHeight/2)
  ball.addImage(ballimg)
  ball.scale = 0.05
  ball.visible = false
  
 // game = new Game();
  //game.getState();
 // game.start();
}

function draw() {
  background(backgroundImage);
  form.display()
//  if (playerCount === 2) {
//    game.update(1);
//  }
//
//  if (gameState === 1) {
//    game.play();
//  }

drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
