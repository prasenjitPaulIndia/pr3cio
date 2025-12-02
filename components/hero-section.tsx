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
            <div className="w-full h-[350px] md:h-[450px] relative overflow-hidden">
                <Image
                    src="/assets/images/hero_main.png"
                    alt="hero"
                    fill
                    className="object-contain"
                    sizes="100vh"
                />
                <div className="h-20 md:h-40 relative top-[140px] md:top-[190px] right-[130px] md:right-[340px]">
                    <Image
                        src="/assets/images/hero_support_1.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="h-20 md:h-40 relative top-[135px] md:top-2.5 left-[135px] md:left-[340px]">
                    <Image
                        src="/assets/images/hero_support_2.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </>
    );
}
