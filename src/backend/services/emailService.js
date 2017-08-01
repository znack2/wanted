//TODO : mailer service


import Promise              from 'bluebird'
import nodemailer           from 'nodemailer'
import { EmailTemplate }    from 'email-templates'
import pathHelper           from '../helpers/pathHelper'


function sendEmail(config) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
      user: 'username@example.com',
      pass: 'userpass'
    }
  });

// setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
  };

// send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}


// const emailTransport = nodemailer.createTransport()

// function sendEmail(emailOptions) {

    // let data = {
    //   token,
    //   siteRootUrl: config.app.rootUrl,
    //   to: email,
    //   from: config.email.fromNoReply
    // }

    // return new Promise<Object>((resolve, reject) => {
    //     emailTransport.sendMail(emailOptions, function (error, info) {
    //         if (error) return Promise.reject(error)
    //
    //         return info
    //     })
    // })
// }

// function sendEmailTemplate(templateName, data, emailData) {
//     return renderTemplate(templateName, data)
//         .then((data) => {
//             emailData.html = data.html
//
//             if (!emailData.subject) emailData.subject = data.subject
//
//             return new Promise((resolve, reject) => {
//                 emailTransport.sendMail(emailData, function (err, info) {
//                     if (err) return reject(err)
//
//                     return resolve(info)
//                 })
//             })
//         })
// }

/*
*  private function
*/
// function renderTemplate(name, data) {
//     let templateDir = pathHelper.getDataRelative('emails', name)
//     let template = new EmailTemplate(templateDir)
//
//     return new Promise<any>((resolve, reject) => {
//         template.render(data, function (err, result) {
//             if (err) reject(err)
//
//             return resolve(result)
//         })
//     })
// }




// var nodemailer = require("nodemailer");
//
// var smtpTransport = nodemailer.createTransport("SMTP",{
//   service: "Gmail",  // sets automatically host, port and connection security settings
//   auth: {
//     user: "email@gmail.com",
//     pass: "gmailPassword"
//   }
// });
//
// const transporter = nodemailer.createTransport({
//   service: 'SendGrid',
//   auth: {
//     user: process.env.SENDGRID_USER,
//     pass: process.env.SENDGRID_PASSWORD
//   }
// });
//
// smtpTransport.sendMail({  //email options
//   from: "Sender Name <email@gmail.com>", // sender address.  Must be the same as authenticated user if using GMail.
//   to: "Receiver Name <receiver@email.com>", // receiver
//   subject: "Emailing with nodemailer", // subject
//   text: "Email Example with nodemailer" // body
// }, function(error, response){  //callback
//   if(error){
//     console.log(error);
//   }else{
//     console.log("Message sent: " + response.message);
//   }
//
//   smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
// });



// setup e-mail data with unicode symbols
// var sendMail = function(data, res){
//   var mailOptions = {
//     from: '"github.io 👥" <'+config.nodemailer.user+'>', // sender address
//     to: ''+config.nodemailer.receiver+'', // list of receivers
//     subject: 'Message from your github.io ✔', // Subject line
//     html: "Hello,<br> You have received a mail from:<br>Name: "+data.Name +"<br>Email: "+ data.Email +"<br>Message: "+ data.Message+"<br>", // plaintext body
//   }
//   transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//       return console.log(error);
//     }
//     else{
//       res.header("Access-Control-Allow-Origin", "*");
//       res.header("Access-Control-Allow-Headers", "X-Requested-With");
//       res.send('success');
//       console.log('Message sent: ' + info.response);
//     }
//   });
// };



// var cfg = require('../../con≈fig'),
//   async = require('async'),
//   _ = require('lodash'),
//   ejs = require('ejs'),
//   fs = require('fs'),
//   logger = require('winston'),
//   templates = {}
// var nodemailer = require('nodemailer'),
//   config = require('./config');
//
//
// exports.mailerStub = function (opts) {
//   console.log('Here are the opts', opts);
// }
//
// exports.sendMail = function (opts) {
//   var mailOpts, smtpTransport;
//
//   console.log ('Creating Transport');
//
//   smtpTransport = nodemailer.createTransport('SMTP', {
//     service: 'Gmail',
//     auth: {
//       user: config.email,
//       pass: config.password
//     }
//   });
//
//   // mailing options
//   mailOpts = {
//     from: opts.from,
//     replyTo: opts.from,
//     to: opts.to,
//     subject: opts.subject,
//     html: opts.body
//   };
//
//   console.log('mailOpts: ', mailOpts);
//
//   console.log('Sending Mail');
//   // Send mail
//   smtpTransport.sendMail(mailOpts, function (error, response) {
//     if (error) {
//       console.log(error);
//     }else {
//       console.log('Message sent: ' + response.message);
//     }
//     console.log('Closing Transport');
//     smtpTransport.close();
//   });
//
// }
//
//
//
//
// module.exports.fillTemplates = function (dir, callback) {
//   if (!_.isEmpty(templates)) return
//   logger.info('Reading email templates from', dir)
//
//   fs.readdir(dir, function (err, files) {
//     if (err) return callback(err);
//
//     async.each(files, function (file, cb) {
//       fs.readFile(dir + file, 'utf-8', function (err, data) {
//         templates[file.replace('.ejs', '')] = data
//         cb.apply(this, arguments)
//       });
//     }, callback);
//   });
// }
//
// module.exports.send = function (templateName, subject, to, data, callback) {
//   var template = templates[templateName]
//   if (!template) return callback('No such template')
//
//   cfg.emails.transport.sendMail({
//     from: cfg.emails.from,
//     subject: subject,
//     to: to,
//     html: ejs.render(template, _.merge(data, {siteUrl: cfg.fullUrl(), _: _}))
//   }, function (error) {
//     error && console.error(error)
//     callback(error ? 'Failed to send email' : null)
//   })
// }










// var secrets = require('../config/secrets');
// var mailer = require('sendgrid')(secrets.sendgrid.api_key);
//
// var service = {};
//
// var applicationName = 'Express Starter';
// var senderAddress = 'Mailing <mailing@starter.com>';
//
// service.sendRequestPasswordEmail = function(email, host, token, done) {
//   var mailOptions = {
//     to: email,
//     from: senderAddress,
//     subject: 'Reset your password on ' + applicationName,
//     text: 'You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n' +
//     'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
//     'http://' + host + '/reset/' + token + '\n\n' +
//     'If you did not request this, please ignore this email and your password will remain unchanged.\n'
//   };
//
//   mailer.send(mailOptions, done);
// };
//
// service.sendPasswordChangeNotificationEmail = function(email, done) {
//   var mailOptions = {
//     to: email,
//     from: senderAddress,
//     subject: 'Your ' + applicationName + ' password has been changed',
//     text: 'Hello,\n\n' +
//     'This is a confirmation that the password for your account ' + email + ' has just been changed.\n'
//   };
//
//   mailer.send(mailOptions, done);
// };
//
// module.exports = service;


export default {
  sendEmail,
  // sendEmailTemplate
}