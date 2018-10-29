const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes= require('./routes/adminRoutes');
const customerRoutes= require('./routes/customerRoutes')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));// its a must to parse body in middlewares for us ny using req.body 

app.use('/admin',adminRoutes);
app.use(customerRoutes);


app.use((req,res,next)=>{
  res.status(404).send('<h1> Couldnt find the Page</h1>')
})

app.listen(4000);
