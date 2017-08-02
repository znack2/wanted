


function setToken(req, res) {

  var user = req.user;
  user.apn_token = req.body.token;
  user.save(function(err) {
    if (err) { return next(err) }
    return res.json({success: "true"});
  })
  // return res.sendData({}, res)
  // res.status(200).send('privet')
  return helper.sendData({data: 'hello'}, res)
}




function sendNotification(req, res) {

  var user_id = req.params.user_id;
  User.findById(user_id, function(err, user) {
    if (err) { return next(err) }
    var token = user.apn_token;


  });
  // return res.sendData({}, res)
  // res.status(200).send('privet')
  return helper.sendData({data: 'hello'}, res)
}


export default {
  setToken,
  sendNotification,
}


router.post('/register', function(req, res){
  if(req.body && req.body.deviceID && req.body.platform){
    if(req.body.platform === 'ios' || req.body.platform === 'android'){

      {Endpoint Body Here}

    } else{
      res.status(400);
      res.json({
        message: 'Invalid platform'
      });
    }
  } else{
    res.status(400);
    res.json({
      message: 'Invalid parameters'
    });
  }
});