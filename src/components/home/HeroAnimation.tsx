"use client";

import Lottie from 'lottie-react';
import codeDarkAnimation from '@/assets/code_dark.json';

export const HeroAnimation = () => {
    return (
        <div className="w-full aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden max-w-sm mx-auto lg:max-w-none">
            <Lottie
                animationData={codeDarkAnimation}
                loop={true}
                className="w-full h-full"
            />
        </div>
    );
};
