"use client"; // Client component to use pathname hook if needed, or keeping it consistent

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
    const pathname = usePathname();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", pathname);
    }, [pathname]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
                <h2 className="heading-md mb-4">Page Not Found</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link href="/" className="btn-primary">
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
