import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const {Pool} = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Examen-Festival',
    password: 'Dani1216',
    port: 5432,
});

app.post('/resultados', async (req, res) => {
    const { nombre, grupo, aciertos } = req.body;
    if (!nombre || !grupo || aciertos === undefined) {
        return res.status(400).send('Faltan datos.');
    }

    try {
        await pool.query(
            'INSERT INTO resultados (nombre, grupo, aciertos) VALUES ($1, $2, $3)',
            [nombre, grupo, aciertos]
        );
        res.status(201).send('Datos almacenados correctamente.');
    } catch (error) {
        console.error('Error al guardar en la base de datos:', error);
        res.status(500).send('Error al guardar en la base de datos.');
    }
});
const express = require('express');
const path = require('path');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
