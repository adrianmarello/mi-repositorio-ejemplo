import express from 'express'

const app = express();
const PORT = 3000;

// Rutra GET con parametro de consulta
// Solicitud: http://localhost:3000/profile?edad=25
app.get('/profile', (req, res) => {
  const { edad } = req.query;
  res.send(`Edad: ${edad}`);
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})