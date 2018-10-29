const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const rootDir= require('./utility/path');
const adminRoutes= require('./routes/admin');
const customerRoutes= require('./routes/shope');
const app = express();

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: false }));// its a must to parse body in middlewares for us ny using req.body 

app.use('/admin',adminRoutes);
app.use(customerRoutes);


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html' ))
})

app.listen(4000);
