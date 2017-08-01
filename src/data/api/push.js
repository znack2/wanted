
export default (payload = {}) => {
  const { fromJSONFile } = payload
  if (fromJSONFile) {
    return require(fromJSONFile)
  }

  return {
    "dev": {
      "ip": 188.226.161.33,
    },
    "prod": {
      "ip": 188.226.161.33,
    },

    "cert": "cert.pem",
    "key":  "key.pem",
    cert: __dirname + '/cert.pem',
    key: __dirname + '/key.pem',
    cert: path.join(__dirname, 'cert.pem'),         // Certificate file path
    key:  path.join(__dirname, 'key.pem'),          // Key file path
    ca: path.join(__dirname, 'aps_development.cer'),// String or Buffer of CA data to use for the TLS connection

    key: fs.readFileSync("my-api.key", "utf8"),
    cert: fs.readFileSync("my-api.cert", "utf8")
    
    
    passphrase: '<PASSWORD>',                             // A passphrase for the Key file
    production:false,
    "passphrase": null,
    "gateway": "gateway.sandbox.push.apple.com",
    "port": 2195,
    "enhanced": true,
    "cacheLength": 5,
    token:
      {
        key: "cert_notifications.p8",
        // Replace keyID and teamID with the values you've previously saved.
        keyId: "YOUR_KEY_ID",
        teamId: "YOUR_TEAM_ID"
      },
    feedBackOptions = {
      "batchFeedback": true,
      "interval": 300
    }
  }
}






