import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const transport = nodemailer.createTransport({
    name: "mail.pnvflooringstore.com",
    host: "mail.pnvflooringstore.com", // Host específico do Bluehost
    port: 465, // Porta segura
    secure: true, // Conexão SSL/TLS
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // i need this for sending via Bluehost
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${email} vindo do Newsletter PNV Flooring`,
    text: `${email}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({
      message: "Thank you very much for subscribing to our Newsletter",
    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
