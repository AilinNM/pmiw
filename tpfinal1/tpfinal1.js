let DEBUG = true;
let pantalla;
let imgFondo = []; 
let botones = []; 
let textos = [];
let sonido;


function preload() {
  //toda la precarga de imágenes loadImage(), loadSound(), loadFont()---
  //cargar las imagenes de fondo:
  for (let i = 0; i < 3; i++) {
    imgFondo[i] = loadImage("data/pantalla00" + nf(i, 2) + ".jpg");
  }
  
  // Cargar el archivo de texto
  loadStrings('data/textos.txt', (data) => {
    textos = data;
   console.log('Textos cargados:', textos.length);
  });
  
   sonido = loadSound('data/sonido.mp3');
  
}

function setup() {
  createCanvas(640, 480);
  pantalla = 0;
  
  // llama a la función que crea todos los botones al inicio del programa
  crearBotones();
}

function draw() {
  background(0, 0, 255); 
  
  if (pantalla === 0) {
    //mostrar la pantalla de inicio
    mostrarPantallaInicio();
    
  } else if (pantalla == 1) {
    image(imgFondo[0], 0, 0, width, height);
    mostrarTexto(1);
    mostrarBotones(1);
 
    
  } else if (pantalla == 2) {
    image(imgFondo[1], 0, 0, width, height);
    mostrarTexto(2);
    mostrarBotones(2);
    
  } else if (pantalla == 3) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(3);
    mostrarBotones(3);
 
  } else if (pantalla == 4) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(4);
    mostrarBotones(4);
    
  } else if (pantalla == 5) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(5);
    mostrarBotones(5);
  
  } else if (pantalla == 6) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(6);
    mostrarBotones(6);
  
  } else if (pantalla == 7) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(7);
    mostrarBotones(7);
    
  } else if (pantalla == 8) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(8);
    mostrarBotones(8);
    
  } else if (pantalla == 9) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(9);
    mostrarBotones(9);
 
  } else if (pantalla == 10) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(10);
    mostrarBotones(10);
    
  } else if (pantalla == 11) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(11);
    mostrarBotones(11);
    
  } else if (pantalla == 12) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(12);
    mostrarBotones(12);
  }   
   else if (pantalla == 13) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(13);
    mostrarBotones(13);
  }   
    else if (pantalla == 14) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(14);
    mostrarBotones(14);
  } 
    else if (pantalla == 15) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(15);
    mostrarBotones(15);
  } 
    else if (pantalla == 16) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(16);
    mostrarBotones(16);
  } 
    else if (pantalla == 17) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(17);
    mostrarBotones(17);
  } 
    else if (pantalla == 18) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(18);
    mostrarBotones(18);
  } 
     else if (pantalla == 19) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(19);
    mostrarBotones(19);
  }
     else if (pantalla == 20) {
    image(imgFondo[2], 0, 0, width, height);
    mostrarTexto(20);
    mostrarBotones(20);
  }
  
  if (DEBUG) {
    push();
    fill(0, 255, 0);
    textAlign(LEFT);
    textSize(14);
    text("PANTALLA: " + pantalla, 20, 20);
    pop();
  }
  
  
}

function mousePressed() {
  if (pantalla === 0) {
    pantalla = 1;
    
    if (sonido) {
      sonido.loop();
      console.log("✅ Sonido.loop() ejecutado");
    } else {
      console.log("❌ Sonido es null o undefined");
    }
    
    // Reproducir el sonido cuando empieza el juego
    //if (sonido && !sonido.isPlaying()) {
    //  sonido.loop(); // usa .loop() si querés que se repita, o .play() si querés que suene una sola vez
    //}
    
  } else {
    // verifica si el clic fue sobre algún botón
    verificarClicBotones();
    
    if (pantalla === 0 && sonido) {
      sonido.stop();
      console.log("🛑 Sonido detenido");
    }
    
    // Si volvemos a la pantalla de inicio, detener el sonido
   // if (pantalla === 0 && sonido && sonido.isPlaying()) {
      //sonido.stop();
  }
}


function mostrarPantallaInicio() {
  push();
  fill(255);
  textAlign(CENTER);
  stroke(0);
  strokeWeight(3); 
  textSize(32);
  text("La Reina de las Nieves", width / 2, height / 4);
  textSize(24);
  text("Desarrollado por: Lina Alonso y Ailin Mercado", width / 2, height / 2 - 40);
  text("Basado en el cuento 'La Reina de la Nieve'",  width / 2, height / 2 - 10);
  textSize(18);
  text("hace clic para empezar...", width / 2, height / 2 + 20);
  pop();
}

function crearBoton(x, y, ancho, alto, texto, pantallaActual, pantallaDestino) {
  return {
    x: x,
    y: y,
    ancho: ancho,
    alto: alto,
    texto: texto,
    pantallaActual: pantallaActual,
    pantallaDestino: pantallaDestino
  };
}

function crearBotones() {
   // Pantalla 1 tiene UN boton
    botones.push(crearBoton(220, 350, 200, 60, "Continuar", 1, 2));
    
    // Pantalla 2 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar", 2, 3));
  
  // Pantalla 3 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar", 3, 4));
  
  // Pantalla 4 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar", 4, 5));
  
  // Pantalla 5 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar", 5, 6));
  
  // Pantalla 6 tiene DOS botones
   // Botón IZQUIERDO
  botones.push(crearBoton(130, 350, 100, 60, "A", 6, 7));
  // Botón DERECHO
  botones.push(crearBoton(400, 350, 100, 60, "B", 6, 9));

  // Pantalla 7 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar" , 7, 8));
  
  // Pantalla 8 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "FIN. Volver al inicio", 8, 0));
  
  // Pantalla 9 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar", 9, 10));
  
  // Pantalla 10 tiene UN botón
   // Botón IZQUIERDO
  botones.push(crearBoton(130, 350, 100, 60, "A", 10, 11));
  // Botón DERECHO
  botones.push(crearBoton(400, 350, 100, 60, "B", 10, 12));
  
   // Pantalla 11 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar", 11, 12));
  
  // Pantalla 12 tiene UN botón
   // Botón IZQUIERDO
  botones.push(crearBoton(130, 350, 100, 60, "A. Si", 12, 13));
  // Botón DERECHO
  botones.push(crearBoton(400, 350, 100, 60, "B. No.", 12, 17));
  
  // Pantalla 13 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar", 13, 14));
  
  // Pantalla 14 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar", 14, 15));
  
  // Pantalla 15 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar", 15, 16));
  
   // Pantalla 16 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "FIN. Volver al inicio", 16, 0));
  
   // Pantalla 17 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60,"Continuar", 17, 18));
  
   // Pantalla 18 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60,"Continuar", 18, 19));
  
   // Pantalla 19 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "Continuar", 19, 20));
  
   // Pantalla 20 tiene UN botón
  botones.push(crearBoton(220, 350, 200, 60, "FIN. Volver al inicio", 20, 0));
  
  
  
  
}

function mostrarBotones(pantallaActual) {
  for (let i = 0; i < botones.length; i++) {
    if (botones[i].pantallaActual === pantallaActual) {
      dibujarBoton(botones[i]);
    }
  }
}

function dibujarBoton(boton) {
  push();
  if (mouseX > boton.x && mouseX < boton.x + boton.ancho &&
      mouseY > boton.y && mouseY < boton.y + boton.alto) {
    fill(100, 150, 255);
  } else {
    fill(50, 100, 200);
  }
  
  rect(boton.x, boton.y, boton.ancho, boton.alto, 10);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text(boton.texto, boton.x + boton.ancho / 2, boton.y + boton.alto / 2);
  
  pop();
}

function verificarClicBotones() {
  for (let i = 0; i < botones.length; i++) {
    if (botones[i].pantallaActual === pantalla) {
      if (mouseX > botones[i].x && mouseX < botones[i].x + botones[i].ancho &&
          mouseY > botones[i].y && mouseY < botones[i].y + botones[i].alto) {
        
        // Si clickeamos el botón: cambiar a la pantalla destino
        pantalla = botones[i].pantallaDestino;
        break;
      }
    }
  }
}

function mostrarTexto(pantallaActual) {
  let textWidthLimit = 500;
  let texto = textos[pantallaActual - 1]; // -1 porque los arrays empiezan en 0

  // Posiciones base (podés modificarlas para mover el bloque entero)
  let x = width / 2 - textWidthLimit / 2;  // centrado horizontalmente
  let y = height - 210;                    // más arriba o más abajo

  if (texto) {
    push();
    // Fondo del texto (rectángulo semitransparente)
    fill(0, 0, 0, 150);
    noStroke();
    rect(x - 10, y - 10, textWidthLimit + 20, 180, 10);

    // Texto en blanco sobre el fondo
    fill(255);
    textAlign(LEFT, TOP);
    textSize(18);
    text(
      texto.trim(),
      x,
      y,
      textWidthLimit,
      200
    );
    pop();
  }
}
