const express = require('express')
///database
const mongoose = require('mongoose')


/// env requires special path, because file is in root directory
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })


const app = express()

app.use(express.json())

/// app routes
const blogRoutes = require('./routes/routes')

app.use('/api/routes', blogRoutes)

/// connection to database

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    ///app port, first database connection, then listener is active
    app.listen(process.env.SERVER_PORT, () => {
        console.log("Server listening on port", process.env.SERVER_PORT)
    })
})
.catch((error) => {
    console.log(error)
})


