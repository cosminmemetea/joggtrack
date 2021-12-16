const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connect')

dotenv.config();

const app = express();


dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api/v1/running', require('./routes/running_routes'));

const middleware = (req, res, next) => {
    console.log("MiM");
    next();
}
app.use(middleware)

app.get('/', (req,res,next) => {
    res.send('Hello Runner');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});