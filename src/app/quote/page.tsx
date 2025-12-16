"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
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
    faCheck
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
];

const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {

            // Save to Firestore
            await addDoc(collection(db, 'quotes'), {
                projectType: formData.projectType,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                company: formData.company,
                budget: formData.budget,
                timeline: formData.timeline,

                description: formData.description,
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
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-secondary">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="heading-xl mb-6">Get a Quote</h1>
                        <p className="text-body">
                            Tell us about your project and we'll provide you with a detailed
                            quote. It only takes a few minutes!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quote Form */}
            <section className="section-padding bg-background">
                <div className="section-container max-w-3xl">
                    {/* Progress Steps */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-4">
                            {[1, 2, 3, 4].map((s) => (
                                <div key={s} className="flex items-center">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= s
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-secondary text-muted-foreground'
                                            }`}
                                    >
                                        {step > s ? <FontAwesomeIcon icon={faCheck} className="w-4 h-4" /> : s}
                                    </div>
                                    {s < 4 && (
                                        <div
                                            className={`h-1 w-16 sm:w-24 lg:w-32 mx-2 transition-all duration-300 ${step > s ? 'bg-primary' : 'bg-secondary'
                                                }`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Project Type</span>
                            <span>Your Info</span>
                            <span>Budget</span>
                            <span>Details</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Project Type */}
                        {step === 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="heading-md mb-8">What type of project do you need?</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {projectTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, projectType: type.id })}
                                            className={`p-6 rounded-2xl border-2 transition-all duration-300 ${formData.projectType === type.id
                                                ? 'border-primary bg-primary/10'
                                                : 'border-border hover:border-primary/50'
                                                }`}
                                        >
                                            <FontAwesomeIcon
                                                icon={type.icon}
                                                className={`w-8 h-8 mb-3 ${formData.projectType === type.id ? 'text-primary' : 'text-muted-foreground'
                                                    }`}
                                            />
                                            <div className="font-medium">{type.label}</div>
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
                                <h2 className="heading-md mb-8">Tell us about yourself</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block font-medium mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
                                className="space-y-6"
                            >
                                <h2 className="heading-md mb-8">Budget & Timeline</h2>
                                <div>
                                    <label className="block font-medium mb-4">
                                        What's your estimated budget? *
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {budgetRanges.map((range) => (
                                            <button
                                                key={range}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, budget: range })}
                                                className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 ${formData.budget === range
                                                    ? 'border-primary bg-primary/10'
                                                    : 'border-border hover:border-primary/50'
                                                    }`}
                                            >
                                                {range}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium mb-4">
                                        What's your expected timeline? *
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {timelines.map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, timeline: time })}
                                                className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 ${formData.timeline === time
                                                    ? 'border-primary bg-primary/10'
                                                    : 'border-border hover:border-primary/50'
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
                                <h2 className="heading-md mb-8">Project Details</h2>
                                <div>
                                    <label htmlFor="description" className="block font-medium mb-2">
                                        Describe your project *
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                        placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                                    ></textarea>
                                </div>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-12">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="btn-outline flex items-center gap-2"
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
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
                                    className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Next
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={!isStepValid() || isSubmitting}
                                    className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </section >
        </>
    );
}
