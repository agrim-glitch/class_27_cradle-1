class Bob{
  
    constructor(x,y){ 

      var options ={
//'setStatic':true,
      'restitution':0.8,
        'friction':1.0,
       'density':1.2
      }
      this.body = Bodies.circle(x,y,25,options);
    
      World.add(world,this.body)
    

    }
    
    display(){

        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        ellipse(pos.x, pos.y, 50, 50);
    }


}