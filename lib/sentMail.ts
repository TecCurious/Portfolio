"use server"

import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  const { name, email, message } = formData;

  console.log(formData);
  // Validate inputs
  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Missing required fields'
    };
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10),
      secure: process.env.SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USERNAME_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log("tranasporter", transporter);

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h3 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Submission
          </h3>
          <div style="margin: 20px 0; background: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
              ${message}
            </p>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message: 'Email sent successfully'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email'
    };
  }
};

export default sendContactEmail;