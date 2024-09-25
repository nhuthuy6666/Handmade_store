const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");
const { name } = require("tar/types");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://user:user123@cluster0.4z35lmy.mongodb.net/handmade-store?retryWrites=true&w=majority&appName=Cluster0");

app.get("/", (req, res) => {
    res.send("Express app is running");
})

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

app.post("/avatar", upload.single('picture'), (req, res) => {
    res.json({
        success: 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

const Product = mongoose.model("Product", {
    id:{
        type: Number,
        require: false,
    },
    name:{
        type: String,
        require: true,
    },
    img:{
        type: String,
        require: true,
    },
    current_price:{
        type: Number,
        require: true,
    },
    old_price:{
        type: Number,
        require: false,
    },
    category:{
        type: String,
        require: true,
    },
    date:{
        type: Date,
        default: Date.now,
    }
})

app.post("/addproduct", async(req, res) => {
    let Products = await Product.find({}).sort({id: -1}).limit(1);
    let id;
    if(Products.length > 0){
        id = Products[0].id + 1;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        img: req.body.img,
        current_price: req.body.current_price,
        old_price: req.body.old_price,
        category: req.body.category,   
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

app.post("/deleteproduct", async(req, res) => {
    await Product.findOneAndDelete({id: req.body.id});
    res.json({
        success: true,
        name: req.body.id,
    })
})

app.get("/allproducts", async(req, res) => {
    let Products = await Product.find({});
    console.log("All products Fetched");
    res.send(Products);
})

const User = mongoose.model('User', {
    name: {
        type: String,
        require: true,
    },
    birthday:{
        type: String,
        require: false,
    },
    phone: {
        type: String,
        require: false,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    img:{
        type: String,
        require: false,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    // id:{
    //     type: Number,
    //     unique: false
    // }
})

app.post("/signup", async(req, res) => {
    let check = await User.findOne({email: req.body.email});
    if(check){
        return res.status(400).json({success: false, errors: "Exitsting user found with same email address"});
    }
    let cart = {};
    for(let i = 1; i < 300; i ++){
        cart[i] = 0;
    }
    // let users = User.find({}).sort({id:-1}).limit(1);
    // let id;
    // if(users.length > 0){
    //     id = users[0].id + 1;
    // }
    // else{
    //     id = 1;
    // }

    const user = new User({
        name: req.body.name,
        birthday: req.body.birthday,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        img: req.body.img,
        date: req.body.date,
        // id: id,
    })
    await user.save();
    const data = {
        user: {
            id: user.id,
        }
    }
    const token = jwt.sign(data, "secret_ecom");
    res.json({success: true, token});
})

app.post("/login", async(req, res) => {
    let user = await User.findOne({email: req.body.email});
    if(user){
        const passmatch = req.body.password === user.password;
        if(passmatch){
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, "secret_ecom");
            res.json({success: true, token});
        }
        else{
            res.json({success:false, errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false, errors:"Wrong Email address"})
    }
})

app.get("/alluser", async(req, res) => {
    let users = await User.find({});
    console.log('All Users Fetched');
    res.json(users);
})

app.post("/deleteuser", async(req, res) => {
    await User.findOneAndDelete({email: req.body.email});
    res.json({
        success: true,
        email: req.body.email,
    })
})

app.listen(port,(error) => {
    if(!error){
        console.log("Server is running on port " + port );
    }
    else{
        console.log("Error: " + error);
    }
})
