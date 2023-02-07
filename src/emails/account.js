const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: '200540107084@darshan.ac.in',
        subject: 'Thanks for joining in!',
        text: `Welcome to this app, ${name}. Let me know how get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: '200540107084@darshan.ac.in',
        subject:'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.` 
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}