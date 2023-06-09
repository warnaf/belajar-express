const express = require('express');
const cors = require('cors');
const moment = require('moment');
const fileUpload = require('express-fileupload');

const PORT = 5000;
const DOMAIN = '127.0.0.1';
const app = express();

const UsersRouter = require('./components/users/usersRouter');
//middleware

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

//routing
app.use('/api/user', UsersRouter);

app.listen(PORT, DOMAIN, () => {
  console.log(`Server berjalan pada ${DOMAIN} dengan port ${PORT}`);
});
