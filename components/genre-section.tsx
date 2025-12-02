'use client';

import { IconChevronRight } from "@tabler/icons-react";

const genres = [
    { name: 'Pop', color: 'from-[#C4C4C400] to-[#8BA80DCC] bg-[#E5F992]' },
    { name: 'EDM', color: 'from-[#C4C4C400] to-[#FDAD18CC] bg-[#FAD590]' },
    { name: 'Country', color: 'from-[#C4C4C400] to-[#EF1212CC] bg-[#FF9494]' },
    { name: 'R&B/Soul', color: 'from-[#C4C4C400] to-[#2416E9CC] bg-[#A69FFF]' },
    { name: 'Latin/k-Pop', color: 'from-[#C4C4C400] to-[#E41AD7CC] bg-[#FFA9F9]' },
];

export function GenreSection() {
    return (
        <section className="pt-4 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold section__header">Top Genres this week</h3>
                    <button className="btn-1">View More</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-4">
                    {genres.map((genre) => (
                        <button
                            key={genre.name}
                            className={`bg-linear-to-b ${genre.color} font-bold text-xl px-4 md:px-8 py-6 md:py-8 rounded-3xl hover:brightness-110 transition-all hover:scale-105 flex items-center justify-between text-black`}
                        >
                            <span>{genre.name}</span>
                            <div className="p-1.5 bg-[#FFFFFF4D] rounded-full outline-1 outline-[#FFFFFF99]">
                                <IconChevronRight size={20} color="black" stroke={1} />
                            </div>
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}
