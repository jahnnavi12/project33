var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var divisionHeight=300;
var score =0;
var end=0,play;
var turn=0;
var gameState=play;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new G(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 75; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 75; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("black");
  textSize(20)
  fill("white");
 text("Score :"+score,20,30);
 text("1000",735,520);
 text("1000",20,520);
 text("500",100,520);
 text("500",180,520);
 text("500",580,520);
 text("500",665,520);
 text("200",260,520);
 text("200",500,520);
 text("100",340,520);
 text("100",420,520);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }


 for (var j = 0; j < particles.length; j++) {
  
  if(particles[j]!=null){

    particles[j].display();

    if(particles[j].body.position.y>=780){

      

      if(particles[j].body.position.x>=20 && particles[j].body.position.x<100){ score=score+1000; }

      if(particles[j].body.position.x>=100 && particles[j].body.position.x<180){ score=score+500; }

      if(particles[j].body.position.x>=180 && particles[j].body.position.x<260){ score=score+500;}

      if(particles[j].body.position.x>=260 && particles[j].body.position.x<340){ score=score+200; }
    
      if(particles[j].body.position.x>=340 && particles[j].body.position.x<420){ score=score+100;}

      if(particles[j].body.position.x>=420 && particles[j].body.position.x<500){ score=score+100; }

      if(particles[j].body.position.x>=500 && particles[j].body.position.x<580){ score=score+200; }
      
      if(particles[j].body.position.x>=580 && particles[j].body.position.x<660){ score=score+500;}

      if(particles[j].body.position.x>=660 && particles[j].body.position.x<740){ score=score+500; }

      if(particles[j].body.position.x>=740){ score=score+1000;}
      
       particles[j]=null;
       if(turn>=5){
       gameState=end;

      } 
}
    
  }
  }

 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     
    }

if(gameState===end){
  fill("red");
  textSize(100);
  text("GAME OVER!",100,400); 
} 

}
function mousePressed(){
  if(gameState!==end){
    turn++;
    particles.push(new Particle(mouseX, 10, 10, 10)); 
  }
}
