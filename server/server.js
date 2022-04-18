const Express = require('express');
const app = Express();
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/router');
const PORT = 3001;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/statemind');
mongoose.connection.on('error', console.error);

app.use(cors());
app.use(morgan());
app.use(Express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
