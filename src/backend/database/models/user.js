import helper               from './_modelHelper'
import bcrypt               from 'bcrypt-nodejs'


export function init(sequelize, DataTypes) {
    let fields = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        budget: {
            type: DataTypes.DECIMAL
        },
        hireDate: {
            type: DataTypes.DATE
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        // createdAt: {
        //   type: DataTypes.DATE,
        //   allowNull: false
        // },
        // updatedAt: {
        //   type: DataTypes.DATE,
        //   allowNull: false
        // },
    }

    let options = {
        classMethods: {
            associate: function (models) {
                // model.belongsToMany(models.Course, {
                //     through: helper.getName('courseInstructor'),
                //     foreignKey: helper.defineForeignKey('instructorId')
                // })
                // model.hasOne(models.OfficeAssignment, {
                //     foreignKey: helper.defineForeignKey('instructorId')
                // })
                // model.belongsTo(models.Department, {
                //   foreignKey: helper.defineForeignKey('departmentId'),
                //   onDelete: 'CASCADE',
                // })
            },
            generateHash(password) {
              return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
            },
        },
        instanceMethods: {
            getFullName() {
                return `${this.lastName}, ${this.firstName}`
            }
        }
    }

    let model = helper.defineModel('user', fields, options, sequelize)

    return model
}

//var 2

// export default (sequelize, DataTypes) => {
//   const TodoItem = sequelize.define('TodoItem', { field:type })
//   TodoItem.associate = (models) => {
//     TodoItem.belongsTo(models.Todo, {
//       foreignKey: 'todoId',
//       onDelete: 'CASCADE',
//     })
//   }
//   return TodoItem
// }
