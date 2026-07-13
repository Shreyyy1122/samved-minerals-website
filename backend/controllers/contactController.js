import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContact = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // ==========================
    // Send inquiry to company
    // ==========================
    const inquiryResult = await resend.emails.send({
      from: "SAMVED MINERALS <sammed@samvedminerals.com>",
      to: [
        "samvedgoa@gmail.com",
        "sachin@samvedminerals.com",
        "sammed@samvedminerals.com",
      ],
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color:#d4a017;">New Inquiry Received</h2>

          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="padding:8px; border:1px solid #ddd;"><strong>Name</strong></td>
              <td style="padding:8px; border:1px solid #ddd;">${name}</td>
            </tr>

            <tr>
              <td style="padding:8px; border:1px solid #ddd;"><strong>Email</strong></td>
              <td style="padding:8px; border:1px solid #ddd;">${email}</td>
            </tr>

            <tr>
              <td style="padding:8px; border:1px solid #ddd;"><strong>Phone</strong></td>
              <td style="padding:8px; border:1px solid #ddd;">${phone || "Not provided"}</td>
            </tr>

            <tr>
              <td style="padding:8px; border:1px solid #ddd;"><strong>Company</strong></td>
              <td style="padding:8px; border:1px solid #ddd;">${company || "Not provided"}</td>
            </tr>

            <tr>
              <td style="padding:8px; border:1px solid #ddd;"><strong>Message</strong></td>
              <td style="padding:8px; border:1px solid #ddd;">${message}</td>
            </tr>
          </table>

          <br />

          <p>
            This inquiry was submitted through the
            <strong>SAMVED MINERALS</strong> website.
          </p>
        </div>
      `,
    });

    console.log("Company Inquiry Email:", inquiryResult);

    // ==========================
    // Send confirmation to customer
    // ==========================
    const customerResult = await resend.emails.send({
      from: "SAMVED MINERALS <sammed@samvedminerals.com>",
      to: email,
      subject: "Thank you for contacting SAMVED MINERALS",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color:#d4a017;">
            Thank You for Contacting SAMVED MINERALS
          </h2>

          <p>Dear ${name},</p>

          <p>
            Thank you for contacting us regarding your requirements.
            We have successfully received your inquiry and our team
            will review it shortly.
          </p>

          <p>
            One of our representatives will get back to you as soon as possible.
          </p>

          <br/>

          <p>
            Regards,<br/>
            <strong>SAMVED MINERALS</strong><br/>
            Pune, Maharashtra, India
          </p>
        </div>
      `,
    });

    console.log("Customer Confirmation Email:", customerResult);

    return res.status(200).json({
      success: true,
      message: "Inquiry sent successfully",
    });
  } catch (error) {
    console.error("Contact Form Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send inquiry",
      error: error.message,
    });
  }
};