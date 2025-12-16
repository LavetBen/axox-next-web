"use client";

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <section className="pt-32 pb-20 bg-background min-h-screen">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="heading-xl mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">1. Information We Collect</h2>
                        <p className="mb-4">
                            We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">2. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">3. Information Sharing</h2>
                        <p className="mb-4">
                            We do not share your personal information with third parties except as described in this policy or with your consent.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">4. Data Security</h2>
                        <p className="mb-4">
                            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">5. Cookies</h2>
                        <p className="mb-4">
                            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">6. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at info@axox.com.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
