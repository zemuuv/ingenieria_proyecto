// index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./Config/database');
const Ciudadano = require('./Models/Ciudadano');

// Habilitar CORS para todos los orígenes
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Si solo quieres habilitar CORS para un origen específico (como http://127.0.0.1:5500), puedes hacerlo así:
app.use(cors({
    origin: 'http://127.0.0.1:5500'
  }));

  
// Sincroniza el modelo con la base de datos
sequelize.sync()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('No se pudo conectar a la base de datos:', err));

// Ruta para registrar un ciudadano
    app.post('/api/ciudadanos', async (req, res) => {
        console.log('Datos recibidos:', req.body);  // Verifica los datos recibidos
        
        try {
          const ciudadano = await Ciudadano.create(req.body);  // Guardamos los datos en la base de datos
          res.status(201).json(ciudadano);  // Respondemos con el ciudadano creado
        } catch (error) {
          console.error('Error al registrar ciudadano:', error);
          res.status(400).json({ error: 'Error al registrar ciudadano', details: error.errors });  // Muestra más detalles del error
        }
  });

// Listar ciudadanos
app.get('/api/ciudadanos', async (req, res) => {
    const ciudadanos = await Ciudadano.findAll();
    res.json(ciudadanos);
});

// Actualizar ciudadano
app.put('/api/ciudadanos/:id', async (req, res) => {
    try {
        const ciudadano = await Ciudadano.findByPk(req.params.id);
        if (!ciudadano) return res.status(404).json({ error: 'Ciudadano no encontrado' });

        await ciudadano.update(req.body);
        res.json(ciudadano);
    } catch (err) {
        res.status(400).json({ error: 'Error al registrar ciudadano', details: error.errors });
    }
});

// Eliminar ciudadano
app.delete('/api/ciudadanos/:id', async (req, res) => {
    try {
        const ciudadano = await Ciudadano.findByPk(req.params.id);
        if (!ciudadano) return res.status(404).json({ error: 'Ciudadano no encontrado' });

        await ciudadano.destroy();
        res.json({ message: 'Ciudadano eliminado' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});



// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
