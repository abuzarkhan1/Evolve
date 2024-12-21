"use client";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import OurServices from "@/components/OurServices";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import WorkingHours from "@/components/Working";
import Clients from "@/components/Clients";
import ContactUs from "@/components/Contact";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <OurServices />
        <About />
        <Approach />
        {/* <WorkingHours /> */}
        <Clients />
        <FAQ />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
