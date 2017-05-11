import express from 'express';
import path  from 'path';
import favicon from 'serve-favicon';
import logger  from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser  from 'body-parser';
import webpack from 'webpack';
import config from '../config/webpack.dev';
import appRoutes from './routes/app';

const app = express();
const compiler = webpack(config);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


/*app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
*/
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('_index');
});

module.exports = app;
