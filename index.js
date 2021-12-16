const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connect')

dotEnv.config();

const app = express();


dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const middleware = (req, res, next) => {
    console.log("MiM");
    next();
}
app.use(middleware)

app.get('/', (req,res,next) => {
    res.send('HelloWekc');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});