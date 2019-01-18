
const express=require('express');
const app=express();
const routes = require('./routes');
app.use(express.json());
app.use('/', routes);


//PORT
const port=process.env.PORT|| 3000;
app.listen(port,()=> console.log(`Listening on port ${port}...`));