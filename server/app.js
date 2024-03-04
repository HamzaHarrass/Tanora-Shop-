const express = require("express");
require("./Config/DB")();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
const authRouter = require("./Routers/AuthontificationRouter");
const produitRouter = require("./Routers/ProduitRouter");


const cors = require('cors');
const { verifyToken } = require("./Middleware/auth");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('dotenv').config();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.get('/', (req, res) => {
    res.status(200).json({ message: "ALL IS GOOD" })
});
app.use("/auth", authRouter);
app.use('/produits', produitRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//---------------- Public Images --------------------//
app.use(express.static('uploads'))