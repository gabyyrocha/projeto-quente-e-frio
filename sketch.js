let x;//criando a variavel x
let y;//criando a variavel y

function setup() {
  createCanvas(400, 400);
  x = random(400);//sorteando numero ate 
  x = int(x);// transformando p/ numero inteiro
  y = random(400);
  y = int(y);
}

function draw() {
  background("#10D6C4");// fundo da tela azul
  x = x + random(-2, 2);
  y = y + random(-2, 2);
  x = constrain(x, 0, 400);
  y= constrain(y, 0, 400)
  
  let distanciaX;
    let distanciaY;
    let distancia;
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
  distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  circle(mouseX, mouseY, distancia);//circulo com coordenadas aleatorias //e diametro 10

 
  if(distancia < 3) { // se posicaoX do mouse for igual a X // entao mostrara o texto "encontrei"
    text("Encontrei!", 200, 200);
    fill("rgb(206,64,89)")
     circle(mouseX, mouseY, distancia);
    
    noLoop();
  }
    if(distancia < 120){
     fill("blue") 
  circle(mouseX,mouseY,distancia)
   }else if (distancia > 100){
   fill("purple");
   circle(mouseX,mouseY,distancia > 100)
   }else if (distancia > 75){
     fill("orange");
     circle(mouseX,mouseY,distancia)
    }else if (distancia > 15){
      fill("red");
      circle(mouseX,mouseY,distancia)
         }
       }
     
     
     