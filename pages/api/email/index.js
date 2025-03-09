import nodemailer from "nodemailer";

export default function handler(req, res) {
  console.log(req.body);
  res.status(200).json({ message: "Email sent" });
  const { businessStructure, industry, turnover, employees, bestTimeToCall, name, phone, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}