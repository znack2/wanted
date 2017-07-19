import pathHelper           from './pathHelper'
import _                    from 'lodash'
import template             from 'es6-template-strings'
import fs                   from 'fs'

const textValuesPath  = pathHelper.getDataRelative('text', 'textValues.json')
const textValuesInfo  = JSON.parse(fs.readFileSync(textValuesPath, 'utf8'))

function byKey(key, data) {
    let val = _.get(textValuesInfo, key)

    if (!val) return

    let result = data ? template(val, data) : val

    return result
}

function error(type, code, data) {
    let key = `errors.${type}.${code}`

    return byKey(key, data)
}

function info(type, code, data) {
    let key = `info.${type}.${code}`

    return byKey(key, data)
}

function warning(type, code, data) {
    let key = `warning.${type}.${code}`

    return byKey(key, data)
}

export default {
  byKey,
  error,
  info,
  warning
}