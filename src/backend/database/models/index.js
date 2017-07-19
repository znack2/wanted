import { forEach,upperFirst,keys } from 'lodash'
import Sequelize              from 'sequelize'


const models = [
    require('./user'),
    require('./profileOwner'),
    require('./profileMaster'),
    require('./service'),
    require('./address'),
    require('./animal'),
    require('./media'),
    require('./event')
]

function initModels(sequelize) {
    let result = {}

    forEach(models, modelInit => {
       let model = modelInit.init(sequelize, Sequelize)
        result[upperFirst(model.name)] = model
    })

    forEach(keys(result), modelName => {
        if (result[modelName].associate) {
            result[modelName].associate(result)
        }
    })

    return result
}

export default {
  init: initModels
}