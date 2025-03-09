import nodemailer from "nodemailer";

export default function handler(req, res) {
  console.log(req.body);
  const { businessStructure, industry, turnover, employees, bestTimeToCall, name, phone, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log(transporter);


  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_RECIPIENT,
    subject: "New Form Submission",
    text: `
    Name: ${name}\n
    Phone: ${phone}\n
    Email: ${email}\n
    Business Structure: ${businessStructure}\n
    Industry: ${industry}\n
    Turnover: ${turnover}\n
    Employees: ${employees}\n
    Best Time to Call: ${bestTimeToCall}\n`,
  };

  console.log(mailOptions);
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Email not sent", error: error.toString() });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent" });
    }
  });
}