import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

// Validation schema for appointment form data
const appointmentSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  preferredDate: z.string().min(1, "Data preferida é obrigatória"),
  message: z.string().optional(),
});

export const handleAppointment: RequestHandler = async (req, res) => {
  try {
    // Validate the request body
    const validatedData = appointmentSchema.parse(req.body);

    // Create transporter using Gmail SMTP
    // Note: In production, use environment variables for credentials
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@andradeterapias.com',
      to: 'estudiomecurio@gmail.com',
      subject: 'Nova Solicitação de Agendamento - Andrade Terapias',
      html: `
        <h2>Nova Solicitação de Agendamento</h2>
        <p><strong>Nome:</strong> ${validatedData.name}</p>
        <p><strong>E-mail:</strong> ${validatedData.email}</p>
        <p><strong>Telefone:</strong> ${validatedData.phone}</p>
        <p><strong>Data Preferida:</strong> ${validatedData.preferredDate}</p>
        ${validatedData.message ? `<p><strong>Mensagem:</strong> ${validatedData.message}</p>` : ''}
        <hr>
        <p><em>Esta mensagem foi enviada através do formulário de agendamento do site Andrade Terapias.</em></p>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);

    res.json({ 
      success: true, 
      message: 'Solicitação de agendamento enviada com sucesso!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Check if it's a validation error
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Dados inválidos',
        errors: error.errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor. Tente novamente mais tarde.'
    });
  }
};
