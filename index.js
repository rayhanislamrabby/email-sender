const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_SENDER_PASS,
  },
});

// test rout

app.get("/send-email", async (req, res) => {
  const emailInfo = {
    name: "Rabby",
    user: "abirahmedrabby@gmail.com",
    projectInfo: "Hello World",
  };

  const emailObj = {
    from: `"Example Team" ${process.env.EMAIL}`,
    to: emailInfo.user,
    subject: "Test Email ",
    html: `
<p> Thank you </p>
<br/>
<br/>

<p>If you any issue , please replay to this email address</p>

<button> Click Here </button>
<p>Info : ${emailInfo.projectInfo}<p/>

`,
  };

  try {
    const info = await transporter.sendMail(emailObj);

    console.log("email send", info.messageId);
    res.send({result: 'succss'})
  } catch (err) {
    console.log("email send error");
    res.send({result: 'email failed'})
  }
});

app.listen(port, () => {

  console.log(`Server running on http://localhost:${port}`);

});
