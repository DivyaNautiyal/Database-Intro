var ball, db;
var position;


function setup(){
  db = firebase.database();
  console.log(db);
  createCanvas(500,500);

  ball = createSprite(250,250,10,10);
  ball.shapeColor = "red";

  db.ref('ball/position').on("value", read)


  /*var ballPosition = db.ref('ball/position');
  ballPosition.on("value", read);*/
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      write(-1,0);
      //changePosition(-1,0)
    }
    else if(keyDown(RIGHT_ARROW)){
      write(1,0);
      //changePosition(1,0)
    }
    else if(keyDown(UP_ARROW)){
      write(0,-1);
      //changePosition(0,-1)
    }
    else if(keyDown(DOWN_ARROW)){
      write(0,+1);
      //changePosition(0,+1)
    }
    drawSprites();
  
}

function changePosition(a,b){
  ball.x = ball.x + a
  ball.y = ball.y + b
}
function write(a,b){
  db.ref('ball/position').update({
    'x': ball.x + a,
    'y': ball.y + b
  })
}

function read(ReceivedData){
  p = ReceivedData.val();
  console.log(p.x);
  ball.x = p.x;
  ball.y = p.y;
}

