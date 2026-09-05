function Animacion (posX, Accion){
  if (!Accion){ let cuadroActual = floor(frameCount / velocidad) % 7; 
    image(Mov1[cuadroActual], posX, 420);
  } else {
    
    let cuadroBola = floor(frameCount / velocidad) % 5; 
    image(Mov1[cuadroBola + 7], posX, 420); 
  }
}
function retorno(x) {
  return x >= 400;
}
