// Camila Colussi 2018
// Taller Intro p5.js por Guillermo Montecinos
// La Planta

//Ejercicio Recode: Carmen Herrera 1

function setup(){
  createCanvas(180*5,150*5); // Multiplico escalar mi lienzo
  colorMode(HSB,1);
  // HSB: Hue/Saturation/Brightness
  // By default, this is colorMode(HSB, 360, 100, 100, 1) = (mode, H, S, B, A)
  // (HSB, 1) donde 1 es Number: range for all values
}

function draw(){
  console.log("mouseX = " + mouseX);
  console.log("mouseY = " + mouseY);
  // le indico a la consola qué quiero que imprima

  //background(map(mouseX,0,width,0,1),map(mouseY,0,height,0,1),1);
    // El color está determinado por el movimiento del mouse en background.
    // map: Re-maps a number from one range to another.
    // map(value,start1,stop1,start2,stop2)
    // map = H; map = S; 1 = B)
    // con este método puedo encontrar los colores que necesito para mi composición

// fondo naranja
  background(map(47,0,width,0,1),map(593,0,height,0,1),1);
    // encontré que 47 y 593 me servirán para hacer naranjo
    // quiero remapear el valor 47 cricri?

// barras verdes
  noStroke();
  //fill(map(mouseX,0,width,0,1),1,map(mouseY,0,height,0,1));
  fill(map(361,0,width,0,1),1,map(434,0,height,0,1));
  rect(0,height/5,width,height/5);
    // una barra verde
    // rect(x,y,w,h)
  rect(0,3*height/5,width,height/5);
    // otra barra verde
    // multiplico y*3 para desplazar mi barra más abajo

  //t1
  triangle(0,0,height*(6.3/14.7),height,0,height);
    //triángulo izquierda verde
    // triangle(x1,y1,x2,y2,x3,y3)

  // t2
  fill(map(47,0,width,0,1),map(593,0,height,0,1),1);
  translate(width,height);
  rotate(PI);
  // necesito translate y rotate al mismo tiempo, porque si hago solo uno de ellos a la vez, se me salen de cuadro
  triangle(0,0,height*(6.3/14.7),height,0,height);


}
