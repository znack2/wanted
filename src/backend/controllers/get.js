/**
 * GET /login
 * Login page.
 */
async function getDepartment(req, res) {
  try {
    //get requests
    let id = req.query.id;
    let search = req.query.search;
    let sortOrder = req.query.sortOrder;
    let pageNumber = req.query.pageNumber;
    let pageSize = req.query.pageSize;

    // by something
    // let enrollments = await enrollmentRepository.getEnrollmentsByCourseId(courseId);

    let department = await departmentRepository.getDepartmentById(id);
    let result = await studentRepository.getStudents(search, sortOrder, pageNumber, pageSize);

    return helper.sendData({data: department}, res);
    //render template
    // return helper.renderView('home', {}, res);
  } catch (err) {
    helper.sendFailureMessage(err, res);
  }
}

// var 2

exports.index = (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  if (req.isAuthenticated()) {
    return res.redirect('/');
    // res.status(200).send('privet');
  }
  res.render('account/login', {
    title: 'Login'
  });
};

// var 3

export async function get(req, res, next) {
  try {
    const promise = await Promise.all([
      User.findById(req.user._id),
      Post.list({ skip: req.query.skip, limit: req.query.limit }),
      // Post.findById(req.params.id).populate('author'),
    ]);

    // const user = await User.findById(req.user._id);
    // await user._favorites.posts(req.params.id);
    // const favorite = promise[0]._favorites.isPostIsFavorite(req.params.id);
    const postsWithFavorite = promise[1].reduce((arr, post) => {
      const favorite = promise[0]._favorites.isPostIsFavorite(post._id);
      arr.push({
        ...post.toJSON(),
        favorite,
      });

      return arr;
    }, []);

    return res.status(HTTPStatus.OK).json(postsWithFavorite);
    // return res.status(HTTPStatus.OK).json({
    //   ...promise[1].toJSON(),
    //   favorite,
    // })
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}


