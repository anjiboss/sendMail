const nodemailer = require("nodemailer");

const sendMail = (content, cb) => {
  cb();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sgiri1860@gmail.com",
      pass: "santac10211223",
    },
  });

  const { name, mail, phone, msg } = content;
  console.log(`${name} ${mail} ${phone} ${msg}`);

  const mailOptions = {
    from: "an.ji.do.ggy@gmail.com",
    to: "sgiri3724@gmail.com",
    subject: `New Contact from ${name} via Nepali`,
    text: `Name: ${name}\nMail: ${mail}\nPhone Number: ${phone}\nMessage: ${msg}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      cb();
    }
  });
};
module.exports = sendMail;
