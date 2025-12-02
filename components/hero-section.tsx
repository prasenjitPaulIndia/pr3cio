'use client';

import Image from "next/image";

export function HeroSection() {
    return (
        <>
            <h1 className="text-center uppercase sm:hidden">
                <span className="font-light text-[40px] leading-[80%] ">Play What Moves You</span>
                <br />
                <span className="font-bold text-[60px] leading-[80%]">Discover Music That Speaks You.</span>
            </h1>
            <div className="w-full h-[50vh] relative">
                <Image
                    src="/assets/images/hero.png"
                    alt="hero"
                    fill
                    className="object-contain"
                    sizes="100vh"
                />
            </div>
        </>
    );
}
