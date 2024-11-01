import express from 'express'

const app = express();
const PORT = 3000;

// Ruta get con parametro de ruta
// Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.send(`User ${id}`);
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})