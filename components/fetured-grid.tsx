'use client';

import ArtistCard from './common/ArtistCard';

interface FeaturedGridProps {
    title: string;
    isTitleCenter?: boolean;
    items: Array<{
        id: string;
        title: string;
        image: string;
    }>;
}

export function FeaturedGrid({ title, items, isTitleCenter }: FeaturedGridProps) {
    return (
        <section className="pt-14 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xl font-bold mb-6 font__poppins">{title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <ArtistCard key={item.id} item={item} isTitleCenter={isTitleCenter} />
                    ))}
                </div>
            </div>
        </section>
    );
}
