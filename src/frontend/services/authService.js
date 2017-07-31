export API_ROOT = `https://api.boloid.com/`


export default async (payload = {}) => {
  try {
    const { username, password } = payload
    const result = await fetch(`${ API_ROOT }/login`, {
      method: `POST`,
      body: {
        username,
        password
      }
    })

    return result
  } catch (error) {
    
  }
}


export default async (payload = {}, { edges }) => {
  try {
  } catch (error) {}
}