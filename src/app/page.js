import Header from "@/components/root/header";
import Footer from "@/components/root/footer";
import Hero from "@/components/root/hero";
import HomeFeatures from "@/components/root/features";
import HowItWorksComponent from "@/components/root/demo";
import TestimonialSlider from "@/components/root/testimonials";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        
        <Hero />
        <HomeFeatures />
        <HowItWorksComponent />
        <TestimonialSlider />
        
      </main>

      <Footer />
    </>
  );
}