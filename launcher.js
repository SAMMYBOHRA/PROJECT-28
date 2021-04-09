class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 32
        }
        this.pointB = pointB
        this.launcher= Constraint.create(options);
        World.add(world, this.launcher);
    }

      display(){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}
