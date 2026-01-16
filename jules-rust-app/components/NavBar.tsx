"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCourseProgress } from "@/lib/hooks/use-course-progress";
import AlienAvatar from "@/components/AlienAvatar";

export default function NavBar() {
    const pathname = usePathname();
    const { isLoggedIn, username, mounted, profilePic } = useCourseProgress();

    if (!mounted) return null;

    const isActive = (path: string) => pathname === path ? "text-accent-orange" : "text-gray-400 hover:text-accent-cyan";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
            <Link href="/" className="text-xl font-bold tracking-widest text-accent-cyan hover:text-white transition-colors">
                HACK_RUST :: <span className="text-accent-orange">V2</span>
            </Link>

            <div className="flex items-center gap-8 font-mono text-sm uppercase tracking-wider">
                <Link href="/" className={isActive("/")}>
                    Home
                </Link>
                <Link href="/learn" className={isActive("/learn")}>
                    Course
                </Link>
                <Link href="/contact" className={isActive("/contact")}>
                    Contact
                </Link>
                <Link href="/teacher" className={isActive("/teacher")}>
                    Teacher
                </Link>
                <div className="h-4 w-[1px] bg-white/20"></div>
                {isLoggedIn ? (
                    <div className="flex items-center gap-3 px-4 py-2 border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 transition-all rounded-sm cursor-pointer group">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent-cyan/50 group-hover:border-accent-cyan transition-colors">
                            {profilePic ? (
                                <img src={profilePic} alt={username} className="w-full h-full object-cover" />
                            ) : (
                                <AlienAvatar name={username} size={32} />
                            )}
                        </div>
                        <span className="font-bold hidden md:inline">{username}</span>
                    </div>
                ) : (
                    <Link
                        href="/login"
                        className="px-4 py-2 border border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white transition-all rounded-sm"
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}
