class plinko{
    constructor(x,y,radius){
        var option = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.width = 2;
        this.height = 2;
    World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,5,5);
    }
};