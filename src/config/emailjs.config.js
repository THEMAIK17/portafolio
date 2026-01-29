// Configuración de EmailJS
// Para obtener estas credenciales, sigue estos pasos:
// 1. Crea una cuenta gratis en https://www.emailjs.com/
// 2. Ve a "Email Services" y conecta tu servicio de email (Gmail, Outlook, etc.)
// 3. Ve a "Email Templates" y crea una plantilla con estos campos:
//    - {{from_name}} - Nombre del remitente
//    - {{from_email}} - Email del remitente  
//    - {{message}} - Mensaje del remitente
// 4. Ve a "Account" para obtener tu Public Key
// 5. Reemplaza los valores abajo con tus credenciales reales

export const emailjsConfig = {
    // Tu Service ID (ejemplo: 'service_abc123')
    serviceId: 'YOUR_SERVICE_ID',

    // Tu Template ID (ejemplo: 'template_xyz789')
    templateId: 'YOUR_TEMPLATE_ID',

    // Tu Public Key (ejemplo: 'user_abc123xyz')
    publicKey: 'YOUR_PUBLIC_KEY',
};

// Nota de seguridad:
// Estas keys son públicas y es seguro que estén en el código del frontend
// EmailJS tiene protección contra spam y límites de uso
