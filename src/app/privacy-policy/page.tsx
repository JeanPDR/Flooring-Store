import Header from "@/components/Header";
import ContactUs from "@/components/contactUs";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import PrivacyPolicy from "@/components/privacyPolicy";
export default function About() {
  return (
    <main>
      <Header />
      <PrivacyPolicy />
      <ContactUs />
      <NewsletterSubscription />
    </main>
  );
}
