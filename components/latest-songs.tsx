'use client';

import ArtistCard from "./common/ArtistCard";

const latestSong = [
    { id: '1', title: 'The Weeknd', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg' },
    { id: '2', title: 'Dua Lipa', image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg' },
    { id: '3', title: 'Ariana Grande', image: 'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg' },
    { id: '4', title: 'Harry Styles', image: 'https://images.pexels.com/photos/3945642/pexels-photo-3945642.jpeg' },
];

export function LatestSongs() {
    return (
        <section className="pt-14 md:px-6">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-7 md:py-14 rounded-4xl latest__songs">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold section__header">Latest Songs</h3>
                    <button className="btn-1">View More</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 pb-4">
                    {latestSong.map((item) => (
                        <ArtistCard item={item} key={item?.id} isTitleCenter={true} />
                    ))}
                </div>

            </div>
        </section>
    );
}



