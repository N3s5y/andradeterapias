import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const handleEmailTest: RequestHandler = async (req, res) => {
  try {
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'temp-password-needs-config') {
      return res.status(400).json({
        success: false,
        message: 'Configuração de e-mail necessária. Configure EMAIL_USER e EMAIL_PASS.'
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Test connection
    await transporter.verify();

    // Send test email
    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'estudiomecurio@gmail.com',
      subject: 'Teste de Configuração - Andrade Terapias',
      html: `
        <h2>Teste de E-mail</h2>
        <p>Este é um e-mail de teste para verificar se a configuração está funcionando corretamente.</p>
        <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        <hr>
        <p><em>Se você recebeu este e-mail, a configuração está funcionando perfeitamente!</em></p>
      `
    };

    await transporter.sendMail(testMailOptions);

    res.json({ 
      success: true, 
      message: 'E-mail de teste enviado com sucesso! Verifique a caixa de entrada de estudiomecurio@gmail.com' 
    });

  } catch (error) {
    console.error('Email test error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Erro ao testar configuração de e-mail. Verifique as credenciais e tente novamente.'
    });
  }
};
