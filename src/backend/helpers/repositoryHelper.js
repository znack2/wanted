import Promise            from 'bluebird'

//stubData
export default (payload, option = 500) => {

  const { data } = payload
  const { delay } = option

  return Promise.delay(delay)
    .then(() => {
      return data
    })
}

