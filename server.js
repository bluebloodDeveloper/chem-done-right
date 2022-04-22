if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

const sessionKEY = process.env.SESSION_KEY
const express = require('express')
const port = process.env.PORT
const fs = require('fs')
const http = require('http')
const os = require('os');
const numCpu = os.cpus().length
const app = express();
const compression = require('compression')
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const session = require('express-session');








app.use(compression({
    level:6,
    threshold:0,
    filter:(req,res)=>{
        if(req.headers['x-no-compression']){
            return false
        }
        return compression.filter(req,res)
    }    
}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());


app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: sessionKEY,
    saveUninitialized:false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
    resave: false,
}));


app.get('/', (req,res)=>{
    res.render('./main/home.ejs')
})




console.log(`port open on ${port}`)
app.listen(port); 








