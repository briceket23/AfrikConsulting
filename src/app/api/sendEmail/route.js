import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { username, email, messageVal, subject } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtpro.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: "yvesnyemb7@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD, // it is a google app password for a specific gmail account (how to create app password for email account)
      },
    });

    const mailOption = {
      from: "yvesnyemb7@gmail.com",
      to: "yvesnyemb7@gmail.com",
      subject: "AfrikConsult mailing",
      html: `
        <h3>Hello AfrikConsult</h3>
        <li> title: ${subject}</li>
        <li> name: ${username}</li>
        <li> email: ${email}</li>
        <li> message: ${messageVal}</li> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
