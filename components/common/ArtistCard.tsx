import { IconHeart, IconPlayerPlayFilled } from '@tabler/icons-react'
import Image from 'next/image'

interface FeaturedGridProps {
    isTitleCenter?: boolean;
    item: {
        id: string;
        title: string;
        image: string;
    };
}

const ArtistCard = ({ item, isTitleCenter }: FeaturedGridProps) => {
    return (
        <div className="group relative bg-pr-dark overflow-hidden cursor-pointer">
            <div className="relative w-full aspect-[1/1.1] overflow-hidden">

                <div className="absolute z-2 top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-[#B8D344] ">
                    <IconHeart size={20} color='#000' />
                </div>
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-[50%] left-[50%] z-2 transition-all p-3 bg-[#FFFFFF4D] rounded-full outline-1 outline-[#FFFFFF99]" style={{ transform: 'translate(-50%,-50%)' }} >
                    <IconPlayerPlayFilled />
                </div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all" />
            </div>

            <h3 className={`font-semibold font__poppins mt-3 ${isTitleCenter ? 'text-center' : ''}`}>
                {item.title}
            </h3>
        </div>
    )
}

export default ArtistCard