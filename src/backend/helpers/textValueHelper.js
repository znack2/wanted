import { get }              from 'lodash'
import template             from 'es6-template-strings'
import fs                   from 'fs'


import filename             from '../../data/text/messages'
import pathHelper           from './pathHelper'



// const textValuesPath  = pathHelper.getDataRelative('text','textValues.json')
// const textValuesInfo  = JSON.parse(fs.readFileSync(result, 'utf8'))


function byKey(key, data) {
   console.log('********start*******')
    const file = filename()


  console.log('***************')
  console.log(file)
  console.log('***************')

    let val = get(file, key)
    // let val = get(textValuesInfo, key)

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
