// import createLog            from './createLog'
import textValue            from '../helpers/textValueHelper'


function getErrorMessage(error,config) {
    if (!error) return ''

    if (error.isAppError) {
        if (!error.message) {
            let message = textValue.error(error.type, error.code, error.data)

            if (!message) message = `Cannot find error message for type:${error.type} code:${error.code}`

            error.message = message
        }

        if (error.uiShow) return error.message
    }

    if (config.app.isDevLocal) {
        return error.message || error
    }

    return 'Server Error'
}

export default {
  // logError,
  getErrorMessage
}
