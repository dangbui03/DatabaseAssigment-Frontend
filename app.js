require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

const port = 8080

const corsOptions = require('./src/configs/corsOptions')
const credentials = require('./src/middleware/credentials')
const errorHandler = require('./src/middleware/errorHandler')
const { logger } = require('./src/middleware/logEvents')

app.use(logger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

mysqldb = require('./src/configs/db').connection;
app.use('/api/v2', require('./src/routes/index'));

// Root route handler
app.get("/", (req, res) => {
    res.send("Hello World! It's a test server");
  }); 

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
})
