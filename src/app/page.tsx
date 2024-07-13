import FlooringActions from "@/components/FlooringActions";
import Header from "@/components/Header";
import SpecsSection from "@/components/SpecSection";
import { Slider } from "@/components/component/slider";
import HardwoodFlooring from "@/components/HardwoodFlooring";
import FeaturesSection from "@/components/FeaturesSection";
import ContactUs from "@/components/contactUs";

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <FlooringActions />
      <SpecsSection />
      <HardwoodFlooring />
      <FeaturesSection />
      <ContactUs />
    </main>
  );
}
