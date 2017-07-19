import faker                from 'faker'

function seedUsers(db, usersData) {
  return Promise.resolve(usersData)
    .map((user) => {

      //var 2
      // user.startDate = parseDate(user.startDate)

      return db.models.User.create(user)
        // .then((courseModel) => {
        //   courseModel.setInstructors(course.instructorsIds)
        // })
    })
}

// function parseDate(dateStr) {
//   return moment(dateStr, config.format.date).toDate()
// }






// var 2

// import User from '../models/user.model'
//
// export async function userSeed(count) {
//   const users = []
//
//   Array.from({ length: count || 10 }).map(() => {
//     const fakeUser = {
//       name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: 'password1',
//     }
//     return users.push(fakeUser)
//   })
//
//   return await User.insertMany(users)
// }
//
// export async function deleteUserSeed() {
//   try {
//     return await User.remove()
//   } catch (e) {
//     return e
//   }
// }


// var 3

// module.exports = {
//   up: function (queryInterface, Sequelize) {
//     // return User.findOrCreate({
//     //   where: { email: 'john@doe.com' },
//     //   defaults: {
//     //     name: 'John Doe'
//     //   }
//     // })
//     return queryInterface.bulkInsert({tableName: 'Todos'},
//       [
//         {
//           title: "Aphrodite",
//         },
//         {
//           title: "B",
//         },
//         {
//           title: "C",
//         },
//         {
//           title: "D",
//         },
//       ],
//       {})
//   },
//
//   down: function (queryInterface, Sequelize) {
//     return queryInterface.bulkDelete({tableName: 'Todos'}, null, {})
//   }
// }
