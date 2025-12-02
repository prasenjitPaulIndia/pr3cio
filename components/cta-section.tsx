'use client';

import Image from "next/image";

export function CTASection() {
    return (
        <section className="pt-14">
            <div className="max-w-7xl mx-auto md:w-max">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="text-center md:text-end">
                        <h2 className="text-[80px] md:text-[150px] text-center md:text-left font-bold mb-4 leading-[80%]">
                            MUSIC <br />
                            <span className="text-[#B8D344] bg-clip-text">
                                ANYTIME
                            </span> <br />
                            <span className="text-pr-text">ANYWHERE</span>
                        </h2>
                        <button className="btn-1 md:float-left">Click here</button>
                    </div>
                    <div className="relative w-full h-full aspect-[1/1.2]">
                        <Image
                            src={'assets/images/cta.svg'}
                            alt={'CTA Image'}
                            fill />
                    </div>
                </div>
            </div>
        </section>
    );
}
