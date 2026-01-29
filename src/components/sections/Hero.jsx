import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { siteConfig } from '@/config/site';
import { FiDownload, FiArrowDown, FiMail } from 'react-icons/fi';

export function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-primary opacity-25 blur-[120px]"
                    style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                    animate={{
                        x: [0, 60, -40, 0],
                        y: [0, -80, 50, 0],
                        scale: [1, 1.3, 0.8, 1],
                        rotate: [0, 120, 240, 360],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                    className="absolute bottom-[-150px] right-[-150px] w-[700px] h-[700px] bg-secondary opacity-25 blur-[120px]"
                    animate={{
                        x: [0, -50, 70, 0],
                        y: [0, 60, -50, 0],
                        scale: [1, 0.8, 1.2, 1],
                        rotate: [0, -120, -240, -360],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                    className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-accent-purple opacity-20 blur-[100px]"
                    animate={{
                        x: [0, 40, -30, 0],
                        y: [0, -60, 40, 0],
                        scale: [1, 1.15, 0.9, 1],
                        rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
                        className="text-center lg:text-left"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-lg text-primary font-semibold mb-4"
                        >
                            Hola, soy
                        </motion.p>

                        <motion.h1
                            className="text-4xl lg:text-7xl font-bold mb-6"
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.4 }}
                        >
                            <span className="text-white text-glow">
                                {siteConfig.name}
                            </span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-xl lg:text-3xl font-bold text-text mb-6"
                        >
                            <span className="text-white">
                                Developer Junior Full-Stack
                            </span>
                            <br />
                            <span className="text-text-muted">& Ingeniero Mecatrónico</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-lg text-text-muted mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Transformo ideas en soluciones tecnológicas eficientes.
                            Con pensamiento analítico y enfoque en la resolución de problemas, creo aplicaciones con código robusto.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.div whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="shadow-lg shadow-primary/30 border-2 border-white"
                                >
                                    Ver Proyectos
                                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                        →
                                    </motion.span>
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="shadow-lg shadow-secondary/30"
                                >
                                    <FiMail className="w-5 h-5" />
                                    Contáctame
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="shadow-lg shadow-accent/20"
                                    onClick={() => window.open('/assets/downloads/CV-ARMANDO DURAN (2).pdf', '_blank')}
                                >
                                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                        <FiDownload className="w-5 h-5" />
                                    </motion.div>
                                    Descargar CV
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100, rotate: -15 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            <motion.div
                                className="absolute inset-0 -m-4 rounded-full border-2 border-primary opacity-40"
                                animate={{
                                    scale: [1, 1.15, 1],
                                    rotate: [0, 180, 360],
                                    opacity: [0.4, 0.6, 0.4],
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            />
                            <motion.div
                                className="absolute inset-0 -m-8 rounded-full border-2 border-secondary opacity-30"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, -180, -360],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                            />
                            <motion.div
                                className="absolute inset-0 -m-12 rounded-full border-2 border-accent-purple opacity-20"
                                animate={{
                                    scale: [1, 1.25, 1],
                                    rotate: [0, 360, 720],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                            />

                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent-purple rounded-full blur-[100px] opacity-50"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 0.7, 0.5],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />

                            <motion.div
                                className="relative w-full aspect-square"
                                whileHover={{ scale: 1.08, rotate: 3 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent-purple p-1">
                                    <img
                                        src="/assets/images/maikol duran 1.png"
                                        alt="Maikol Duran - Desarrollador Full Stack"
                                        className="w-full h-full rounded-full object-cover"
                                        style={{
                                            boxShadow: '0 0 60px rgba(0, 245, 255, 0.5), 0 0 120px rgba(37, 99, 235, 0.3)',
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 15, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 0.5 },
                    y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                }}
                onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="flex flex-col items-center gap-2">
                    <div className="w-7 h-12 border-2 border-primary rounded-full relative overflow-hidden shadow-lg shadow-primary/50">
                        <motion.div
                            className="w-2 h-3 bg-primary rounded-full absolute top-3 left-1/2 -translate-x-1/2"
                            animate={{ y: [0, 24, 0], opacity: [1, 0, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <FiArrowDown className="text-primary w-6 h-6" />
                    <span className="text-xs text-primary/70 font-semibold">Scroll</span>
                </div>
            </motion.div>
        </section>
    );
}
