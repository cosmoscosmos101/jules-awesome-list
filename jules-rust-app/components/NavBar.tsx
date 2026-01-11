"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path ? "text-accent-pink" : "text-gray-400 hover:text-accent-cyan";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
            <Link href="/" className="text-xl font-bold tracking-widest text-accent-cyan hover:text-white transition-colors">
                HACK_RUST :: <span className="text-accent-pink">V2</span>
            </Link>

            <div className="flex items-center gap-8 font-mono text-sm uppercase tracking-wider">
                <Link href="/" className={isActive("/")}>
                    Home
                </Link>
                <Link href="/learn" className={isActive("/learn")}>
                    Course
                </Link>
                <Link href="/contact" className={isActive("/contact")}>
                    Contact Us
                </Link>
                <div className="h-4 w-[1px] bg-white/20"></div>
                <Link href="/login" className={isActive("/login")}>
                    Sign In
                </Link>
                <Link
                    href="/login"
                    className="px-4 py-2 border border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white transition-all rounded-sm"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}
