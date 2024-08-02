import FlooringActions from "@/components/FlooringActions";
import Header from "@/components/Header";
import FlooringCollections from "@/components/FlooringCollections";
import HardwoodFlooring from "@/components/HardwoodFlooring";
import FeaturesSection from "@/components/FeaturesSection";
import ContactUs from "@/components/contactUs";
import LVPFlooring from "@/components/LVPFlooring";
import LaminateFlooring from "@/components/LaminateFlooring";
import { Slider } from "@/components/component/slider";
import CollectionCard from "@/components/CollectionCard";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";
export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <FlooringActions />
      <FlooringCollections />
      <CollectionCard />
      <LVPFlooring />
      <HardwoodFlooring />
      <LaminateFlooring />
      <FeaturesSection />
      <ContactUs />
      <NewsletterSubscription />
      <Script
        defer
        src="https://us.umami.is/script.js"
        data-website-id="51faee81-7f59-4c3d-82d5-aa21c3473cc8"
      />
    </main>
  );
}
