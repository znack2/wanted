import Promise              from 'bluebird'
import nodemailer           from 'nodemailer'
import { EmailTemplate }    from 'email-templates'


import pathHelper           from '../helpers/pathHelper'


const emailTransport = nodemailer.createTransport()



function sendEmail(emailOptions) {

    // let data = {
    //   token,
    //   siteRootUrl: config.app.rootUrl,
    //   to: email,
    //   from: config.email.fromNoReply
    // }

    return new Promise<Object>((resolve, reject) => {
        emailTransport.sendMail(emailOptions, function (error, info) {
            if (error) return Promise.reject(error)

            return info
        })
    })
}

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