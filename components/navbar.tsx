"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginModal from "./auth/LoginModal";
import SignupModal from "./auth/SignUpModal";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

    return (
        <>
            <header className="w-full pt-4 md:pt-12 pb-3">
                <div className="container mx-auto px-4">
                    {/* Left: logo */}
                    <div className="flex items-center justify-between gap-4 pb-4">
                        <Link href="/">
                            <div className="flex items-center gap-2">
                                <div className="h-12">
                                    <Image src="/assets/images/logo.png" alt="Pr3cio" width={100} height={100} />
                                </div>
                            </div>
                        </Link>

                        {/* heading */}

                        <h1 className="text-center uppercase hidden sm:block">
                            <span className="font-light text-[40px] leading-[80%] ">Play What Moves You</span>
                            <br />
                            <span className="font-bold text-[60px] leading-[80%]">Discover Music That Speaks You.</span>
                        </h1>

                        {/* Right: actions */}
                        <div className="flex items-center gap-3">
                            {/* Login / Register (desktop) */}
                            <div className="hidden sm:flex">
                                <button onClick={() => setRegisterOpen(true)} className="btn-2" > Register </button>
                            </div>
                            <div className="hidden sm:flex">
                                <button onClick={() => setLoginOpen(true)} className="btn-1"> Login </button>
                            </div>

                            {/* Mobile hamburger */}
                            <button
                                aria-expanded={mobileOpen}
                                aria-label="Menu"
                                onClick={() => setMobileOpen((s) => !s)}
                                className="sm:hidden p-2 rounded-md bg-panel"
                            >
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Desktop nav (hidden on small) */}
                    <div className="hidden md:flex justify-center mt-3">
                        <nav className="flex items-center gap-8 bg-[#2C2C2C] px-8 py-3 rounded-full">
                            <Link href="/"><p className="text-sm text-gray-300 hover:text-white">Home</p></Link>
                            <Link href="/watch-videos"><p className="text-sm text-gray-300 hover:text-white">Watch Video</p></Link>
                            <Link href="/artists"><p className="text-sm text-gray-300 hover:text-white">Artist</p></Link>
                            <Link href="/photos"><p className="text-sm text-gray-300 hover:text-white">Photos</p></Link>
                            <Link href="/songs"><p className="text-sm text-gray-300 hover:text-white">Songs</p></Link>
                            <Link href="/subscription"><p className="text-sm text-gray-300 hover:text-white">Subscription</p></Link>
                            <Link href="/contact-us"><p className="text-sm text-gray-300 hover:text-white">Contact us</p></Link>
                        </nav>
                    </div>
                </div>

                {/* Mobile menu panel */}
                <div className={`sm:hidden bg-[#0f0f10] border-t border-gray-800 transition-max-h duration-300 overflow-hidden mb-4 ${mobileOpen ? "max-h-[420px]" : "max-h-0"}`}>
                    <div className="px-4 py-4">
                        <nav className="flex flex-col justify-center items-center gap-3">
                            <Link href="/"><p className="text-sm text-gray-300 hover:text-white">Home</p></Link>
                            <Link href="/watch-videos"><p className="text-sm text-gray-300 hover:text-white">Watch Video</p></Link>
                            <Link href="/artists"><p className="text-sm text-gray-300 hover:text-white">Artist</p></Link>
                            <Link href="/photos"><p className="text-sm text-gray-300 hover:text-white">Photos</p></Link>
                            <Link href="/songs"><p className="text-sm text-gray-300 hover:text-white">Songs</p></Link>
                            <Link href="/subscription"><p className="text-sm text-gray-300 hover:text-white">Subscription</p></Link>
                            <Link href="/contact-us"><p className="text-sm text-gray-300 hover:text-white">Contact us</p></Link>
                        </nav>

                        <div className="mt-4 flex gap-3">
                            <button onClick={() => { setRegisterOpen(true); setMobileOpen(false); }} className="btn-2 w-full">
                                Register
                            </button>
                            <button onClick={() => { setLoginOpen(true); setMobileOpen(false); }} className="btn-1 w-full">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Modals */}
            <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
            <SignupModal isOpen={registerOpen} onClose={() => setRegisterOpen(false)} />
        </>
    );
}
