require('dotenv').config();
const express = require('express');
const connection = require('./utils/db')
const cors = require('cors')
const app = express();
const errorMiddleware = require('./middlewares/error-middlewares');
const router = require('./router/auth-router')


app.use(express.json())

const corsOption = {
    origin: ['http://localhost:5173'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));

app.use('/auth',router)

app.use(errorMiddleware);

connection();
const port = 4000
app.listen(port, () => {
    console.log(`Listening on ${port}`)
});