const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);

app.use(morgan('dev'));

app.use(require('./rutas/ciudad'));

app.listen(app.get('port'), () => {
  console.log('Servidor web escuchando en el puerto 4000');
});