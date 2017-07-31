  jwt     = require('express-jwt'),
  quoter  = require('./quoter');
import ç{ authLocal }                 from '../services/auth';
import { authJwt }                   from '../services/auth';

// # seed
if (isDev || isTest) {
  routes.use('/seeds', SeedRoutes);
}

routes.use(logErrorService);

// XXX: This should be a database of users :).
var users = [{
  id: 1,
  username: 'gonto',
  password: 'gonto'
}];

// Validate access_token
var jwtCheck = jwt({
  secret: config.secret,
  audience: config.audience,
  issuer: config.issuer
});

// Check for scope
function requireScope(scope) {
  return function (req, res, next) {
    var has_scopes = req.user.scope === scope;
    if (!has_scopes) {
      res.sendStatus(401);
      return;
    }
    next();
  };
}

function createIdToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

function createAccessToken() {
  return jwt.sign({
    iss: config.issuer,
    aud: config.audience,
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    scope: 'full_access',
    sub: "lalaland|gonto",
    jti: genJti(), // unique identifier for the token
    alg: 'HS256'
  }, config.secret);
}

// Generate Unique Identifier for the access token
function genJti() {
  let jti = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i++) {
    jti += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return jti;
}

function getUserScheme(req) {

  var username;
  var type;
  var userSearch = {};

  // The POST contains a username and not an email
  if(req.body.username) {
    username = req.body.username;
    type = 'username';
    userSearch = { username: username };
  }
  // The POST contains an email and not an username
  else if(req.body.email) {
    username = req.body.email;
    type = 'email';
    userSearch = { email: username };
  }

  return {
    username: username,
    type: type,
    userSearch: userSearch
  }
}

app.use('/api/protected', jwtCheck, requireScope('full_access'));

app.get('/api/protected/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});

app.get('/api/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});

app.all('*', (req, res, next) =>
  next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true)),
);

//   app.get('/api', (req, res) => res.status(200).send({
//     message: 'Welcome to the Todos API!',
//   }))

//   app.post('/api/todos', todosController.create)
//   app.get('/api/todos', todosController.list)
//   app.get('/api/todos/:todoId', todosController.retrieve)
//   app.put('/api/todos/:todoId', todosController.update)
//   app.delete('/api/todos/:todoId', todosController.destroy)

//   app.post('/api/todos/:todoId/items', todoItemsController.create)
//   app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update)
//   app.delete(
//     '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
//   )
//   app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
//     message: 'Method Not Allowed',
//   }))


routes.get(
  '/:id',
  authJwt,
  PostController.getById
);

routes.post(
  '/',
  authJwt,
  validate(PostController.validation.create),
  PostController.create,
);

routes.patch(
  '/:id',
  authJwt,
  validate(PostController.validation.update),
  PostController.updatePost,
);

routes.delete('/:id', authJwt, PostController.deletePost);

/**
 * Favorites
 */
routes.post('/:id/favorite', authJwt, PostController.favoritePost);




routes.post(
  '/signup',
  validate(UserController.validation.create),
  UserController.create,
);

routes.post(
  '/login',
  validate(AuthenticationController.validation.login),
  authLocal,
  AuthenticationController.login,
);

routes.post(
  '/create',
  function(req, res) {
    models.User.create({
      username: req.body.username
    }).then(function() {
      res.redirect('/');
    });
  });

routes.get(
  '/:user_id/destroy',
  function(req, res) {
    models.User.destroy({
      where: {
        id: req.params.user_id
      }
    }).then(function() {
      res.redirect('/');
    });
  });

routes.post(
  '/:user_id/tasks/create',
  function (req, res) {
    models.Task.create({
      title: req.body.title,
      UserId: req.params.user_id
    }).then(function() {
      res.redirect('/');
    });
  });

routes.get(
  '/:user_id/tasks/:task_id/destroy',
  function (req, res) {
    models.Task.destroy({
      where: {
        id: req.params.task_id
      }
    }).then(function() {
      res.redirect('/');
    });
  });

router.get(
  '/',
  function(req, res) {
    models.User.findAll({
      include: [ models.Task ]
    }).then(function(users) {
      res.render('index', {
        title: 'Sequelize: Express Example',
        users: users
      });
    });
  });




app.post('/users', function(req, res) {

  var userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  if (_.find(users, userScheme.userSearch)) {
    return res.status(400).send("A user with that username already exists");
  }

  var profile = _.pick(req.body, userScheme.type, 'password', 'extra');
  profile.id = _.max(users, 'id').id + 1;

  users.push(profile);

  res.status(201).send({
    id_token: createIdToken(profile),
    access_token: createAccessToken()
  });
});

app.post('/sessions/create', function(req, res) {

  var userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  var user = _.find(users, userScheme.userSearch);

  if (!user) {
    return res.status(401).send("The username or password don't match");
  }

  if (user.password !== req.body.password) {
    return res.status(401).send("The username or password don't match");
  }

  res.status(201).send({
    id_token: createIdToken(user),
    access_token: createAccessToken()
  });
});




/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});
