
/**
 * POST /account/delete
 * Delete user account.
 */



exports.delete = (req, res, next) => {
  User.remove({ _id: req.user.id }, (err) => {
    if (err) { return next(err); }
    req.logout();
    req.flash('info', { msg: 'Your account has been deleted.' });
    res.redirect('/');
  });

  // Company.removeById({_id: req.params.id}, function(err, result) {
  //   if (!err) {
  //     return res.json(result);
  //   } else {
  //     console.log(err);
  //     return res.send(err); // 500 error
  //   }
  // });



  // var id = req.params.id;
  // db.collection('table').remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
  //   if (!err) {
  //     return res.json(result);
  //   } else {
  //     return res.send(Boom.badImplementation(err)); // 500 error
  //   }
  // });
};



export async function deletePost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id);

    if (post.author.toString() !== req.user._id.toString()) {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
    await post.remove();
    return res.sendStatus(HTTPStatus.OK);
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

async function deleteDepartment(req, res) {
  try {
    let id = req.body.id;

    await departmentRepository.deleteDepartment(id);

    //example 2

    // await officeAssignmentRepository.deleteOfficeAssignmentByInstructorId(id);
    // await instructorRepository.deleteInstructor(id);

    return helper.sendData({}, res);
  } catch (err) {
    helper.sendFailureMessage(err, res);
  }
}