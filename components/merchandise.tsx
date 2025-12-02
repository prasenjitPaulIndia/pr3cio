import Image from "next/image";

const newReleases = [
  { id: '1', title: 'Summer Album', image: 'https://images.pexels.com/photos/3273886/pexels-photo-3273886.jpeg', type: 'T-shirt', price: '$25' },
  { id: '2', title: 'Night Sessions', image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg', type: 'Hoodie', price: '$40' },
  { id: '3', title: 'Urban Beats', image: 'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg', type: 'Cap', price: '$15' },
  { id: '4', title: 'Chill Tracks', image: 'https://images.pexels.com/photos/3945702/pexels-photo-3945702.jpeg', type: 'Poster', price: '$10' },
  { id: '5', title: 'Urban Beats', image: 'https://images.pexels.com/photos/2759264/pexels-photo-2759264.jpeg', type: 'Tote Bag', price: '$20' },
];

const Merchandise = () => {
  return (
    <section className="pt-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold section__header">Merchandise</h3>
          <button className="btn-1">View More</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-10">
          {newReleases.map((item) => (
            <div className="relative bg-pr-dark overflow-hidden cursor-pointer" key={item.id}>
              <div className="relative w-full aspect-[1/1.2] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover" />
              </div>

              <div className="font__poppins flex items-center gap-2 my-3">
                <p className={`text-xs font-light`}>{item.type}</p>
                <div className="ms-auto h-[1px] w-12 bg-white opacity-70"></div>
                <p className={`text-xs font-light`}>{item.price}</p>
              </div>
              <button className="btn-1">View Details</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Merchandise