class umbrella {
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,100,options)
        this.image=loadImage('WalkingFrame/walking_1.png')
        World.add(world,this.body)
    }

    display (){
        fill(68,205,229)
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y+100,500,500)
    }


}