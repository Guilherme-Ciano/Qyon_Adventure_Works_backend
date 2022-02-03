// Imports
const express = require('express');
const cors = require('cors');
const app = express();

// Obtendo Rotas
const getRoutes = require('./routes/get/get.routes');
const postRoutes = require('./routes/post/post.routes');
const deleteRoutes = require('./routes/delete/delete.routes');
const patchRoutes = require('./routes/patch/patch.routes');

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/get', getRoutes);
app.use('/post', postRoutes);
app.use('/delete', deleteRoutes);
app.use('/patch', patchRoutes);

app.get("/", (req, res) => {
    res.json({status: 200, message: "Server is running"}).status(200);
});

// Inicializando o servidor
app.listen(3001, () => {
    console.log("Server is running on port 3000");
});