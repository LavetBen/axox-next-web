import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
}

export interface PricingCategory {
    id: string;
    label: string;
    iconName: string;
    tiers: PricingTier[];
}

export const fetchPricingPlans = async (): Promise<PricingCategory[]> => {
    try {
        const pricingCol = collection(db, 'pricing');
        const pricingSnapshot = await getDocs(pricingCol);
        return pricingSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PricingCategory));
    } catch (error) {
        console.error("Error fetching pricing plans:", error);
        return [];
    }
};
