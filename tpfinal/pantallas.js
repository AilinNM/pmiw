function pantallaInicio() {
  // Muestra la primera imagen de la lista de imágenes en la pantalla
  image(imagenes[0], 0, 0, width, height);

  fill(255,0,0); // Establece el color de relleno a blanco
  textAlign(CENTER, CENTER); // Alinea el texto en el centro
  stroke(0); // Establece el color del contorno a negro
  strokeWeight(3); // Establece el grosor del contorno a 3 píxeles
  textSize(48); // Establece el tamaño del texto a 48 píxeles
  // Muestra el título en el centro superior de la pantalla
  text("Akira", width/2, height/4);

  textSize(20); // Cambia el tamaño del texto a 20 píxeles
  // Muestra el texto "Desarrollado por:  Ulises De Sousa y Ailin Mercado" en el centro
  text("Desarrollado por: Ulises De Sousa y Ailin Mercado", width/2, height/2 - 40);
  // Muestra el texto "Basado en la película 'Akira'" en el centro
  text("Basado en la película 'Akira'", width/2, height/2);

  // Dibuja un botón "EMPEZAR" en el centro inferior de la pantalla
  dibujarBoton("EMPEZAR", width/2, height*0.75);
  // Dibuja un botón "CRÉDITOS" debajo del botón "EMPEZAR"
  dibujarBoton("CRÉDITOS", width/2, height*0.75 + 60);
}

function pantallaCreditos() {
  // Muestra la imagen de créditos en la pantalla
  image(imagenes[21], 0, 0, width, height);  // Reutiliza la imagen de la escena inicial

  fill(255); // Establece el color de relleno a blanco
  textAlign(CENTER); // Alinea el texto en el centro
  stroke(0); // Establece el color del contorno a negro
  strokeWeight(3); // Establece el grosor del contorno a 3 píxeles
  textSize(24); // Establece el tamaño del texto a 24 píxeles
  // Muestra el título "Créditos" en la parte superior de la pantalla
  text("Créditos:", width/2, height/4);

  textSize(18); // Cambia el tamaño del texto a 18 píxeles
  // Muestra información sobre el arte y diseño
  text("Arte y Diseño: Katsuhiro Otomo", width/2, height/4 + 70);
  // Muestra información sobre la música
  text("Música: Dr. Shoji Yamashiro,", width/2, height/4 + 105);
  

  // Dibuja un botón "VOLVER" en el centro inferior de la pantalla
  dibujarBoton("VOLVER", width/2, height*0.75 + 60);
}

function pantallaHistoria(escenaIndex) {
  // Muestra la imagen correspondiente a la escena actual
  image(imagenes[estado], 0, 0, width, height);

  fill(0, 0, 0, 200); // Establece un color negro semi-transparente
  // Dibuja un rectángulo en la parte inferior de la pantalla para el fondo del texto
  rect(0, height - 150, width, 150);

  fill(255); // Establece el color de relleno a blanco
  textAlign(CENTER, TOP); // Alinea el texto en el centro
  textSize(14); // Establece el tamaño del texto a 14 píxeles
  // Define el área para el texto. Aquí el texto estará centrado horizontalmente y no se saldrá del ancho de la pantalla.
  let textWidthLimit = width * 0.7; // Por ejemplo, el 80% del ancho de la pantalla
  
  // Muestra el texto de la escena en la parte inferior de la pantalla con ajuste de línea automático
  text(textos[escenaIndex-1], width / 2 - textWidthLimit / 2, height - 120, textWidthLimit, 200); 

  
  // Dibuja el primer botón de opción en un tercio de la pantalla
  dibujarBoton(opciones[escenaIndex - 1][0], width/3, height - 40);
  // Dibuja el segundo botón de opción en dos tercios de la pantalla
  dibujarBoton(opciones[escenaIndex - 1][1], 2 * width/3, height - 40);
}
