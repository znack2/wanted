exports.post = function(req, res, next) {
  req.assert('name', 'Name cannot be blank').notEmpty()
  req.assert('email', 'Email is not valid').isEmail()
  req.assert('message', 'Message cannot be blank').notEmpty()

  var username = req.body.username
  var password = req.body.password
  var sid = req.session.id
  var io = req.app.get('io')

  var errors = req.validationErrors()


  transporter.sendMail(mailOptions, (err) => {
    if (errors) {
      req.flash('errors', { msg: err.message })
      return res.redirect('/contact')
    }
    req.flash('success', { msg: 'Email has been sent successfully. ' })
    res.redirect('/contact')
  })


  //2
  // User.authorize(username, password, function(err, user) {
  Company.create(req.body, function(err, result) {
    if (!err) {
      return res.json(result)
    } else {
      return res.send(err) // 500 error
    }

    if (err) {
      if (err instanceof AuthError) {
        return next(new HttpError(403, err.message))
      } else {
        return next(err)
      }
    }

    req.session.user = user._id

  })


  req.session.destroy(function(err) {
    io.sockets.$emit("session:reload", sid)
    if (err) return next(err)
    res.redirect('/')
  })
}



export async function create(req, res, next) {
  const body = filteredBody(req.body, constants.WHITELIST.users.create)
  // const body = filteredBody(req.body, contants.WHITELIST.posts.update)
  try {
    const user = await User.create(body)
    const post = await User.findById(req.params.id)

    if (post.author.toString() !== req.user._id.toString()) {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED)
    }

    Object.keys(body).forEach(key => {
      post[key] = body[key]
    })
    
    return res.status(HTTPStatus.CREATED).json(user.toAuthJSON())
    // return res.status(HTTPStatus.CREATED).json(await Post.createPost(body, req.user._id))
    // return res.status(HTTPStatus.OK).json(await post.save())
  } catch (err) {
    e.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}








    



