const express = require("express");
require("./Config/DB")();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
const authRouter = require("./Routers/AuthontificationRouter");
const produitRouter = require("./Routers/ProduitRouter");
// const clientRouter = require('./routes/clientRouter');
// const paiementRouter = require('./routes/paiementRouter');

const cors = require('cors');
const { verifyToken } = require("./Middleware/auth");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('dotenv').config();

app.use(cors({
    origin: "http://localhost:5170"
}));

app.get('/', (req, res) => {
    res.status(200).json({ message: "ALL IS GOOD" })
});

// prefix | suffix
app.use("/auth", authRouter);
app.use('/produits', verifyToken, produitRouter);
// app.use('/api', clientRouter);
// app.use('/api', paiementRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});