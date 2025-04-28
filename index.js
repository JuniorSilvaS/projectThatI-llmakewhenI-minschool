require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

//home of the site
app.get('/', (req, res) => {
   res.status(200).json({ msg: "welcome to the api! " });
});

app.listen(port, () => {
   console.log(`the server is running on the port ${port}`);
});