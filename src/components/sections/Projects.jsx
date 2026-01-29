import { motion } from 'framer-motion';
import { Card, Badge } from '@/components/ui';
import { useInView } from '@/hooks/useInView';
import projectsData from '@/data/projects.json';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export function Projects() {
    const { ref, isInView } = useInView();

    return (
        <section id="proyectos" className="py-20 bg-bg-elevated">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary rounded-lg text-sm font-semibold uppercase tracking-wide mb-4">
                        Mi Trabajo
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-text mb-4">
                        Proyectos Destacados
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="group overflow-hidden">
                                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-primary text-bg rounded-lg hover:bg-secondary transition-colors flex items-center gap-2"
                                            >
                                                <FiExternalLink /> Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-surface text-text rounded-lg hover:bg-border transition-colors flex items-center gap-2"
                                            >
                                                <FiGithub /> Code
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
                                <p className="text-text-muted mb-4 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
