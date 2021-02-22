const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;
//public static path
const static_path=(path.join(__dirname, "../public"));
const temp_path=(path.join(__dirname, "../templates/views"));
const partial_ = path.join(__dirname,'../templates/partial');


app.set('view engine','hbs');
app.set('views',temp_path);
hbs.registerPartials(partial_);
app.use(express.static(static_path));
//routing
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('*',(req,res)=>{
    res.render('404error');
});
app.listen(port,()=>{
    console.log('server working');
});
