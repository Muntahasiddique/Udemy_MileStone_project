const express = require('express');
const authroutes = require('./routes/auth.routes');

const app = express();
app.use(authroutes);
app.listen(3000);