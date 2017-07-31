import apn           from 'apn'
import gcm           from 'node-gcm-service'
// pushNotifier = require("./pushNotifier")

// var apnError = function(err){
//   console.log("APN Error:", err)
// }
//
// options.errorCallback = apnError

function init(config) {
  const feedback = new apn.Feedback(config.feedback)
  const apnProvider = new apn.Provider(config)
  const apnConnection = new apn.Connection(config)

  feedback.on("feedback", function(devices) {
    devices.forEach(function(item) {
      //TODO Do something with item.device and item.time
    })
  })
}

function sendApplePush(deviceToken,params) {
  // try {
  //   // var 2
  //   // pushNotifier.init()
  //   // pushNotifier.process({token:'', message:'Test message', from: 'sender'})
  //   const apnDevice = new apn.Device(deviceToken)
  //   const notification = new apn.Notification()
  //
  //   notification.expiry = Math.floor(Date.now() / 1000) + 24 * 3600 // will expire in 24 hours from now
  //   notification.expiry = Math.floor(Date.now() / 1000) + 3600 // Expires 1 hour from now.
  //   notification.badge = 2
  //   notification.sound = "ping.aiff"
  //   notification.alert = params.message
  //   notification.payload = {'messageFrom': params.from}
  //   notification.topic = YOUR_APP_BUNDLE_ID // Replace this with your app bundle ID:
  //   notification.contentAvailable = true
  //   notification.device = myDevice
  //
  //   if(apnConnection) {
  //     apnConnection.pushNotification(notification, apnDevice)
  //   }
  //   // Send the actual notification
  //   apnProvider.send(notification, deviceToken).then(result => {
  //     // Show the result of the send operation:
  //     console.log(result)
  //     // see documentation for an explanation of result
  //     res.send('sendPush --> result: ' + JSON.stringify(result))
  //     return res.json({success: "true"})
  //   })
  //
  //   // Close the server
  //   apnProvider.shutdown()
  //
  //   process.stdout.write("******* EXECUTED WITHOUT ERRORS************ :")
  // } catch (ex) {
  //   process.stdout.write("ERROR :"+ex)
  // }
}

function sendGooglePush(deviceToken, params) {
  // var message = new gcm.Message({
  //   data : {
  //     title: '{params.title}',
  //     message: '{params.message}'
  //   },
  //   delay_while_idle : false,
  //   dry_run : false
  // })
  //
  // var sender = new gcm.Sender()
  // sender.setAPIKey('{Your API Key Here}')
  // sender.sendMessage(message.toString(), deviceID, true, function(err, data){}
}

export default {
  init,
  sendApplePush,
  sendGooglePush,
}