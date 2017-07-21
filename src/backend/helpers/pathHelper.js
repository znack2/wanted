import path                 from 'path'
import { toArray }          from 'lodash'

let rootPath              = path.join(__dirname, '../../..')
let defaultDataPath       = path.join(rootPath, 'data')


function getRelativePath() {

    let args = toArray(arguments)

    args.unshift(rootPath)

    return path.join.apply(this, args)
}

function getDataRelativePath() {

    let args = toArray(arguments)

    args.unshift(getDataPath())

    return path.join.apply(this, args)
}

/*
 *  private function
 */
function getDataPath() {

    if (process.env['NODE_DATA_DIR']) {
        return process.env['NODE_DATA_DIR']
    }

    return defaultDataPath
}


export default {
  path,
  getRelative: getRelativePath,
  getDataRelative: getDataRelativePath
}
