var circles=[];
function setup(){
    createCanvas(600,600);
    circles.push(new Circle(random(width),random(height)));
}
function draw(){  
    background(0);
    var result=addCircle();
    if(result[0]){
        circles.push(result[1]);
    }
    for(var i in circles){
        if(circles[i].wallCheck() || circles[i].overlap(circles)){
            circles[i].growing=false;
        }
        circles[i].grow();
        circles[i].show();
    }
}
function addCircle(){
    var x=random(width);
    var y=random(height);
    var valid=true;
    for(var i in circles){
        if(dist(x,y,circles[i].x,circles[i].y)<circles[i].r){
            valid=false;
            break;
        }
    }
    if(valid){
        return [true,new Circle(x,y)];
    }
    else{
        return [false];
    }
}