import nodemailer from "nodemailer";

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER, // email
      pass: process.env.PASSWORD, //password
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// Send Email
const EmailSender = ({ name, email, message }) => {
  const options = {
    from: `DenisDev 😼 <${process.env.USER}>`,
    to: process.env.SEND_TO,
    subject: "Message from DenisDev",
    html: `<section style="margin: 0 auto; padding: 7rem; display: grid; align-items: center; justify-content: center ">
    <div style="border: 1px solid blue; width: 30rem; padding: 3rem">
      <div>
        <div style="display: flex; align-items: center; justify-content: center; margin: 0 auto">
          <div>
          <a href="${process.env.CLIENT_URL}">
          🛠</a></div>
        </div>
        <div class="seccion__contenido">
          <p>DenisDev</p>
          <div>
            <p>Name: <b>${name}</b></p>
            <p>Email: <b>${email}</b></p>
            <p>Message: <i>${message}</i></p>
          </div>
        </div>
      </div>
    </div>

  </section>`,
  };
  Email(options);
};
export default EmailSender;
