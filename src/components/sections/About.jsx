import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { useInView } from '@/hooks/useInView';
import { FiCode, FiZap, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

// Simple icon wrapper to render icon components from an array
const Icon = ({ component: Comp, className }) => Comp ? <Comp className={className} /> : null;



export function About() {
    const { t } = useTranslation();
    const { ref, isInView } = useInView({ threshold: 0.1 });

    // Icons are defined locally - they can't be serialized in JSON
    const featureIcons = [FiCode, FiZap, FiUsers];
    const statIcons = [FiCode, FiZap, FiTrendingUp];

    const rawFeatures = t('about.features', { returnObjects: true });
    const features = Array.isArray(rawFeatures) ? rawFeatures : [];

    const rawStats = t('about.stats', { returnObjects: true });
    const stats = Array.isArray(rawStats) ? rawStats : [];

    return (
        <section id="sobre-mi" className="py-20 bg-bg relative overflow-hidden">
            {/* Blobs animados */}
            <motion.div
                className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.1, type: 'spring', bounce: 0.3, duration: 0.3 }}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-primary/30 to-secondary/30 border-2 border-primary text-primary rounded-xl text-sm font-bold uppercase tracking-wide mb-6 shadow-lg shadow-primary/20"
                    >
                        {t('about.badge')}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="text-4xl lg:text-6xl font-bold mb-4 text-white"
                    >
                        {t('about.title')}
                    </motion.h2>
                </motion.div>

                <div className="max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="space-y-6 text-lg text-text-muted leading-relaxed"
                    >
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className="text-center lg:text-left"
                        >
                            {t('about.p1_1')} <span className="text-primary font-semibold">{t('about.p1_2')}</span> {t('about.p1_3')} <span className="text-secondary font-semibold">{t('about.p1_4')}</span>{t('about.p1_5')}<span className="text-accent-pink font-semibold">{t('about.p1_6')}</span>{t('about.p1_7')}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="text-center lg:text-left"
                        >
                            {t('about.p2_1')}<span className="text-primary font-semibold">{t('about.p2_2')}</span>{t('about.p2_3')}<span className="text-secondary font-semibold">{t('about.p2_4')}</span>{t('about.p2_5')}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.6, duration: 0.3 }}
                            className="text-center lg:text-left"
                        >
                            {t('about.p3_1')}<span className="text-accent font-semibold">{t('about.p3_2')}</span>{t('about.p3_3')}<span className="text-primary font-semibold">{t('about.p3_4')}</span>{t('about.p3_5')}<span className="text-secondary font-semibold">{t('about.p3_6')}</span>{t('about.p3_7')}
                        </motion.p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="group"
                        >
                            <Card className={`text-center h-full border-2 ${feature.borderColor} hover:border-primary hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] bg-gradient-to-br from-surface/50 to-bg-elevated/50 transition-all duration-300`}>
                                {/* Animaciones rotatorias */}
                                <div className="relative w-24 h-24 mx-auto mb-6">
                                    <motion.div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20`}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    />
                                    <motion.div
                                        className={`absolute inset-0 -m-2 rounded-2xl border-2 ${feature.borderColor} opacity-30`}
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                    />
                                    <motion.div
                                        className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-xl group-hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-shadow duration-300`}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon component={featureIcons[index]} className="w-12 h-12 text-white" />
                                    </motion.div>
                                </div>

                                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                                    {feature.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed">
                                    {feature.description}
                                </p>

                                <motion.div
                                    className={`h-1 w-0 group-hover:w-full mx-auto mt-6 bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-500`}
                                />
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 0.9 + index * 0.1, type: 'spring', bounce: 0.4, duration: 0.4 }}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            className="text-center group"
                        >
                            <motion.div
                                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-4 shadow-xl group-hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] transition-shadow duration-300"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Icon component={statIcons[index]} className="w-10 h-10 text-white" />
                            </motion.div>

                            <motion.div
                                className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2"
                            >
                                {stat.value}+
                            </motion.div>
                            <div className="text-sm font-semibold text-text-muted uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
