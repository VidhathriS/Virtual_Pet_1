//Create variables here
var dog,dogImg, happyDog
var database
var foodS, foodStock

function preload()
{
  //load images here
  dogImg = loadImage("Dog.png")
  happyDog = loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Note: Press UP_ARROW key To Feed Drago Milk!",250,20)

  database = firebase.database();

  dog = createSprite(250,250,50,50)
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value",foodStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(happyDog)
}

  drawSprites();
  //add styles here
 
    stroke("white");
    textSize(20);
    fill("white");
    text("foodStock",250,100)
}

function readStock(data){
     foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}