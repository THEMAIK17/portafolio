import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Card({ className, children, hover = true, ...props }) {
    return (
        <motion.div
            className={cn(
                'rounded-xl bg-surface border-2 border-border p-6 transition-all duration-300 relative overflow-hidden group',
                'before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:via-transparent before:to-secondary/5 before:opacity-0 before:transition-opacity before:duration-300',
                hover && [
                    'hover:before:opacity-100',
                    'hover:-translate-y-2',
                    'hover:border-primary',
                    'hover:shadow-[0_0_30px_rgba(0,245,255,0.3),0_10px_40px_rgba(0,0,0,0.3)]',
                    'hover:scale-[1.02]',
                ],
                className
            )}
            {...props}
        >
            {/* Top right accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 via-secondary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary opacity-50 blur-sm" style={{ padding: '2px', margin: '-2px' }} />
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
