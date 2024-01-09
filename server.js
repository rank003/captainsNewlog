const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const connectDB= require('./mongo/connect.jsx')
const morgan=require('morgan');
const methodOverride = require('method-override');




// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(morgan('tiny'));
app.use(express.json());
// MongoDB Connection
connectDB();




// Routes
const logsController = require('./controllers/logs');
app.use('/logs', logsController);

// Index Route
app.get('/', (req, res) => {
  res.send('Welcome to Captain\'s Log App!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  




/*app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.json());


//import models from pokemon.js
const pokemonData= require("./models/pokemon.js");
const pokemonSchema=require("./models/pokemonSchema.js");
connectDB();

// pokemon route
app.get('/pokemonroute', (req, res) => {
  pokemonSchema.find().then((data)=>{
    res.render('pokemon/Index',{p:data});
  }).catch((err)=>{
    console.log(err);
  })
 
});

app.get ('/pokemon/:pname/:id',(req,res)=>{
    id=req.params.id;
    pname=req.params.pname;
res.render('pokemon/Show',{pokemonNumber:id,pokemonName:pname})
    
})


app.get('/pokemonDelete/:pname', async (req,res)=>{
  
try {
  pname=req.params.pname;
   const val=await pokemonSchema.findOneAndDelete({name:pname});
  res.redirect('/pokemonroute');
  
} catch (error) {
  console.log(err);
}

})


app.get('/createpokemon', (req, res) => {
  res.render('pokemon/New');
});


app.post('/pokemon/new', async (req, res) => {
 
  if (!req.body){
    res.send("you cannot send an empty message pleas fill up your form");
    return;
  }
  try {
    const{name}=req.body;
    const newPokemon= new pokemonSchema({name});
      const val= await newPokemon.save();a
      res.redirect('/pokemonroute');
    
  } catch (error) {
     console.log("there is an error with posted data:",err);
  }
 // const newName= { name:name,img:`http://img.pokemondb.net/artwork/${name}`};
  
});*/



