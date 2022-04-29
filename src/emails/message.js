const sgMail = require("@sendgrid/mail");

const api_key = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(api_key);

const sendMessageEmail = (email, name, message, phone) => {
  const msg = {
    from: "rohinbhat123@gmail.com",
    templateId: process.env.SENDGRID_EMAIL_TEMPLATE_ID,
    personalizations: [
      {
        to: [
          {
            email: "bhatrohin003@gmail.com",
          },
        ],
        dynamic_template_data: {
          name: name,
          email: email,
          message: message,
          phone: phone,
        },
      },
    ],
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.log(error.response.body);
    });
};

module.exports = { sendMessageEmail };
