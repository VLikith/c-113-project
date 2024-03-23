var one;
var webcam;
function preload(){}
function setup(){
    one=createCanvas(640, 480);
    one.position(110, 250);
    webcam=createCapture(VIDEO);
    webcam.hide();
}
function draw(){
    image(webcam, 180, 150, 300, 200);
    fill("red");
    stroke("red");
    circle(50, 50, 80);
    circle(590, 50, 80);
    circle(50, 440, 80);
    circle(590, 440, 80);
    fill("yellow");
    stroke("yellow");
    rect(90, 40, 460, 20);
    rect(90, 440, 460, 20);
    rect(40, 90, 20, 310);
    rect(580, 90, 20, 310);

}
function take_snapshot(){
    save("image1.png");
}