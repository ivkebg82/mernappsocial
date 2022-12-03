import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js'

//! body parser is package for middleware

const app = express();

dotenv.config()

//? MIDDLEWARE
app.use(bodyParser.json({
    limit: "30mb",
    urlencoded: true
}))
app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}))

//? CONNECTION MONGODB
mongoose.connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(process.env.PORT, () => console.log('listening...'))).catch((error) => console.log(error))

//? ROUTES
app.use('/auth', AuthRoute)