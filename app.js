const express = require('express');
const app = express();
 
//route untuk halaman home
app.get('/',(req, res) => {
  res.send('Welcome To Express');
});
 
//route untuk halaman about
app.get('/about',(req, res) => {
  res.send('This is about page');
});
 
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});