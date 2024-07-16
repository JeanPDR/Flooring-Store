import FlooringActions from "@/components/FlooringActions";
import Header from "@/components/Header";
import FlooringCollections from "@/components/FlooringCollections";
import { Slider } from "@/components/component/slider";
import HardwoodFlooring from "@/components/HardwoodFlooring";
import FeaturesSection from "@/components/FeaturesSection";
import ContactUs from "@/components/contactUs";
import LVPFlooring from "@/components/LVPFlooring";
import LaminateFlooring from "@/components/LaminateFlooring";
import TopRowWrapper from "@/components/TopRowWrapper";

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <FlooringActions />
      <FlooringCollections />
      <LVPFlooring />
      <HardwoodFlooring />
      <LaminateFlooring />
      <FeaturesSection />
      <ContactUs />
    </main>
  );
}
