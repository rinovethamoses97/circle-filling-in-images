var circles=[];
var timage;
function preload(){
    timage=loadImage("image.jpg");
}
function setup(){
    timage.resize(600,600);
    createCanvas(600,600);
}
function draw(){  
    background(0);
    var count=0;
    while(count<100){
        var result=addCircle();
        if(result[0]){
            circles.push(result[1]);
        }
        count++;
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
        timage.loadPixels();
        var index=(floor(x)+floor(y)*timage.width)*4;
        var color={
            r:timage.pixels[index],
            g:timage.pixels[index+1],
            b:timage.pixels[index+2],
            t:timage.pixels[index+3]
        }
        return [true,new Circle(x,y,color)];
    }
    else{
        return [false];
    }
}