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

export default {
  sendEmail,
  // sendEmailTemplate
}