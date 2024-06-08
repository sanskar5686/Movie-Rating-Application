const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors(
    {
      origin:["https://deploy-mern-1whq.versel.app"],
        methods:["POST","GET"],
        credentials: true
    }
));
mongoose
    .connect('mongodb://0.0.0.0:27017/review_app')
    .then(() => {
        console.log('db is connected!')
    })
    .catch((ex) => {
        console.log('db connection failed: ', ex)
    })
    const PORT = 8000;
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
