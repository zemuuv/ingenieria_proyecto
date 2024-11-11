// Iniciar QuaggaJS para leer los códigos de barras desde la cámara
Quagga.init({
    inputStream: {
      type: 'LiveStream',
      target: document.querySelector('#video'), // Seleccionar el elemento de video
      constraints: {
        facingMode: "environment" // Usa la cámara trasera si es un dispositivo móvil
      }
    },
    decoder: {
      readers: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader', 'code_39_reader', 'code_93_reader', 'codabar_reader'] // Tipos de códigos de barras a detectar
    }
  }, function(err) {
    if (err) {
      console.log(err); // Mostrar errores en la consola
      return;
    }
    Quagga.start(); // Iniciar la lectura del código de barras
  });
  
  // Función para procesar el resultado del escaneo
  Quagga.onDetected(function(result) {
    // Mostrar el código de barras escaneado en el HTML
    document.getElementById('result').innerText = result.codeResult.code;
  });
  