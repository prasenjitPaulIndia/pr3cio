import { IconPlayerPlay } from '@tabler/icons-react'
import Image from 'next/image'

interface ArtistRoundProfileProps {
    artist: {
        id?: string;
        title: string;
        image: string;
    };
}

const ArtistRoundProfile = ({ artist }: ArtistRoundProfileProps) => {
    return (
        <div
            key={artist.title}
            className={`rounded-full hover:brightness-110 transition-all hover:scale-105 flex items-center justify-between flex-col gap-5`}
        >
            <div className="p-2 w-full aspect-square rounded-full relative" style={{ backgroundImage: 'linear-gradient(215deg,#4D41FA,#F844B0)' }}>
                <div className="h-full w-full aspect-square relative object-contain rounded-full">
                    <Image src={artist.image} fill alt={artist.title} className="object-cover rounded-full" />
                </div>
                <div className="p-2 bg-[#FFFFFF4D] rounded-full absolute right-5 bottom-2 bg-linear-to-b from-[#C6FF00] to-[#52D875]">
                    <IconPlayerPlay color="black" size={20} />
                </div>
            </div>
            <p className="font__poppins">{artist.title}</p>
        </div>
    )
}

export default ArtistRoundProfile