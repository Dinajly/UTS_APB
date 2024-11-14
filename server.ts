import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs/promises';
import path from 'path';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint untuk membaca dan menampilkan file secara asinkron
app.get('/readfile', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'data.txt'); // Pastikan file data.txt ada di direktori yang sama
        const data = await fs.readFile(filePath, 'utf-8');
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Error reading file' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
