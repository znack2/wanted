module.exports = {
    server: {
            host: '0.0.0.0',
            port: 3000
    },
    nodemailer: {
        user: 'roy.dajshi@gmail.com',
        clientId: '58755763990-2e72ujpe368s7id8svohb70dbo8puuqg.apps.googleusercontent.com',
        clientSecret: '01sNNvu7wxzfZBOzhFMKeUYO',
        refreshToken: '1/bZcG0TXeFcceRwSXoMqO41d6TlWilwHRt25akbKMgBEMEudVrK5jSpoR30zcRFq6',
        accessToken: 'ya29.CjHeAuHnFZL-fd16SYwKRLr7mP8B7tEqZp5dzhIch5yJaZGN1XX39oEd-qD6SKPPK8cF',
        receiver: 'sonipandey.71@gmail.com'
    }
    /*  */
  mailgun: {
    user: process.env.MAILGUN_USER || 'postmaster@sandbox697fcddc09814c6b83718b9fd5d4e5dc.mailgun.org',
    password: process.env.MAILGUN_PASSWORD || '29eldds1uri6'
  },

  mandrill: {
    user: process.env.MANDRILL_USER || 'hackathonstarterdemo',
    password: process.env.MANDRILL_PASSWORD || 'E1K950_ydLR4mHw12a0ldA'
  },

  sendgrid: {
    api_key: process.env.SENDGRID_APIKEY || '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'
  },

};
