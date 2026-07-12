import nodemailer from "nodemailer";

export const sendContact = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

   const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
await transporter.verify();
console.log("SMTP connection established");
    // Send inquiry to company emails
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: [
        "samvedgoa@gmail.com",
        "sachin@samvedminerals.com",
        "sammed@samvedminerals.com",
      ],
      subject: "New Contact Form Inquiry",
      html: `
        <h3>New Inquiry Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting SAMVED MINERALS",
      html: `
        <h2>Thank You for Contacting SAMVED MINERALS</h2>

        <p>Dear ${name},</p>

        <p>
          We have received your inquiry successfully.
        </p>

        <p>
          Our team will review your request and contact you shortly.
        </p>

        <p>
          Regards,<br>
          <strong>SAMVED MINERALS</strong>
        </p>
      `,
    });

    res.json({
      success: true,
      message: "Inquiry sent successfully",
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to send inquiry",
    });
  }
};