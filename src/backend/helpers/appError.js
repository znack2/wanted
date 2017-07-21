import { isString, merge } from 'lodash'


//AppError
export default (payload, option = 500) => {

  const { data } = payload
  const { args } = option

  Error.captureStackTrace(this, this.constructor)

  //signature type, code, options
  if (isString(args[0]) && isString(args[1])) {
    this.type = args[0]
    this.code = args[1]
    merge(this, args[2])
  }
  //signature message, options
  else if (isString(args[0])) {
    this.message = args[0]
    merge(this, args[1])
  } else {
    throw new Error('Unsupported AppError signature')
  }
}

