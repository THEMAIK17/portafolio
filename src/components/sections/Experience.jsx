import { motion } from 'framer-motion';
import { Card, Badge } from '@/components/ui';
import { useInView } from '@/hooks/useInView';
import experienceData from '@/data/experience.json';
import { FiBriefcase, FiAward, FiMapPin, FiCalendar, FiHome } from 'react-icons/fi';

export function Experience() {
    const { ref, isInView } = useInView();
    const workExperience = experienceData.filter((item) => item.type === 'work');
    const education = experienceData.filter((item) => item.type === 'education');

    return (
        <section id="experiencia" className="py-20 bg-bg-elevated relative overflow-hidden">
            <motion.div
                className="absolute top-20 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent-pink/10 rounded-full blur-[150px]"
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
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-secondary/30 to-accent-purple/30 border-2 border-secondary text-secondary rounded-xl text-sm font-bold uppercase tracking-wide mb-6 shadow-lg shadow-secondary/20"
                    >
                        Mi Trayectoria
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        className="text-3xl lg:text-6xl font-bold mb-4 text-white"
                    >
                        Experiencia & Educación
                    </motion.h2>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-16">
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            className="text-3xl font-bold mb-10 flex items-center gap-4"
                        >
                            <motion.div
                                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <FiBriefcase className="w-7 h-7 text-white" />
                            </motion.div>
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Experiencia Profesional
                            </span>
                        </motion.h3>

                        <div className="relative pl-8 md:pl-10 space-y-10">
                            <motion.div
                                className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent-purple rounded-full"
                                initial={{ scaleY: 0, originY: 0 }}
                                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                                transition={{ duration: 1.5, ease: 'easeOut' }}
                            />

                            {workExperience.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                                    transition={{ delay: index * 0.2, type: 'spring', bounce: 0.4 }}
                                    className="relative"
                                >
                                    <motion.div
                                        className="absolute -left-[35px] md:-left-[43px] top-4 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-bg-elevated shadow-lg shadow-primary/50"
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            boxShadow: [
                                                '0 0 20px rgba(0, 245, 255, 0.5)',
                                                '0 0 40px rgba(0, 245, 255, 0.8)',
                                                '0 0 20px rgba(0, 245, 255, 0.5)',
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                    />

                                    <motion.div whileHover={{ scale: 1.03, x: 10 }}>
                                        <Card className="border-2 border-primary/30 hover:border-primary hover:shadow-2xl hover:shadow-primary/30">
                                            <div className="flex flex-wrap gap-3 mb-4">
                                                <motion.span
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-bg rounded-lg text-sm font-bold shadow-lg"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <FiCalendar className="w-4 h-4" />
                                                    {exp.period}
                                                </motion.span>
                                            </div>
                                            <h4 className="text-2xl font-bold text-text mb-2">{exp.position}</h4>
                                            <p className="text-primary font-semibold mb-4 text-lg flex items-center gap-2">
                                                <FiHome className="w-5 h-5" />
                                                {exp.company}
                                                <span className="text-text-muted">•</span>
                                                <FiMapPin className="w-4 h-4" />
                                                {exp.location}
                                            </p>
                                            <p className="text-text-muted mb-4 leading-relaxed">{exp.description}</p>
                                            {exp.technologies && (
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech, i) => (
                                                        <motion.div
                                                            key={tech}
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                                            transition={{ delay: index * 0.2 + i * 0.05 }}
                                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                                        >
                                                            <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50">
                                                                {tech}
                                                            </Badge>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl font-bold mb-10 flex items-center gap-4"
                        >
                            <motion.div
                                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center shadow-xl"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <FiAward className="w-7 h-7 text-white" />
                            </motion.div>
                            <span className="bg-gradient-to-r from-accent-pink to-accent-purple bg-clip-text text-transparent">
                                Educación
                            </span>
                        </motion.h3>

                        <div className="relative pl-8 md:pl-10 space-y-10">
                            <motion.div
                                className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent-pink via-accent-purple to-accent rounded-full"
                                initial={{ scaleY: 0, originY: 0 }}
                                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                            />

                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                                    transition={{ delay: 0.5 + index * 0.2, type: 'spring', bounce: 0.4 }}
                                    className="relative"
                                >
                                    <motion.div
                                        className="absolute -left-[35px] md:-left-[43px] top-4 w-6 h-6 rounded-full bg-gradient-to-r from-accent-pink to-accent-purple border-4 border-bg-elevated shadow-lg shadow-accent-pink/50"
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            boxShadow: [
                                                '0 0 20px rgba(255, 20, 147, 0.5)',
                                                '0 0 40px rgba(255, 20, 147, 0.8)',
                                                '0 0 20px rgba(255, 20, 147, 0.5)',
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                    />

                                    <motion.div whileHover={{ scale: 1.03, x: 10 }}>
                                        <Card className="border-2 border-accent-pink/30 hover:border-accent-pink hover:shadow-2xl hover:shadow-accent-pink/30">
                                            <motion.span
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-pink to-accent-purple text-white rounded-lg text-sm font-bold mb-3 shadow-lg"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <FiCalendar className="w-4 h-4" />
                                                {edu.period}
                                            </motion.span>
                                            <h4 className="text-2xl font-bold text-text mb-2">{edu.position}</h4>
                                            <p className="text-accent-pink font-semibold mb-4 text-lg flex items-center gap-2">
                                                <FiAward className="w-5 h-5" />
                                                {edu.company}
                                                <span className="text-text-muted">•</span>
                                                <FiMapPin className="w-4 h-4" />
                                                {edu.location}
                                            </p>
                                            <p className="text-text-muted leading-relaxed">{edu.description}</p>
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
