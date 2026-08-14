"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { sanitizeText, sanitizeEmail, sanitizePhone, sanitizeBudget } from '@/lib/sanitize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faArrowLeft,
    faGlobe,
    faMobileAlt,
    faDesktop,
    faCloud,
    faPlug,
    faCode,
    faCheck,
    faUsers,
    faFileInvoiceDollar,
    faCashRegister,
    faMoneyCheckAlt,
    faBoxOpen,
    faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { useToast } from '@/hooks/use-toast';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const projectTypes = [
    { id: 'website', label: 'Website', icon: faGlobe },
    { id: 'mobile', label: 'Mobile App', icon: faMobileAlt },
    { id: 'desktop', label: 'Desktop App', icon: faDesktop },
    { id: 'cloud', label: 'Cloud System', icon: faCloud },
    { id: 'api', label: 'API Integration', icon: faPlug },
    { id: 'custom', label: 'Custom Software', icon: faCode },
    { id: 'hr', label: 'HR System', icon: faUsers },
    { id: 'accounting', label: 'Accounting System', icon: faFileInvoiceDollar },
    { id: 'pos', label: 'POS System', icon: faCashRegister },
    { id: 'loan', label: 'Loan Management', icon: faMoneyCheckAlt },
    { id: 'inventory', label: 'Inventory Management', icon: faBoxOpen },
    { id: 'crm', label: 'CRM System', icon: faChartLine },
];

const timelines = [
    '1-2 months',
    '2-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
];

export default function Quote() {
    const { toast } = useToast();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        projectType: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        timeline: '',
        description: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        let sanitized = value;
        switch (name) {
            case 'email':     sanitized = sanitizeEmail(value);  break;
            case 'phone':     sanitized = sanitizePhone(value);  break;
            case 'name':
            case 'company':
            case 'description': sanitized = sanitizeText(value); break;
            default:          sanitized = sanitizeText(value);   break;
        }
        setFormData({ ...formData, [name]: sanitized });
    };

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Final sanitization pass before persisting (defence-in-depth)
            const safeData = {
                projectType: sanitizeText(formData.projectType),
                name:        sanitizeText(formData.name),
                email:       sanitizeEmail(formData.email),
                phone:       sanitizePhone(formData.phone),
                company:     sanitizeText(formData.company),
                budget:      sanitizeBudget(formData.budget),
                timeline:    sanitizeText(formData.timeline),
                description: sanitizeText(formData.description),
            };

            // Save to Firestore
            await addDoc(collection(db, 'quotes'), {
                ...safeData,
                status: 'new',
                createdAt: serverTimestamp(),
            });

            toast({
                title: "Quote Request Submitted!",
                description: "We'll review your project and get back to you within 24 hours.",
            });

            // Reset form
            setFormData({
                projectType: '',
                name: '',
                email: '',
                phone: '',
                company: '',
                budget: '',
                timeline: '',
                description: '',
            });
            setStep(1);
        } catch (error) {
            console.error('Error submitting quote:', error);
            toast({
                title: "Submission Failed",
                description: "There was an error submitting your request. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const isStepValid = () => {
        switch (step) {
            case 1:
                return formData.projectType !== '';
            case 2:
                return formData.name !== '' && formData.email !== '';
            case 3:
                return formData.budget !== '' && formData.timeline !== '';
            case 4:
                return formData.description !== '';
            default:
                return false;
        }
    };

    return (
        <div className="bg-[#101828] min-h-screen font-cerebri selection:bg-electric-blue/30">
            {/* Hero Section */}
            <section className="pt-32 pb-16">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">Get a Quote</h1>
                        <p className="text-lg text-white/70 font-light">
                            Tell us about your project and we'll provide you with a detailed
                            quote. It only takes a few minutes!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quote Form */}
            <section className="pb-32">
                <div className="section-container max-w-5xl">
                    {/* Progress Steps */}
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-4">
                            {[1, 2, 3, 4].map((s) => (
                                <div key={s} className="flex items-center">
                                    <div
                                        className={`w-10 h-10 rounded-sm flex items-center justify-center font-medium transition-all duration-300 ${
                                            step >= s
                                            ? 'bg-electric-blue text-white shadow-[0_0_15px_rgba(0,0,255,0.3)]'
                                            : 'bg-[#22222f] text-white/40 border border-white/5'
                                            }`}
                                    >
                                        {step > s ? <FontAwesomeIcon icon={faCheck} className="w-4 h-4" /> : s}
                                    </div>
                                    {s < 4 && (
                                        <div
                                            className={`h-[2px] w-6 sm:w-16 md:w-24 lg:w-32 mx-1 sm:mx-2 transition-all duration-300 ${
                                                step > s ? 'bg-electric-blue' : 'bg-white/10'
                                                }`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm text-white/50 px-1 font-light tracking-wide">
                            <span>Project Type</span>
                            <span className="hidden sm:inline">Your Info</span>
                            <span className="sm:hidden">Info</span>
                            <span>Budget</span>
                            <span>Details</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-[#22222f] p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl">
                        {/* Step 1: Project Type */}
                        {step === 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-light text-white mb-8">What type of project do you need?</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {projectTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, projectType: type.id })}
                                            className={`p-6 rounded-sm border transition-all duration-300 flex flex-col items-center justify-center gap-4 ${
                                                formData.projectType === type.id
                                                ? 'border-electric-blue bg-electric-blue/10 text-electric-blue'
                                                : 'border-white/10 bg-[#101828] text-white/70 hover:border-white/30 hover:text-white'
                                                }`}
                                        >
                                            <FontAwesomeIcon
                                                icon={type.icon}
                                                className={`w-8 h-8 ${formData.projectType === type.id ? 'text-electric-blue' : 'text-white/40 group-hover:text-white/80'}`}
                                            />
                                            <div className="font-light tracking-wide">{type.label}</div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Contact Info */}
                        {step === 2 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-light text-white mb-8">Tell us about yourself</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-light text-gray-500 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-sm border border-white/10 bg-[#101828] text-white focus:outline-none focus:border-electric-blue transition-colors font-light placeholder:text-white/20"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-light text-gray-500 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-sm border border-white/10 bg-[#101828] text-white focus:outline-none focus:border-electric-blue transition-colors font-light placeholder:text-white/20"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-light text-gray-500 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-sm border border-white/10 bg-[#101828] text-white focus:outline-none focus:border-electric-blue transition-colors font-light placeholder:text-white/20"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-light text-gray-500 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-sm border border-white/10 bg-[#101828] text-white focus:outline-none focus:border-electric-blue transition-colors font-light placeholder:text-white/20"
                                            placeholder="Acme Inc."
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Budget & Timeline */}
                        {step === 3 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <h2 className="text-2xl font-light text-white mb-8">Budget & Timeline</h2>
                                <div>
                                    <label className="block text-sm font-light text-white/70 mb-4">
                                        What's your estimated budget? *
                                    </label>
                                    <div className="bg-[#101828] rounded-sm p-6 border border-white/5">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex-1">
                                                <label className="text-[11px] text-white/40 font-medium uppercase tracking-widest mb-2 block">
                                                    Minimum
                                                </label>
                                                <div className="w-full px-4 py-3 rounded-sm border border-white/10 bg-[#22222f] text-white/40 font-light cursor-not-allowed flex items-center gap-1">
                                                    <span>$</span>
                                                    <span>80</span>
                                                </div>
                                            </div>
                                            <div className="text-white/30 pt-6">-</div>
                                            <div className="flex-1">
                                                <label htmlFor="custom_budget" className="text-[11px] text-white/40 font-medium uppercase tracking-widest mb-2 block">
                                                    Maximum
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-light">$</span>
                                                    <input
                                                        type="number"
                                                        id="custom_budget"
                                                        min="80"
                                                        placeholder="Enter amount"
                                                        className="w-full pl-8 pr-4 py-3 rounded-sm border border-white/10 bg-[#22222f] text-white focus:outline-none focus:border-electric-blue font-light placeholder:text-white/20"
                                                        onChange={(e) => {
                                                            const val = e.target.value.replace(/[^0-9]/g, '');
                                                            setFormData({
                                                                ...formData,
                                                                budget: val ? `$80 - $${val}` : ''
                                                            });
                                                        }}
                                                        value={formData.budget.startsWith('$80 - $') ? formData.budget.replace('$80 - $', '') : ''}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-white/40 font-light">
                                            Our services start from $80. Please specify your maximum budget.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-light text-white/70 mb-4">
                                        What's your expected timeline? *
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                        {timelines.map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, timeline: time })}
                                                className={`px-4 py-4 rounded-sm border transition-all duration-300 font-light tracking-wide ${
                                                    formData.timeline === time
                                                    ? 'border-electric-blue bg-electric-blue/10 text-electric-blue'
                                                    : 'border-white/10 bg-[#101828] text-white/70 hover:border-white/30 hover:text-white'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 4: Project Details */}
                        {step === 4 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-light text-white mb-8">Project Details</h2>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-light text-white/70 mb-3">
                                        Describe your project *
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-sm border border-white/10 bg-[#101828] text-white focus:outline-none focus:border-electric-blue transition-colors font-light placeholder:text-white/20 resize-none"
                                        placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                                    ></textarea>
                                </div>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-12 pt-8 border-t border-white/5">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="px-6 py-3 rounded-sm border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-colors flex items-center gap-2 font-light text-sm tracking-wide uppercase"
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className="w-3.5 h-3.5" />
                                    Previous
                                </button>
                            ) : (
                                <div />
                            )}

                            {step < 4 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={!isStepValid()}
                                    className="px-8 py-3 rounded-sm bg-electric-blue text-white hover:opacity-90 transition-opacity flex items-center gap-2 font-semibold text-[13px] tracking-widest uppercase disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    Next
                                    <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={!isStepValid() || isSubmitting}
                                    className="px-8 py-3 rounded-sm bg-electric-blue text-white hover:opacity-90 transition-opacity flex items-center gap-2 font-semibold text-[13px] tracking-widest uppercase disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                                    <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </section >
        </div>
    );
}
