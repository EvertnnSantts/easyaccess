const express = require('express');
const router = express.Router();

//rota
router.post('/', (req, res) => {
  const userData = req.body;
  console.log(userData);
  res.send({ message: 'Dados recebidos com sucesso!' });
});

module.exports = router;
