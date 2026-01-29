# Guía de Configuración de EmailJS

Esta guía te ayudará a configurar EmailJS para que el formulario de contacto de tu portafolio envíe correos electrónicos reales.

## 📋 Requisitos Previos

- Una cuenta de correo electrónico (Gmail, Outlook, etc.)
- Aproximadamente 10 minutos para la configuración

---

## 🚀 Pasos de Configuración

### Paso 1: Crear Cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"** (Registrarse)
3. Crea tu cuenta gratuita (puedes usar Google, GitHub o email)

### Paso 2: Conectar tu Servicio de Email

1. Una vez dentro de EmailJS, ve a **"Email Services"** en el menú lateral
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail, Outlook, Yahoo, etc.)
4. Sigue las instrucciones para conectar tu cuenta:
   - Para Gmail: autoriza el acceso a tu cuenta
   - Para otros: ingresa las credenciales SMTP
5. **Guarda el Service ID** que te asigna (ejemplo: `service_abc123`)

### Paso 3: Crear Plantilla de Email

1. Ve a **"Email Templates"** en el menú lateral
2. Haz clic en **"Create New Template"**
3. Configura la plantilla con estos campos:

**Subject (Asunto):**
```
Nuevo mensaje de contacto de {{from_name}}
```

**Body (Cuerpo del email):**
```
Has recibido un nuevo mensaje desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de tu portafolio.
```

4. Haz clic en **"Save"**
5. **Guarda el Template ID** que te asigna (ejemplo: `template_xyz789`)

### Paso 4: Obtener tu Public Key

1. Ve a **"Account"** en el menú lateral
2. En la sección **"API Keys"**, encontrarás tu **Public Key**
3. **Copia tu Public Key** (ejemplo: `user_abc123xyz`)

### Paso 5: Configurar las Credenciales en tu Proyecto

1. Abre el archivo: `src/config/emailjs.config.js`
2. Reemplaza los valores placeholder con tus credenciales reales:

```javascript
export const emailjsConfig = {
    serviceId: 'service_abc123',      // ← Tu Service ID aquí
    templateId: 'template_xyz789',    // ← Tu Template ID aquí
    publicKey: 'user_abc123xyz',      // ← Tu Public Key aquí
};
```

---

## ✅ Verificar que Funcione

1. Guarda el archivo de configuración
2. Recarga tu portafolio en el navegador
3. Ve a la sección de **Contacto**
4. Llena el formulario y haz clic en **"Enviar Mensaje"**
5. Deberías recibir el email en la bandeja de entrada del correo que configuraste

---

## 🔒 Notas de Seguridad

- ✅ Es **seguro** tener estas keys en el código frontend
- ✅ EmailJS tiene protección contra spam integrada
- ✅ El plan gratuito permite hasta **200 emails por mes**
- ✅ Puedes configurar límites adicionales en el dashboard de EmailJS

---

## 🐛 Solución de Problemas

### "Error al enviar el mensaje"
- Verifica que las credenciales estén correctamente configuradas
- Revisa la consola del navegador (F12) para ver mensajes de error detallados
- Asegúrate de que el servicio de email esté activo en EmailJS

### "No recibo los emails"
- Revisa tu carpeta de spam
- Verifica que la plantilla esté guardada correctamente
- Confirma que el servicio de email esté conectado y activo

### Límite de emails alcanzado
- El plan gratuito tiene un límite de 200 emails/mes
- Considera actualizar a un plan de pago si necesitas más

---

## 📚 Recursos Adicionales

- [Documentación oficial de EmailJS](https://www.emailjs.com/docs/)
- [Video tutorial de EmailJS](https://www.youtube.com/watch?v=dgcYOm8n8ME)
- [Preguntas frecuentes](https://www.emailjs.com/docs/faq/)

---

¡Listo! Tu formulario de contacto ahora enviará emails reales. 🎉
