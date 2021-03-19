class man {
    constructor(x,y,width,height){
        var options = { restitution: 3             
        }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width=  width;
    this.height = height;
    
    World.add(world,this.body);
    }
    display(){
    rectMode(CENTER)
    rect(x,y,this.width,this.height)
    
    }
}