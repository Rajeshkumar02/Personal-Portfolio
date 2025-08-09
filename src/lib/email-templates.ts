export interface EmailTemplateData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const getAdminEmailTemplate = (data: EmailTemplateData) => {
  const { name, email, subject, message } = data;

  return {
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Portfolio Contact Message</h2>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #555; margin-bottom: 5px;">Contact Information:</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
          <p>This message was sent from your portfolio contact form.</p>
          <p>Sent at: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `,
    text: `
Portfolio Contact Message

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent at: ${new Date().toLocaleString()}
    `,
  };
};

export const getAutoReplyTemplate = (data: EmailTemplateData) => {
  const { name, subject, message } = data;

  return {
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Thank You for Your Message!</h2>
        
        <p style="color: #555; line-height: 1.6;">Hi ${name},</p>
        
        <p style="color: #555; line-height: 1.6;">
          Thank you for reaching out through my portfolio contact form. I've received your message about "<strong>${subject}</strong>" and I appreciate you taking the time to contact me.
        </p>
        
        <p style="color: #555; line-height: 1.6;">
          I'll review your message and get back to you as soon as possible, typically within 24-48 hours.
        </p>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff; margin: 20px 0;">
          <h3 style="color: #555; margin-top: 0;">Your Message:</h3>
          <p style="color: #666; margin-bottom: 0;">${message.replace(
            /\n/g,
            "<br>"
          )}</p>
        </div>
        
        <p style="color: #555; line-height: 1.6;">
          If you have any urgent questions or need to add anything to your message, feel free to reply to this email.
        </p>
        
        <p style="color: #555; line-height: 1.6;">
          Best regards,<br>
          <strong>Rajeshkumar S</strong>
        </p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
          <p>This is an automated response. Please do not reply to this email if you don't need to add anything.</p>
        </div>
      </div>
    `,
    text: `
Thank You for Your Message!

Hi ${name},

Thank you for reaching out through my portfolio contact form. I've received your message about "${subject}" and I appreciate you taking the time to contact me.

I'll review your message and get back to you as soon as possible, typically within 24-48 hours.

Your Message:
${message}

If you have any urgent questions or need to add anything to your message, feel free to reply to this email.

Best regards,
Rajeshkumar S

This is an automated response.
    `,
  };
};
