import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, botcheck } = body;

    // Spam protection: if the hidden field is filled, return success without sending
    if (botcheck) {
      return NextResponse.json({ success: true });
    }

    // Configure Nodemailer securely using your .env.local variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Structure the email payload
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mirabdullahnadim@gmail.com',
      replyTo: email, 
      subject: `New Portfolio Lead: ${name}`,
      text: `You have a new message from your portfolio!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}