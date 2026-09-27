const express = require('express');

const app = express();
const PORT = 3000;

const articulos = [
    { id: 1, titulo: 'Pokémon Escarlata' },
    { id: 2, titulo: 'Angular NativeScript' },
    { id: 3, titulo: 'Redux y aplicaciones móviles' },
    { id: 4, titulo: 'Express y APIs REST' }
];

app.get('/api/articulos', (req, res) => {

    const busqueda = req.query.busqueda || '';

    const resultados = articulos.filter(articulo =>
        articulo.titulo
            .toLowerCase()
            .includes(busqueda.toLowerCase())
    );

    res.json(resultados);
});

app.listen(PORT, () => {
    console.log(`API ejecutándose en http://localhost:${PORT}`);
});
