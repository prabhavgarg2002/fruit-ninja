//game State
var Play=1;
var END=0;
var gameState=1;

var sword,fruit,monster, fruitGroup, enemyGroup,score,r, randomFruit
var swordImage , fruit1, fruit2, fruit3, fruit4, monsterImage,gameOver
    

function preload(){
 
  swordImage=loadImage("sword.png")
  monsterImage=loadAnimation("alien1.png"," alien2.png")
  fruit1 =loadImage("fruit1.png")
  fruit2 =loadImage("fruit2.png")
  fruit3 =loadImage("fruit3.png")
  fruit4= loadImage("fruit4.png") 
  gameOverImage= loadImage("gameover.png")
  
} 
 function setup(){
   
   createCanvas(600,600);
   
   //creatinf sword
   sword=createSprite(40,200,20,20)
   sword.addImage(swordImage)
   sword.scale=0.7
   
   
   //set collider for sword
   sword.setCollider("rectangle",0,0,40,40)
   // Score variables and Groups
  score=0;
  
// score variables and Groups
   score=0;
   fruitGroup=createGroup();
   enemyGroup=createGroup();
  
}
                 
 


function draw(){
background("lightblue");
  
  if(gameState===PLAY){
    
    //call fruit and enemy function
    fruits();
    enemy();
    
    // move sword with mouse
    sword.y=world.mousey;
    sword.x=world.mousex;
    
    // increase score if sword touching fruit
    if(fruitGroup.istouching(sword)){
      fruitGroup.destroyEach();
      score=score+2;
    }
    else
  }
}
 // go to end state if sword touching enemy
  if(enemyGroup.istouching(sword)){
    gameState=END;
    
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setvelocityxEach(0);
    enemyGroup.setvelocityxEach(0);
  }