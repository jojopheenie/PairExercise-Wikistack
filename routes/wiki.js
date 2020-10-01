const express = require("express");
const router = express.Router();
const { Page } = require("../models");
const { addPage } = require("../views");

router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  try {
    const page = await Page.create({
      title: 'asdfsd',
      content: 'sdfsdfdsfsdfsdfdsf'
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
});


function slug(title){
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}



router.use(express.urlencoded({ extended: false }));


router.get('/', (req,res,next)=>{
  res.send('got to GET /wiki/')
})



// router.post('/', (req,res,next)=>{
//   res.json(req.body)
// })

router.get('/add', (req,res,next)=>{
  res.send(addPage())
})




module.exports = router;

