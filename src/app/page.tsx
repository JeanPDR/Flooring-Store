import FlooringActions from "@/components/FlooringActions";
import Header from "@/components/Header";
import SpecsSection from "@/components/SpecSection";
import { Slider } from "@/components/component/slider";

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <FlooringActions />
      <SpecsSection />
    </main>
  );
}
