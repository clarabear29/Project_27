class bar{
    constructor(x,y,w,h){
        var options={
            isStatic: true
        }
        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(x,y,w,h,options);
        
    
        World.add (world,this.body);
    }
    display(){
        var barPos=this.body.position;
        push()
        translate(barPos.x, barPos.y)
        rectMode(CENTER);
        //strokewWeight(4);
        fill(128,128,128);
        rect(0,0,this.w,this.h);
        pop()
    }
}