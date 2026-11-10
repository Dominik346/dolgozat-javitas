const express = require('express');
const app = express();
const mysql = require('mysql2/promise');
require('dotenv').config();
const port = 3000;

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

const dbPool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'raktar_db',
        port: '3307',
})

app.get('/termekek', async (req, res) => {
    const [rows] = await dbPool.query(
        'SELECT * FROM termekek'
    );

    res.json(rows);
});

app.get('/termekek/csokkeno_ar', async (req, res) => {
    const [rows] = await dbPool.query(
        'SELECT * FROM termekek ORDER BY ar DESC'
    );

    res.json(rows);
});

app.get('/termekek/2000alatt', async (req, res) => {
    const [rows] = await dbPool.query(
        'SELECT nev FROM termekek WHERE ar < 2000'
    );

    res.json(rows);
});

app.get('/termekek/kategoriakkal', async (req, res) => {
    const [rows] = await dbPool.query(`
        SELECT termekek.id, termekek.nev, termekek.ar, termekek.keszlet, termekek.elerheto, kategoriak.nev AS kategoria FROM termekek INNER JOIN kategoriak ON termekek.kategoria_id = kategoriak.id ORDER BY termekek.ar DESC
    `);

    res.json(rows);
});

app.get('/termekek/elerhetokeszlet', async (req, res) => {
    const [rows] = await dbPool.query(
        'SELECT nev FROM termekek WHERE elerheto = 1 AND keszlet > 0;'
    );

    res.json(rows);
});

app.put('/termekek/keszlet', async (req, res) => {
    const [result] = await dbPool.query(
        'UPDATE termekek SET elerheto = 1 WHERE keszlet > 0'
    );

    res.json(result);
});

app.put('/termekek/inflacio', async (req, res) => {
    const [result] = await dbPool.query(
        'UPDATE termekek SET ar * 1.1;'
    );

    res.json(result);
});