import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group cursor-pointer',
    {
        variants: {
            variant: {
                primary: 'bg-gradient-to-r from-primary via-secondary to-accent text-bg hover:shadow-[0_0_40px_rgba(0,245,255,0.6)] hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 hover:scale-105',
                secondary: 'bg-surface border-2 border-primary text-text hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:-translate-y-1 hover:border-secondary hover:scale-105',
                outline: 'border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-[0_0_25px_rgba(0,245,255,0.3)] hover:-translate-y-1 hover:border-secondary hover:text-secondary hover:scale-105',
                ghost: 'hover:bg-primary/10 text-text hover:text-primary hover:scale-105',
            },
            size: {
                sm: 'px-4 py-2 text-sm gap-2',
                md: 'px-6 py-3 text-base gap-2',
                lg: 'px-8 py-4 text-lg gap-3',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

export function Button({ className, variant, size, children, ...props }) {
    return (
        <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
            {children}
        </button>
    );
}
