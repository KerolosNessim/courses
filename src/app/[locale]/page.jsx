import AppSection from "@/components/home/app-section";
import ClientsReview from "@/components/home/clients-review";
import CoursesSection from "@/components/home/courses-section";
import Faq from "@/components/home/faq";
import HeroSection from "@/components/home/hero-section";
import LessonSection from "@/components/home/lesson-section";
import SuccessStories from "@/components/home/success-stories";
import WhyUsSection from "@/components/home/why-us-section";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";

export default function HomePage() {

  return (
    <>
      {/* navbar */}
      <Navbar />
      <main>
        <HeroSection />
        <WhyUsSection />
        {/* courses and lessons sections */}
        <section className="py-16 bg-[url('/home/bg-squares.svg')] relative">
          <Image src="/home/shadow-bg.svg" alt="hero-shadow" width={300} height={300} className="absolute -z-10 top-0 right-0" />
          <Image src="/home/pulse-bg.svg" alt="hero-shadow" width={300} height={300} className="absolute -z-10 top-12 right-0 max-lg:hidden" />
          <Image src="/home/shadow-md.svg" alt="hero-shadow" width={300} height={300} className="absolute -z-10 top-[35%]  left-0 " />
          <Image src="/home/pulse-e-bg.svg" alt="hero-shadow" width={200} height={200} className="absolute -z-10 -left-6 top-[58%] max-lg:hidden" />
          <Image src="/home/shadow-e.svg" alt="hero-shadow" width={400} height={400} className="absolute -z-10 bottom-0 right-0" />

          <div className="container space-y-16 relative">
            <CoursesSection />
            <LessonSection />
          </div>
        </section>
        <ClientsReview />
        <SuccessStories />
        <Faq />
        <AppSection />
      </main>
      <Footer />
    </>
  );
}
