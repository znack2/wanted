// import HTTPStatus from 'http-status'
// import { filteredBody } from '../utils/filteredBody'



// var 2

exports.index = (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.render('account/login', {
    title: 'Login'
  });
};

// var 3

export async function get(req, res, next) {
  try {
    const userData = await User.findById(req.user._id)
    // await user._favorites.posts(req.params.id);
    const postData = await Post.list({ skip: req.query.skip, limit: req.query.limit })

    // const promise = await Promise.all([
    //   // Post.findById(req.params.id).populate('author'),
    // ]);

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
