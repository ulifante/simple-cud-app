const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route.js')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/products", productRoute);




app.get('/', (req, res) => {
    res.send('Hello from node API');
});



mongoose.connect("mongodb+srv://ulimtz1997:Samulimar18!@cluster0.re4v5kp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connection Successful");
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
})
.catch(() => {
    console.log("Connection Failed");
})