class Circle{
    constructor(x_,y_,color_){
        this.x=x_;
        this.y=y_;
        this.r=2;
        this.growing=true;
        this.color=color_;
    }
    show(){
        noStroke();
        fill(color(this.color.r,this.color.g,this.color.b,this.color.t));
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    grow(){
        if(this.growing)
            this.r+=0.9;
    }
    wallCheck(){
        return ((this.x+this.r>=width)||(this.x-this.r<=0)||(this.y+this.r<=0)||(this.y+this.r>=height));
    }
    overlap(circles){
        for(var i in circles){
            if(this!=circles[i]){
                var d=dist(this.x,this.y,circles[i].x,circles[i].y);
                if(d<(this.r+circles[i].r)){
                    return true;
                }
            }
        }
    }
}