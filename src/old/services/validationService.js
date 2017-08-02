import Joi                      from 'joi'



// export const validation = {
//   create: {
//     body: {
//       title: Joi.string().min(3).required(),
//       text: Joi.string().required(),
//       email: Joi.string().email().required(),
//       password: Joi.string()
//         .min(6)
//         .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
//         .required(),
//       username: Joi.string().min(3).max(20).required(),
//     },
//   },
//   update: {
//     body: {
//       title: Joi.string().min(3),
//       text: Joi.string(),
//     },
//   },
// }



function isValidEmail(email) {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  return re.test(email)
}

function isValidPassword(password) {
  let message = ''
  const minMaxLength = /^[\s\S]{8,16}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    hasNumber = /[0-9]/,
    hasSpecial = /[ !'#$%&'()*+,\-./:<=>?@[\\\]^_`{|}~]/

  if (!minMaxLength.test(password)) {
    message = textValue.warning('auth', 'password_length')
    return message
  }

  //NOTE add additional password rules if required

  return message
}

export default {
  isValidEmail,
  isValidPassword
}