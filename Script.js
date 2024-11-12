// Manejo del formulario de registro de ciudadano
document.getElementById('ciudadanoForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const ciudadano = Object.fromEntries(data.entries());
  const mensajeCiudadano = document.getElementById('mensajeCiudadano');

  try {
      const response = await fetch('http://localhost:3000/api/ciudadanos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ciudadano)
      });
      if (response.ok) {
          mensajeCiudadano.textContent = 'Ciudadano registrado correctamente';
      } else {
          mensajeCiudadano.textContent = 'Error al registrar ciudadano';
      }
  } catch (error) {
      mensajeCiudadano.textContent = 'Error de conexión';
  }
});

// Manejo del formulario de registro de personal de la fuerza pública
document.getElementById('personalForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const personal = Object.fromEntries(data.entries());
  const mensajePersonal = document.getElementById('mensajePersonal');

  try {
      const response = await fetch('http://localhost:3000/api/personal', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(personal)
      });
      if (response.ok) {
          mensajePersonal.textContent = 'Personal registrado correctamente';
      } else {
          mensajePersonal.textContent = 'Error al registrar personal';
      }
  } catch (error) {
      mensajePersonal.textContent = 'Error de conexión';
  }
});

// Manejo del formulario de autenticación
document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const loginData = Object.fromEntries(data.entries());
  const mensajeLogin = document.getElementById('mensajeLogin');

  try {
      const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData)
      });
      if (response.ok) {
          mensajeLogin.textContent = 'Inicio de sesión exitoso';
      } else {
          mensajeLogin.textContent = 'Error en las credenciales';
      }
  } catch (error) {
      mensajeLogin.textContent = 'Error de conexión';
  }
});

// Manejo del formulario de consulta de antecedentes
document.getElementById('consultaForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const consultaData = Object.fromEntries(data.entries());
  const resultadoConsulta = document.getElementById('resultadoConsulta');

  try {
      const response = await fetch(`http://localhost:3000/api/anteced
