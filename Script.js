document.getElementById('ciudadanoForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());  // Convierte los datos del formulario en un objeto
    
    console.log(data);  // Verifica los datos antes de enviarlos
  
    try {
      const response = await fetch('http://localhost:3000/api/ciudadanos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)  // Envia los datos como JSON
      });
  
      if (response.ok) {
        console.log('Ciudadano registrado correctamente');
      } else {
        console.error('Error al registrar ciudadano');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  });
  