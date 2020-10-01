const router  = require('express').Router();

router.get('/', (req,res,next)=>{
  res.send('got to GET /users/')
})
module.exports= router;
