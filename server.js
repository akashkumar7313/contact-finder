const express = require('express');
const PORT = 4001;
const app = express();
const conDB = require('./config/db');

//Connect DB
conDB();

//Init middleware
app.use(express.json({extended:false}));

//Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/user'));
app.use('/api/contacts', require('./routes/contacts'));


app.get('/', (request, response) => {
    response.send(`<h1>Contact Keeper</h1>`);
});

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
