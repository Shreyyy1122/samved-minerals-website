import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContact = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Send inquiry to company
    await resend.emails.send({
      from: "onboarding@resend.dev",
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
    await resend.emails.send({
      from: "SAMVED MINERALS <sammed@samvedminerals.com>",
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
          Regards,<br/>
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