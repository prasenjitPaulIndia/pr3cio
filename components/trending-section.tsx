'use client';

import ArtistRoundProfile from './common/ArtistRoundProfile';

interface TrendingItem {
    id: string;
    title: string;
    artist: string;
    image: string;
}

export function TrendingSection() {
    const items: TrendingItem[] = [
        { id: '1', title: 'Summer Hit', artist: 'The Weeknd', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg' },
        { id: '2', title: 'Night Drive', artist: 'The Weeknd', image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg' },
        { id: '3', title: 'Electric', artist: 'Dua Lipa', image: 'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg' },
        { id: '4', title: 'Euphoria', artist: 'Labrinth', image: 'https://images.pexels.com/photos/3945642/pexels-photo-3945642.jpeg' },
        { id: '5', title: 'Levitating', artist: 'Dua Lipa', image: 'https://images.pexels.com/photos/3273886/pexels-photo-3273886.jpeg' },
    ];

    return (
        <section className="py-14 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xl font-bold mb-6 font__poppins">Trending Songs</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {items.map((item) => (
                        <ArtistRoundProfile key={item.id} artist={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
