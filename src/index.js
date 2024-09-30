const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

// Paths for express configuration
const publicDir = path.join(__dirname, '../public');
console.log(publicDir);

const viewsPath = path.join(__dirname, '../templates/views');
console.log(viewsPath);

app.set('view engine', 'hbs');

app.set('views', viewsPath);
app.use(express.static(publicDir));

// routes
app.get('', (req, res) => {
	res.render('index');
});

app.listen(port, () => {
	console.log(`Sever is up on port ${port}`);
});
