import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Showcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Footer />

      {/* Mobile floating CTA button */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <a
          href="#"
          className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-black text-base shadow-2xl shadow-orange-500/40 transition-all duration-200 w-full"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
          </svg>
          Baixar App Grátis
        </a>
      </div>
    </main>
  );
}
