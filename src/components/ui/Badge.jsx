import { cn } from '@/lib/utils';

export function Badge({ className, children, variant = 'default', ...props }) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold transition-colors',
                variant === 'default' && 'bg-bg border border-primary/30 text-primary',
                variant === 'primary' && 'bg-gradient-to-r from-primary to-secondary text-bg',
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
