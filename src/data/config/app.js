export default (payload = {}) => {
  const { fromJSONFile } = payload
  if (fromJSONFile) {
    return require(fromJSONFile)
  }

  return {
    "app": {
      "appName": "Wanted",
      "isDevLocal": true,
      "logErrors": true,
      "rootUrl": "http://localhost:3500"
    },
    "web": {
      "port": 3500,
      "sessionSecret": "secret_value_!?!"
    },
    "email": {
      "fromNoReply": "noreply@znack.com"
    },
    "format": {
      "date": "MM/DD/YYYY",
      "year": "YYYY",
      "currencySymbol": "$"
    }
  }
}