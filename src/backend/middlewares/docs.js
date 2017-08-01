import pathHelper             from './helpers/pathHelper'

/*
 * setup all html pages here
 * =============================================================================
 */
function init(app,express,config) {
  app.use(express.static( config.path.public ))
  app.use(express.favicon(config.path.favicon))
  // app.use(express.static(pathHelper.getRelative( config.path.public )))
  // app.use(express.static(path.join(__dirname, 'public')));
  // app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')));
  // app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  // app.use(connectAssets({
  //   paths: [path.join(__dirname, 'public/css'), path.join(__dirname, 'public/js')]
  // }));
  // app.use(sass({
  //   src: path.join(__dirname, 'public'),
  //   dest: path.join(__dirname, 'public')
  // }));
  
}

export default {
  init,
}


