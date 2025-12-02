import { CTASection } from "@/components/cta-section";
import { FeaturedGrid } from "@/components/fetured-grid";
import { Footer } from "@/components/footer";
import { GenreSection } from "@/components/genre-section";
import { HeroSection } from "@/components/hero-section";
import { LatestSongs } from "@/components/latest-songs";
import Merchandise from "@/components/merchandise";
import Navbar from "@/components/navbar";
import { TopArtist } from "@/components/top-artist";
import { TopStreamArtist } from "@/components/top-stream-artist";
import { TrendingSection } from "@/components/trending-section";

export default function Home() {
  const topArtists = [
    { id: '5', title: 'Billie Eilish', image: 'https://images.pexels.com/photos/3273886/pexels-photo-3273886.jpeg' },
    { id: '6', title: 'Taylor Swift', image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg' },
    { id: '7', title: 'Drake', image: 'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg' },
    { id: '8', title: 'Post Malone', image: 'https://images.pexels.com/photos/3945702/pexels-photo-3945702.jpeg' },
  ];

  return (
    <main className="bg-pr-darker min-h-screen">
      <Navbar />
      <HeroSection />
      <GenreSection />
      <TopArtist />
      <FeaturedGrid title="Latest albums" items={topArtists} />
      <LatestSongs />
      <FeaturedGrid title="Trending albums" items={topArtists} />
      <TrendingSection />
      <FeaturedGrid title="Most liked albums" items={topArtists} />
      <TopStreamArtist />
      <Merchandise />
      <CTASection />
      <Footer />
    </main>
  );
}
