let fondo;
let Mov1 = [];
let posX = 0;
let velocidad = 3;
function preload() {
  fondo = loadImage("data/fondo.jpg");
  for (let i = 1; i <= 12; i++) {
    Mov1.push(loadImage("data/Mov" + i + ".png"));
  }
}

function setup() {
createCanvas (800,600);
frameRate (15);
}
function draw() {
image (fondo,0,0);
let Accion = retorno(posX);
Animacion (posX, Accion);
posX = posX + velocidad;
  if (posX > 800) {
    posX = 0;
  }
}
  
