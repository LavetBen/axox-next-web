"use client";

import Script from 'next/script';

export const TawkTo = () => {
    return (
        <Script
            id="tawk-to-widget"
            strategy="lazyOnload"
            src="https://embed.tawk.to/694006f0e13f1e197a0d9900/1jch1m7es"
            crossOrigin="anonymous"
        />
    );
};
