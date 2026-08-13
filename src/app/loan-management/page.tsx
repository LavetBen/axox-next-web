import type { Metadata } from 'next';
import { LoanManagementPage } from '@/components/pages/LoanManagementPage';

export const metadata: Metadata = {
    title: "Loan Management System",
    description: "End-to-end digital lending platform with modules for products, accounts, disbursements, accounting, and more.",
};

export default function LoanManagement() {
    return <LoanManagementPage />;
}
