import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function formatDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long'
    });
}

export function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
