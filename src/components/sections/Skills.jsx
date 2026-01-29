import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { useInView } from '@/hooks/useInView';
import skillsData from '@/data/skills.json';
import { FiMonitor, FiServer, FiLayers, FiTool, FiTrendingUp } from 'react-icons/fi';

const categoryConfig = {
    frontend: {
        icon: FiMonitor,
        title: 'Frontend',
        subtitle: 'Desarrollo de interfaces',
        gradient: 'from-primary to-secondary',
        bgGradient: 'from-primary/20 to-secondary/20',
        borderColor: 'border-primary',
    },
    backend: {
        icon: FiServer,
        title: 'Backend',
        subtitle: 'Desarrollo del servidor',
        gradient: 'from-secondary to-accent-purple',
        bgGradient: 'from-secondary/20 to-accent-purple/20',
        borderColor: 'border-secondary',
    },
    design: {
        icon: FiLayers,
        title: 'Soft Skills',
        subtitle: 'Habilidades Humanas',
        gradient: 'from-accent-pink to-accent',
        bgGradient: 'from-accent-pink/20 to-accent/20',
        borderColor: 'border-accent-pink',
    },
    tools: {
        icon: FiTool,
        title: 'Herramientas',
        subtitle: 'DevOps & Productividad',
        gradient: 'from-accent-purple to-accent',
        bgGradient: 'from-accent-purple/20 to-accent/20',
        borderColor: 'border-accent-purple',
    },
};

export function Skills() {
    const { ref, isInView } = useInView();

    return (
        <section id="habilidades" className="py-20 bg-bg relative overflow-hidden">
            {/* Blobs decorativos */}
            <motion.div
                className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 left-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, 40, 0],
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
                        transition={{ type: 'spring', bounce: 0.3, duration: 0.4 }}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-primary/30 to-secondary/30 border-2 border-primary text-primary rounded-xl text-sm font-bold uppercase tracking-wide mb-6 shadow-lg shadow-primary/20"
                    >
                        Mis Capacidades
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="text-3xl lg:text-6xl font-bold mb-4 text-white"
                    >
                        Habilidades Técnicas
                    </motion.h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => {
                        const config = categoryConfig[category] || categoryConfig.tools;
                        const avgLevel = Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length);

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ delay: categoryIndex * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                            >
                                <Card className={`h-full border-2 ${config.borderColor} bg-gradient-to-br ${config.bgGradient} hover:border-primary hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-300`}>
                                    {/* Título blanco sin gradiente animado */}
                                    <div className="text-center mb-6 pb-4 border-b border-border/30">
                                        <motion.div
                                            className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-xl`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <config.icon className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <h3 className="text-2xl lg:text-3xl font-black mb-2 text-white uppercase tracking-tight">
                                            {config.title}
                                        </h3>

                                        <p className="text-xs text-text-muted font-semibold uppercase tracking-wide">
                                            {config.subtitle}
                                        </p>
                                    </div>

                                    {/* Estadísticas */}
                                    <div className="flex items-center justify-between mb-6 px-2">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${config.gradient}`} />
                                            <span className="text-sm text-text-muted font-medium">
                                                {skills.length} tecnologías
                                            </span>
                                        </div>

                                        <div className={`flex items-center gap-1 bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                                            <FiTrendingUp className="w-4 h-4" />
                                            <span className="text-xl font-bold">{avgLevel}%</span>
                                        </div>
                                    </div>

                                    {/* Lista de habilidades */}
                                    <ul className="space-y-4">
                                        {skills.map((skill, index) => (
                                            <motion.li
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.3 }}
                                            >
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-semibold text-text">{skill.name}</span>
                                                    <span className={`text-sm font-bold px-2 py-0.5 rounded-md bg-gradient-to-r ${config.gradient} text-white shadow-md`}>
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-bg/50 rounded-full overflow-hidden border border-border/30">
                                                    <motion.div
                                                        className={`h-full bg-gradient-to-r ${config.gradient} rounded-full relative overflow-hidden`}
                                                        initial={{ width: 0 }}
                                                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                        transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.2, ease: 'easeOut' }}
                                                    >
                                                        {/* Shimmer effect */}
                                                        <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                            animate={{ x: ['-100%', '200%'] }}
                                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                                        />
                                                    </motion.div>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
