class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
       this.paper1=Bodies.circle(x,y,radius,options);
       this.x=x;
       this.y=y;
      this.radius=20;
       World.add(world,this.paper1);
   }   
   
   
   display(){
      
       push ();
       translate();
       angleMode(RADIANS);
       ellipseMode(RADIUS);
       fill("green");
       ellipse(this.paper1.position.x,this.paper1.position.y,20,20);
       pop ();
   }
   }