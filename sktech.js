let cor

function setup() {
  createCanvas(400,400);
  background("black");
cor = color(random(0,255),random(0,255),random(0,255));
          
}

function draw() {
  // Console.log(mouseIsPressed)
  fill(cor)
  circle(mouseX,mouseY,20)
  if(mouseIsPressed)  {
    cor = color(random(0,255),random(0,255),random(0,255));
  }
    
    
  }