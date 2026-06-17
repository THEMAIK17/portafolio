import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export function Navbar() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');
    const [hoveredLink, setHoveredLink] = useState(null);

    const navLinks = [
        { href: '#inicio', label: t('nav.home') },
        { href: '#sobre-mi', label: t('nav.about') },
        { href: '#experiencia', label: t('nav.experience') },
        { href: '#habilidades', label: t('nav.skills') },
        { href: '#proyectos', label: t('nav.projects') },
        { href: '#contacto', label: t('nav.contact') },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navLinks.map((link) => link.href.substring(1));
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-bg/80 backdrop-blur-2xl border-b border-primary/20 shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">

                    {/* ── Logo ─────────────────────────────────────────── */}
                    <motion.button
                        onClick={() => scrollToSection('#inicio')}
                        className="text-2xl font-bold relative group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="gradient-text text-glow">Portafolio</span>
                        <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.25 }}
                        />
                    </motion.button>

                    {/* ── Desktop nav links ─────────────────────────────── */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, index) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.3 }}
                                    onMouseEnter={() => setHoveredLink(link.href)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                >
                                    <motion.button
                                        onClick={() => scrollToSection(link.href)}
                                        className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                                            isActive ? 'text-primary' : 'text-text-muted hover:text-text'
                                        }`}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        
                                        {/* Active/Hover underline */}
                                        {(isActive || hoveredLink === link.href) && (
                                            <motion.div
                                                layoutId={isActive ? "activeSection" : "hoveredSection"}
                                                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] rounded-full shadow-[0_0_10px_currentColor] ${
                                                    isActive
                                                        ? 'bg-gradient-to-r from-primary via-secondary to-accent w-3/4'
                                                        : 'bg-primary w-1/2'
                                                }`}
                                                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                            />
                                        )}
                                    </motion.button>
                                </motion.li>
                            );
                        })}
                    </ul>

                    {/* ── Right side: lang switcher + mobile button ─────── */}
                    <div className="flex items-center gap-3">
                        {/* Language switcher */}
                        <motion.button
                            onClick={toggleLang}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-bold hover:bg-primary/20 hover:border-primary transition-all cursor-pointer"
                        >
                            <FiGlobe className="w-3.5 h-3.5" />
                            <motion.span
                                key={i18n.language}
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {i18n.language === 'es' ? 'EN' : 'ES'}
                            </motion.span>
                        </motion.button>

                        {/* Mobile hamburger */}
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <FiX className="w-5 h-5 text-primary" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <FiMenu className="w-5 h-5 text-primary" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* ── Mobile menu dropdown ─────────────────────────────────── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="md:hidden bg-bg/95 backdrop-blur-2xl border-b border-primary/20"
                    >
                        <div className="container mx-auto px-6 py-4 space-y-1">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <motion.button
                                        key={link.href}
                                        onClick={() => scrollToSection(link.href)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.04, duration: 0.2 }}
                                        className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer flex items-center justify-between ${
                                            isActive
                                                ? 'bg-primary/15 text-primary border border-primary/30'
                                                : 'text-text-muted hover:bg-surface/60 hover:text-text'
                                        }`}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(0,245,255,0.8)]" />
                                        )}
                                    </motion.button>
                                );
                            })}

                            {/* Lang switcher in mobile */}
                            <button
                                onClick={toggleLang}
                                className="w-full flex items-center gap-2 px-4 py-3 rounded-xl border border-primary/30 text-primary text-sm font-bold hover:bg-primary/10 transition-all cursor-pointer mt-2"
                            >
                                <FiGlobe className="w-4 h-4" />
                                {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
