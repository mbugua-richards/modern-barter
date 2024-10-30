import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturedSection from '@/components/featured-section';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}