class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.boy = loadImage('Plucking mangoes/boy.png');
        /*this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');*/
        this.pointB = pointB
        this.boysHand = Constraint.create(options);
        World.add(world, this.boysHand);
    }
    attach(body){
        this.boysHand.bodyA = body;
    }
    
    fly(){
        this.boysHand.bodyA = null;
    }

    display(){
        //image(this.sling1,200,20);
        //image(this.sling2,170,20);
        if(this.boysHand.bodyA){
            var pointA = this.boysHand.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                //line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                //image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                //line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                //image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}