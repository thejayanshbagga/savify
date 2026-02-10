import Navbar from "@/components/Navbar";
import Intro from "@/components/scenes/Intro";
import Features from "@/components/Features";
import FeatureSlideshow from "@/components/FeatureSlideshow";
import WhySavifyMarquee from "@/components/WhySavifyMarquee";
import SavingsCalculator from "@/components/SavingsCalculator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen font-sans">
            <Navbar />
            <Intro />
            <Features />
            <FeatureSlideshow />
            <WhySavifyMarquee />
            <SavingsCalculator />
            <FAQ />
            <Footer />
        </main>
    );
}
