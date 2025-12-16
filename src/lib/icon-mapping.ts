import {
    faGlobe,
    faMobileAlt,
    faDesktop,
    faCloud,
    faPlug,
    faCode,
    faArrowRight,
    faCheck,
    faLaptopCode,
    faServer,
    faRocket
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const iconMap: Record<string, IconDefinition> = {
    faGlobe,
    faMobileAlt,
    faDesktop,
    faCloud,
    faPlug,
    faCode,
    faArrowRight,
    faCheck,
    faLaptopCode,
    faServer,
    faRocket
};

export const getIcon = (iconName: string): IconDefinition => {
    return iconMap[iconName] || faCode; // Default to faCode if not found
};
