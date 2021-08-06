var btn_red
var btn_green
function setup() {
  createCanvas(400,400);
  btn_red=createButton("red");
  btn_red.position(100,50);
  btn_red.mousePressed(red_gb);

  btn_green=createButton("green");
  btn_green.position(250,50);
  btn_green.mousePressed(green_gb);
}
function red_gb()
{
r=255;
g=0;
b=0;
}


function green_gb()
{
r=0;
g=255;
b=0;
}
function draw() 
{
  background(30);

}




