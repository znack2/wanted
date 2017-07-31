
//TODO: express middlewares

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n');
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.logger('dev'));
app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(express.methodOverride());
app.use(express.cookieParser(cfg.sessionSecret));
app.use(expressStatusMonitor());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(expressValidator());
app.use(flash());
app.use((req, res, next) => {
  if (req.path === '/api/upload') {
    next();
  } else {
    lusca.csrf()(req, res, next);
  }
});
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  // After successful login, redirect back to the intended page
  if (!req.user &&
      req.path !== '/login' &&
      req.path !== '/signup' &&
      !req.path.match(/^\/auth/) &&
      !req.path.match(/\./)) {
    req.session.returnTo = req.path;
  } else if (req.user &&
      req.path == '/account') {
    req.session.returnTo = req.path;
  }
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Error Handler.
 */
app.use(errorHandler());


app.use(function(req, res) {
    res.status(404).render('404',{ selectedTheme: config.theme});
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
router.use(logger('dev'));



app.use('/', apolloServer({
  schema : Schema,
  mocks : Mocks
  graphql: true
  pretty : true
}));

// app.use('/graphql', graphqlHTTP() => ({
//   schema,
//   graphql: true
//   pretty : true
// })));



app.use(morgan('dev'));
app.use('/api',apiRouter);

app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status || 500)
  res.send(`Internal server error`)
});

app.route('/api/items').get(function(req,res){
  res.status(200).json(items);
  // res.render('index.hbs',{
  //year:new Date()->getFullYear()
  //});
  // res.end('...');
});




// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
router.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/*Create database*/
if(isThere.sync('./lib/database/') === false){
    fs.mkdirSync('./lib/database/');
}

//Socket.io Server
remoteControl.remoteControl();

//Scheduler
scheduler.schedule();

// Open App socket
if (config.port == "" || config.port == undefined ){
    var defaultPort = app.get('port');
    logger.warn('First run, Setup running on localhost:',{port: defaultPort});
    server.listen(parseInt(defaultPort));
    var url = 'http://localhost:'+defaultPort;
    open(url);

} else{
    var message = "MediacenterJS listening on port:" + config.port + "\n";
    logger.info(message);
    server.listen(parseInt(config.port));
}
