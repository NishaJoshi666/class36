class particles{
    constructor(x,y,radius){
        var option = {
            restitution:0.8,
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.width = 20;
        this.height = 20;
        this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y,4,4);
    }
};