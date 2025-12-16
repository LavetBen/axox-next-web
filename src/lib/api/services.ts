import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export interface Service {
    id: string;
    title: string;
    description: string;
    iconName: string; // e.g., 'faGlobe'
    gridClass: string;
    featured: boolean;
}

export const fetchServices = async (): Promise<Service[]> => {
    try {
        const servicesCol = collection(db, 'services');
        const serviceSnapshot = await getDocs(servicesCol);
        return serviceSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Service));
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }
};
