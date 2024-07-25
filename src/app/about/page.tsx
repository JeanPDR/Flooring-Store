import Header from "@/components/Header";
import ContactUs from "@/components/contactUs";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import AboutUsSection from "@/components/AboutUsSection ";
import AboutSection from "@/components/AboutSection";
export default function About() {
  return (
    <main>
      <Header />
      <AboutUsSection />
      <AboutSection />
      <ContactUs />
      <NewsletterSubscription />
    </main>
  );
}
