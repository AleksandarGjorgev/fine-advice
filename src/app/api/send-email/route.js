import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Nastavi transporter za Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Pošlji e-pošto sebi
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // Pošlji potrditveno sporočilo uporabniku
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me!",
      text: `Hi ${name},\n\nThank you for reaching out to me. I have received your message:\n\n"${message}"\n\nI will get back to you shortly.\n\nBest regards,\nAleksandar Gjorgev`,
    });

    return new Response(JSON.stringify({ message: "Emails sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
