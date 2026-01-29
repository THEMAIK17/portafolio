import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');
    const [hoveredLink, setHoveredLink] = useState(null);

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

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-bg/90 backdrop-blur-2xl border-b-2 border-primary/30 shadow-[0_10px_40px_rgba(0,0,0,0.3)] shadow-primary/10'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <motion.button
                        onClick={() => scrollToSection('#inicio')}
                        className="text-2xl font-bold relative group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="gradient-text text-glow">Portafolio</span>
                        <motion.span
                            className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.button>

                    <ul className="hidden md:flex items-center gap-1 relative">
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
                                        className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer ${isActive ? 'text-primary' : 'text-text-muted'
                                            }`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="relative z-10">{link.label}</span>

                                        {/* Hover background */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-lg"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredLink === link.href ? 1 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        />

                                        {/* Active/Hover underline */}
                                        {(isActive || hoveredLink === link.href) && (
                                            <motion.div
                                                layoutId={isActive ? "activeSection" : "hoveredSection"}
                                                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] rounded-full shadow-[0_0_10px_currentColor] ${isActive
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

                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/50 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all"
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
                                    <FiX className="w-6 h-6 text-primary" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <FiMenu className="w-6 h-6 text-primary" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-bg/95 backdrop-blur-2xl border-b-2 border-primary/30"
                    >
                        <ul className="container mx-auto px-4 py-4 space-y-2">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.substring(1);

                                return (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.03, duration: 0.2 }}
                                    >
                                        <motion.button
                                            onClick={() => scrollToSection(link.href)}
                                            className={`w-full text-left px-5 py-4 rounded-xl font-semibold transition-all cursor-pointer ${isActive
                                                ? 'bg-gradient-to-r from-primary/30 to-secondary/30 text-primary border-2 border-primary shadow-lg shadow-primary/20'
                                                : 'bg-surface/50 text-text-muted hover:bg-surface hover:text-text border-2 border-transparent hover:border-primary/30'
                                                }`}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {link.label}
                                            {isActive && (
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="ml-auto float-right w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_currentColor]"
                                                />
                                            )}
                                        </motion.button>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
