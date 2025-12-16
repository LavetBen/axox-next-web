"use client";

import { motion } from 'framer-motion';

export default function TermsOfService() {
    return (
        <section className="pt-32 pb-20 bg-background min-h-screen">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="heading-xl mb-8">Terms of Service</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">2. Services</h2>
                        <p className="mb-4">
                            Axox provides software development and digital solutions. We reserve the right to withdraw or amend our service without notice.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">3. Intellectual Property</h2>
                        <p className="mb-4">
                            The content, features, and functionality of this site are owned by Axox and are protected by international copyright, trademark, and other intellectual property laws.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">4. Termination</h2>
                        <p className="mb-4">
                            We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">5. Governing Law</h2>
                        <p className="mb-4">
                            These Terms shall be governed and construed in accordance with the laws of Zimbabwe, without regard to its conflict of law provisions.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">6. Changes to Terms</h2>
                        <p className="mb-4">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">7. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms, please contact us at info@axox.com.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
