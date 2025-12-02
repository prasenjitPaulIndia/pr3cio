'use client';

import Image from 'next/image';

const topArtists = [
    { id: '5', title: 'Billie Eilish', image: '/assets/images/artist1.svg', glowColor: '#550413' },
    { id: '6', title: 'Taylor Swift', image: '/assets/images/artist2.svg', glowColor: '#000000' },
    { id: '7', title: 'Drake', image: '/assets/images/artist3.svg', glowColor: '#A8492C' },
    { id: '8', title: 'Post Malone', image: '/assets/images/artist4.svg', glowColor: '#8E7058' },
];

export function TopStreamArtist() {
    return (
        <section className="pt-14 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xl font-bold mb-12 font__poppins">Top streamed artists</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {topArtists.map((item) => (
                        <div key={item.id} className="relative cursor-pointer bg-black rounded-3xl p-3 mb-6 md:mb-0"
                        >
                            <div className="relative w-full h-[90%] aspect-square -top-12!">
                                <div className='h-60 left-[50%] top-14 absolute aspect-square rounded-full blur-lg' style={{ transform: 'translateX(-50%)', backgroundImage: `radial-gradient(circle, transparent, ${item?.glowColor})` }}></div>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h3 className={`font-semibold font__poppins text-center `}>
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}