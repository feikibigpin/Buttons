var button1;
var button2;
var myImage;
function preload() {
    myImage = loadImage("images/prova2.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  button1 = createButton("See results");
  button1.mousePressed(results); //en vez de mousePressed para touch es touchStarted
  button2 = createButton("Try again");
  button2.mousePressed(clearEverything);         //agregar otro botono para las imagenes, definir las dimensiones...
  background(50);
  noStroke();
}
function draw() {
}
function results() {
    image(myImage,0,0,800,600);
}
function clearEverything() {
  background(50);
}