import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, Button } from '@/components/ui';
import { useInView } from '@/hooks/useInView';
import { contactSchema } from '@/lib/validators';
import { siteConfig } from '@/config/site';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiX, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs.config';

const contactMethods = [
    {
        icon: FiMail,
        label: 'Email',
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        gradient: 'from-primary to-secondary',
        bgGradient: 'from-primary/20 to-secondary/20',
    },
    {
        icon: FiPhone,
        label: 'Teléfono',
        value: siteConfig.phone,
        href: `tel:${siteConfig.phone}`,
        gradient: 'from-secondary to-accent-purple',
        bgGradient: 'from-secondary/20 to-accent-purple/20',
    },
    {
        icon: FaWhatsapp,
        label: 'WhatsApp',
        value: 'Chatea conmigo',
        href: siteConfig.social.whatsapp,
        gradient: 'from-[#25D366] to-[#128C7E]',
        bgGradient: 'from-[#25D366]/20 to-[#128C7E]/20',
    },
    {
        icon: FiMapPin,
        label: 'Ubicación',
        value: siteConfig.location,
        href: '#',
        gradient: 'from-accent-pink to-accent',
        bgGradient: 'from-accent-pink/20 to-accent/20',
    },
];

const socialLinks = [
    {
        icon: FaGithub,
        href: siteConfig.social.github,
        label: 'GitHub',
        gradient: 'from-primary to-secondary'
    },
    {
        icon: FaLinkedin,
        href: siteConfig.social.linkedin,
        label: 'LinkedIn',
        gradient: 'from-secondary to-accent-purple'
    },
    {
        icon: FaInstagram,
        href: siteConfig.social.instagram,
        label: 'Instagram',
        gradient: 'from-accent-pink to-accent'
    },
];

export function Contact() {
    const { ref, isInView } = useInView();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            // Verificar que las credenciales de EmailJS estén configuradas
            if (emailjsConfig.serviceId === 'YOUR_SERVICE_ID' ||
                emailjsConfig.templateId === 'YOUR_TEMPLATE_ID' ||
                emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY') {
                console.warn('⚠️ EmailJS no está configurado. Consulta src/config/emailjs.config.js');
                setSubmitMessage('error');
                setIsSubmitting(false);
                return;
            }

            // Enviar email usando EmailJS
            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                message: data.message,
                to_name: siteConfig.name,
            };

            await emailjs.send(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                templateParams,
                emailjsConfig.publicKey
            );

            setSubmitMessage('success');
            reset();
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            setSubmitMessage('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="py-20 bg-bg-elevated relative overflow-hidden">
            <motion.div
                className="absolute top-10 left-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-accent-pink/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 12, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-accent-pink/30 to-accent/30 border-2 border-accent-pink text-accent-pink rounded-xl text-sm font-bold uppercase tracking-wide mb-6 shadow-lg shadow-accent-pink/20"
                    >
                        Hablemos
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        className="text-3xl lg:text-6xl font-bold mb-4 text-white"
                    >
                        Ponte en Contacto
                    </motion.h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ type: 'spring', bounce: 0.4 }}
                    >
                        <h3 className="text-3xl font-bold text-text mb-4">
                            <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">
                                ¿Listo para dar vida a tu idea?
                            </span>
                        </h3>
                        <p className="text-text-muted text-lg mb-10 leading-relaxed">
                            Estoy disponible para proyectos freelance, colaboraciones y oportunidades emocionantes.
                        </p>

                        <div className="space-y-4 mb-10">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.label}
                                    href={method.href}
                                    target={method.href.startsWith('http') ? '_blank' : undefined}
                                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, x: 10 }}
                                    className={`flex items-start gap-5 p-5 rounded-xl bg-gradient-to-r ${method.bgGradient} border-2 border-transparent hover:border-primary hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all shadow-lg`}
                                >
                                    <motion.div
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.gradient} flex items-center justify-center shadow-lg`}
                                        whileHover={{ rotate: 360, scale: 1.15 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <method.icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <div>
                                        <div className="font-bold text-text mb-1 text-lg">{method.label}</div>
                                        <div className="text-text-muted">{method.value}</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="text-sm text-text-muted mb-4 font-semibold uppercase tracking-wide">
                            Sígueme en redes
                        </div>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1, type: 'spring', bounce: 0.5 }}
                                    whileHover={{ scale: 1.3, rotate: 10, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${social.gradient} flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] transition-shadow duration-300`}
                                >
                                    <social.icon className="w-7 h-7 text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ type: 'spring', bounce: 0.4 }}
                    >
                        <Card className="border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-300">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-primary mb-3">
                                        <FiUser className="w-4 h-4" />
                                        Nombre
                                    </label>
                                    <input
                                        {...register('name')}
                                        type="text"
                                        id="name"
                                        className="w-full px-5 py-4 bg-bg border-2 border-border rounded-xl text-text focus:outline-none focus:border-primary transition-all shadow-inner placeholder-text-muted/50"
                                        placeholder="Tu nombre completo"
                                    />
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-2 text-sm text-accent-pink flex items-center gap-1"
                                        >
                                            <FiX className="w-4 h-4" />
                                            {errors.name.message}
                                        </motion.p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-primary mb-3">
                                        <FiMail className="w-4 h-4" />
                                        Email
                                    </label>
                                    <input
                                        {...register('email')}
                                        type="email"
                                        id="email"
                                        className="w-full px-5 py-4 bg-bg border-2 border-border rounded-xl text-text focus:outline-none focus:border-primary transition-all shadow-inner placeholder-text-muted/50"
                                        placeholder="tu@email.com"
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-2 text-sm text-accent-pink flex items-center gap-1"
                                        >
                                            <FiX className="w-4 h-4" />
                                            {errors.email.message}
                                        </motion.p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-primary mb-3">
                                        <FiMessageSquare className="w-4 h-4" />
                                        Mensaje
                                    </label>
                                    <textarea
                                        {...register('message')}
                                        id="message"
                                        rows={6}
                                        className="w-full px-5 py-4 bg-bg border-2 border-border rounded-xl text-text focus:outline-none focus:border-primary transition-all resize-none shadow-inner placeholder-text-muted/50"
                                        placeholder="Cuéntame sobre tu proyecto..."
                                    />
                                    {errors.message && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-2 text-sm text-accent-pink flex items-center gap-1"
                                        >
                                            <FiX className="w-4 h-4" />
                                            {errors.message.message}
                                        </motion.p>
                                    )}
                                </div>

                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full text-lg shadow-2xl shadow-primary/40"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar Mensaje
                                                <FiSend className="w-5 h-5" />
                                            </>
                                        )}
                                    </Button>
                                </motion.div>

                                {submitMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className={`text-center p-4 rounded-xl font-semibold flex items-center justify-center gap-2 ${submitMessage === 'error'
                                            ? 'bg-red-500/20 text-red-400 border-2 border-red-500/50'
                                            : 'bg-green-500/20 text-green-400 border-2 border-green-500/50'
                                            }`}
                                    >
                                        {submitMessage === 'error' ? (
                                            <>
                                                <FiX className="w-5 h-5" />
                                                Hubo un error. Por favor intenta de nuevo.
                                            </>
                                        ) : (
                                            <>
                                                <FiCheck className="w-5 h-5" />
                                                ¡Mensaje enviado exitosamente! Te contactaré pronto.
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
