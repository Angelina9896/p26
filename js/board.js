class board{
constructor(x,y,width,height){
  var options={
    isStatic:true
  };

  this.body=Bodies.rectangle(x,y,width,height,options);

  this.width=width;
  this.height=height;
  this.image=loadImage("assets/board.png");

  world.add(world,this.body);
}



display() {
var pos =this.body.position;
push()
imageMode(CENTRE);
image(this.image,pos.x,pos.y,this.width,this.height);
pop()

}

}

