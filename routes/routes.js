var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', nome: 'Eduardo' });
});

router.get('/ferramenta', (req,res,next)=>{
  res.render('ferramenta');
});

router.get('/produtos', (req,res,next)=>{
  res.render('produtos');
});

router.get('/maquinario', (req,res,next)=>{
  res.render('maquinario');
});

module.exports = router;
