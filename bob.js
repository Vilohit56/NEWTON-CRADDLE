class Bob {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
            World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("orange");
        circle(pos.x,pos.y,this.radius);
        }
    };