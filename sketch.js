var database;
var playerCount ;
var gameState=0;
var player,form,game;
var allPlayers;
var distance=0;
var car1,car2,car3,car4;
var cars;
var car1img,car2img,car3img,car4img;
var track;
function preload(){
car1img=loadImage("car1.png")
car2img=loadImage("car2.png")
car3img=loadImage("car3.png")
car4img=loadImage("car4.png")
track=loadImage("track.jpg")


}

function setup(){
  database = firebase.database();
  console.log(database);
  
  createCanvas(displayWidth-20,displayHeight-30);

  game = new Game ()
  game.getState();
  game.start();

  
}

function draw(){
  if(playerCount===4){
    game.update(1);


  }
  if(gameState===1){

    clear();
    game.play();

  }
  
}


