class Ball{
    constructor(x, y,width,heigth ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
                     
        }
        this.body = Bodies.rectangle(x,y,width,heigth,options);      
        this.width = width;
        this.height= height;
        
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
      }
}