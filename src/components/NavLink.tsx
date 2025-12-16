"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface NavLinkProps extends Omit<LinkProps, 'className' | 'style'> {
  children?: React.ReactNode;
  className?: string | ((props: { isActive: boolean }) => string);
  activeClassName?: string;
  href: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    const combinedClassName = typeof className === 'function'
      ? className({ isActive })
      : cn(className, isActive && activeClassName);

    return (
      <Link href={href} ref={ref} className={combinedClassName} {...props} />
    );
  }
);

NavLink.displayName = "NavLink";
