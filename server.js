const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then(() => console.log('DB connection successful!'));

// Server Connection
const port = 8000;
const server = app.listen(port, () => {
    console.log("App running .......... ")
})