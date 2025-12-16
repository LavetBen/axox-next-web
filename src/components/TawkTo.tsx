"use client";

import { useEffect } from 'react';

export const TawkTo = () => {
    useEffect(() => {
        // @ts-ignore
        var Tawk_API = window.Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/694006f0e13f1e197a0d9900/1jch1m7es';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            if (s0 && s0.parentNode) {
                s0.parentNode.insertBefore(s1, s0);
            }
        })();
    }, []);

    return null;
};
