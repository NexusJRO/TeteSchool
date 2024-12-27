import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Missing email configuration");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: {
        name: name,
        address: process.env.GMAIL_USER,
      },
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nova Mensagem de Contato - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                font-family: 'Helvetica', 'Arial', sans-serif;
                background-color: #f8f9fa;
                border-radius: 8px;
                padding: 25px;
              }
              .header {
                background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                color: white;
                padding: 25px;
                text-align: center;
                border-radius: 6px;
                margin-bottom: 25px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .content {
                background-color: white;
                padding: 30px;
                border-radius: 6px;
                margin-bottom: 25px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                color: #1e40af;
                font-weight: 600;
                margin-bottom: 8px;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 0.5px;
              }
              .value {
                color: #1f2937;
                line-height: 1.6;
                font-size: 14px;
              }
              .message-box {
                background-color: #f0f9ff;
                padding: 20px;
                border-radius: 6px;
                border-left: 4px solid #2563eb;
                margin-top: 8px;
              }
              .footer {
                text-align: center;
                color: #6b7280;
                font-size: 12px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
              }
              .company-name {
                color: #2563eb;
                font-weight: 600;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px; font-weight: 300;">Nova Mensagem de Contato</h1>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">Nome</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">Telefone</div>
                  <div class="value">${phone}</div>
                </div>
                
                <div class="field">
                  <div class="label">Mensagem</div>
                  <div class="message-box">
                    <div class="value">${message}</div>
                  </div>
                </div>
              </div>
              
              <div class="footer">
                <div>Esta mensagem foi enviada através do formulário de contato do website.</div>
                <div class="company-name">Nexus | JR</div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Falha ao enviar email. Por favor, tente novamente." },
      { status: 500 }
    );
  }
}
