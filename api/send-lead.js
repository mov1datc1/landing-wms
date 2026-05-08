const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { personas, pedidos, control, urgencia, problemas, nombre, empresa, whatsapp, email } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'mail.movidatci.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@movidatci.com',
        pass: process.env.SMTP_PASSWORD || 'DragonDorado2024-',
      },
    });

    const urgenciaMap = {
      'hot': '🔥 Ya nos está costando dinero',
      '1-3': '⏰ Queremos implementar en 1-3 meses',
      'anual': '📅 Estamos evaluando para este año',
      'explorar': '🔍 Solo estoy investigando',
    };

    const controlMap = {
      'excel': '📋 Excel / Papel',
      'propio': '📦 Sistema propio',
      'otro-wms': '💻 Otro WMS',
      'nada': '🚫 Sin control',
    };

    const problemList = (problemas || []).map(p => `<li style="padding: 4px 0; color: #334155;">${p}</li>`).join('');

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0B1628, #1E3A5F); padding: 32px; text-align: center;">
          <h1 style="color: #10B981; margin: 0; font-size: 24px;">🎯 Nuevo Lead WMS 360+</h1>
          <p style="color: #94A3B8; margin: 8px 0 0;">Landing Page — logistica.movidatci.com</p>
        </div>
        
        <div style="padding: 32px;">
          <h2 style="color: #0B1628; font-size: 18px; border-bottom: 2px solid #10B981; padding-bottom: 8px;">📋 Datos de Contacto</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 8px; color: #64748B; width: 140px;">Nombre</td><td style="padding: 8px; font-weight: 600;">${nombre}</td></tr>
            <tr style="background: #f1f5f9;"><td style="padding: 8px; color: #64748B;">Empresa</td><td style="padding: 8px; font-weight: 600;">${empresa}</td></tr>
            <tr><td style="padding: 8px; color: #64748B;">WhatsApp</td><td style="padding: 8px; font-weight: 600;"><a href="https://wa.me/52${(whatsapp || '').replace(/\\D/g, '')}">${whatsapp}</a></td></tr>
            <tr style="background: #f1f5f9;"><td style="padding: 8px; color: #64748B;">Email</td><td style="padding: 8px; font-weight: 600;"><a href="mailto:${email}">${email}</a></td></tr>
          </table>

          <h2 style="color: #0B1628; font-size: 18px; border-bottom: 2px solid #3B82F6; padding-bottom: 8px;">📊 Perfil de Operación</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 8px; color: #64748B; width: 140px;">Personas en almacén</td><td style="padding: 8px; font-weight: 600;">${personas}</td></tr>
            <tr style="background: #f1f5f9;"><td style="padding: 8px; color: #64748B;">Pedidos al mes</td><td style="padding: 8px; font-weight: 600;">${pedidos}</td></tr>
            <tr><td style="padding: 8px; color: #64748B;">Control actual</td><td style="padding: 8px; font-weight: 600;">${controlMap[control] || control}</td></tr>
            <tr style="background: #f1f5f9;"><td style="padding: 8px; color: #64748B;">Urgencia</td><td style="padding: 8px; font-weight: 600;">${urgenciaMap[urgencia] || urgencia}</td></tr>
          </table>

          <h2 style="color: #0B1628; font-size: 18px; border-bottom: 2px solid #EF4444; padding-bottom: 8px;">🔴 Problemas Reportados</h2>
          <ul style="margin: 16px 0; padding-left: 20px;">
            ${problemList || '<li style="color: #94A3B8;">No seleccionó problemas específicos</li>'}
          </ul>
        </div>

        <div style="background: #0B1628; padding: 20px; text-align: center;">
          <p style="color: #64748B; margin: 0; font-size: 12px;">Generado automáticamente desde logistica.movidatci.com</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: '"WMS 360+ Leads" <info@movidatci.com>',
      to: 'Jonathan@movidatci.com, Ricardo@movidatci.com',
      subject: `🎯 Nuevo Lead WMS 360+ — ${nombre} de ${empresa}`,
      html: htmlBody,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Error enviando email', details: error.message });
  }
};
