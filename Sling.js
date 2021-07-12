class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            legth: 10
        }
       this.pointB = pointB;
       this.Sling = Constraint.create(options);
       World.add(world,this.body);
    }
    fly(){
       this.throw.bodyA = null;
    }
    launch(bodyA){
        this.throw.bodyA = bodyA;
     }
}