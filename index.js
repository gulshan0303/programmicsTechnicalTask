const express = require('express');
const dotenv = require('dotenv').config();
const connectDb = require("./config/dbConnection");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000

//routes path
const userRoutes = require("./routes/userRoutes")
const imagesRoutes = require("./routes/imagesRoutes")

app.use(express.json());
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//api routes
app.use('/api/v1/auth',userRoutes)
app.use('/api/v1/image',imagesRoutes)

app.listen(port,()=>{
    connectDb();
    console.log(`server is running at ${port}`);
})