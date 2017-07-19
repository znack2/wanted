async function saveDepartment(req, res) {
  try {
    let data = req.body.department;

    let schema = {
      id: Joi.number(),
      name: Joi.string().required(),
      budget: Joi.number().required(),
      startDate: Joi.date().format(config.format.date),
      instructorId: Joi.number().required()
    };

    //example 2

    // let schema = {
    //   id: Joi.number(),
    //   firstName: Joi.string().required(),
    //   lastName: Joi.string().required(),
    //   hireDate: Joi.date().format(config.format.date),
    //   courses: Joi.array().items(
    //     Joi.object().keys({
    //       id: Joi.number().required()
    //     })
    //   ),
    //   officeAssignment: Joi.object().keys({
    //     id: Joi.number(),
    //     location: Joi.string().allow('')
    //   })
    // };

    let result = null;

    let department = await helper.loadSchema(data, schema);

    if (department.id) {
      result = await departmentRepository.updateDepartment(department);
    } else {
      result = await departmentRepository.addDepartment(department);
    }

    // await officeAssignmentRepository.saveOfficeAssignment(instructor.officeAssignment, result.id);

    department = await departmentRepository.getDepartmentById(result.id);

    return helper.sendData({data: department}, res);
  } catch (err) {
    helper.sendFailureMessage(err, res);
  }
}


// var 2

// export async function create(req, res, next) {
//   const body = filteredBody(req.body, contants.WHITELIST.posts.create);
//   try {
//     return res
//       .status(HTTPStatus.CREATED)
//       .json(await Post.createPost(body, req.user._id));
//   } catch (err) {
//     err.status = HTTPStatus.BAD_REQUEST;
//     return next(err);
//   }
// }


exports.create = (req, res) => {
  Company.create(req.body, function(err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err); // 500 error
    }
  });
};


export async function create(req, res, next) {
  const body = filteredBody(req.body, constants.WHITELIST.users.create);
  try {
    const user = await User.create(body);
    return res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
  } catch (e) {
    e.status = HTTPStatus.BAD_REQUEST;
    return next(e);
  }
}

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.create = (req, res) => {
  req.assert('name', 'Name cannot be blank').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('message', 'Message cannot be blank').notEmpty();

  var errors = req.validationErrors();

  const mailOptions = {
    to: 'your@email.com',
    from: `${req.body.name} <${req.body.email}>`,
    subject: 'Contact Form | Hackathon Starter',
    text: req.body.message
  };

  transporter.sendMail(mailOptions, (err) => {
    if (errors) {
      req.flash('errors', { msg: err.message });
      return res.redirect('/contact');
    }
    req.flash('success', { msg: 'Email has been sent successfully. ' });
    res.redirect('/contact');
  });
};






export async function updatePost(req, res, next) {
  const body = filteredBody(req.body, contants.WHITELIST.posts.update);
  try {
    const post = await Post.findById(req.params.id);

    if (post.author.toString() !== req.user._id.toString()) {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }

    Object.keys(body).forEach(key => {
      post[key] = body[key];
    });

    return res.status(HTTPStatus.OK).json(await post.save());
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}


//
// exports.post = function(req, res, next) {
//   var username = req.body.username;
//   var password = req.body.password;
//   var sid = req.session.id;
//   var io = req.app.get('io');
//
//   User.authorize(username, password, function(err, user) {
//     if (err) {
//       if (err instanceof AuthError) {
//         return next(new HttpError(403, err.message));
//       } else {
//         return next(err);
//       }
//     }
//
//     req.session.user = user._id;
//     res.send({});
//
//   });
//
//   req.session.destroy(function(err) {
//     io.sockets.$emit("session:reload", sid);
//     if (err) return next(err);
//     res.redirect('/');
//   });
// };
//
//
