import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Solo activar cuando entra en vista, no desactivar cuando sale
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px',
                ...options
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options.threshold, options.rootMargin]);

    return { ref, isInView };
}
