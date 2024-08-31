let mifoto;
let cantX = 7;
let cantY = 7;
let x=400;
let diam ;
let bordes = color (110,149,103);
let fondo = color (198,30,24);

function preload(){
   mifoto = loadImage('data/F_4.jpg');
}

function setup() {
  createCanvas(800, 400);
  image (mifoto,0,0);
}

function draw() {
  
    dibujaGrilla();
}

function dibujaGrilla(){
  let modX = x/cantX;
  let modY = x/cantY;
  for ( let j=0; j<cantY; j++) {
    for ( let i=0; i<cantX; i++) {
      fill(fondo);
      noStroke();
      rect(400+i*modX, j*modY, modX, modY);
      
      if ( (i+j)%2==0 ){
        strokeWeight (1); 
      } else  {
       strokeWeight (3); 
      }
             circulos(i,j,modX,modY);
    }
  } 
}

function circulos( i,  j, modX,  modY){
   diam= dist( i, j, modX/2.3, modY/2.3);
      noFill();
      stroke(bordes);
      ellipse(x+i*modX+modX/2, j*modY+modY/2, diam ,diam);
}

function mousePressed() {
  cantX++;
  cantY++;
}

function colorInteractivo (pos){
  return (height-pos);
}

function mouseClicked(){
  let color1=colorInteractivo (mouseY);
  let color2=colorInteractivo (mouseX);
  bordes = color (random(color1),random(100),50);
  fondo = color(random (color2),random(100),random(256));
}

function keyPressed() {
  cantX = cantX+10;
  cantY= 100/2;
}

function keyReleased(){
  cantX = 7;
  cantY= 7;
  bordes = color (110,149,103);
  fondo = color (198,30,24);
}
