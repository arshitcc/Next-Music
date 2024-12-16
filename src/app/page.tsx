import { HeroSection } from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSection/>
     <FeaturedCourses/>
     <WhyUs/>
     <Testimonials/>
     <Events/>
     <Instructors/>
     <Footer/>
    </main>
  );
}
