import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectGrid from '@/components/ProjectGrid';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <HeroSection />
        <ProjectGrid />
        <Footer />
      </main>
      <FloatingCTA />
    </>
  );
}
