class Box {
  constructor(x, y){
 var options = {
    isStatic : false,
    friction: 1,
    density: 1.2
  }
  this.body = Bodies.rectangle(x, y, 30, 40);
  World.add(world, this.body);
}

display(){
  var pos = this.body.position;
  fill('cyan');
  rectMode(CENTER);
  rect(pos.x, pos.y, 30, 40);
}
}