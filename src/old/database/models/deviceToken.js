
import helper               from '../../helpers/modelHelper'
import bcrypt               from 'bcrypt-nodejs'


export function init(sequelize, DataTypes) {
    let fields = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        apn_token: {
          type: String
        }


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
