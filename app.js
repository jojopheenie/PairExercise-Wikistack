const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const layout = require("./views/layout.js")
const app = express();
const { db, Page, User } = require('./models');
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))

app.use('/wiki', wikiRouter);
app.use('/users', userRouter);



app.get("/", (req, res) => {
  res.redirect('/wiki')
})

const PORT = 3000;

const init = async () => {
  await Page.sync({force: true});
  await User.sync({force: true});
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();


