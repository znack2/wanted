export default (payload = {}) => {
  const { fromJSONFile } = payload
  if (fromJSONFile) {
    return require(fromJSONFile)
  }

  return {
    "app": {
      "appName": "Wanted",
      "isDevLocal": true,
      "logErrors": true,
      "rootUrl": "http://localhost:3500",
      "useAuth": true
    },
  }
}


// let schema = {
//   id: Joi.number(),
//   name: Joi.string().required(),
//   budget: Joi.number().required(),
//   startDate: Joi.date().format(config.format.date),
//   instructorId: Joi.number().required(),
//   id: Joi.number(),
//   firstName: Joi.string().required(),
//   lastName: Joi.string().required(),
//   hireDate: Joi.date().format(config.format.date),
//   courses: Joi.array().items(
//     Joi.object().keys({
//       id: Joi.number().required()
//     })
//   ),
//   officeAssignment: Joi.object().keys({
//     id: Joi.number(),
//     location: Joi.string().allow('')
//   })
// }