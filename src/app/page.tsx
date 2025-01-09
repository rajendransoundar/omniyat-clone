import Amenities from "../components/amenities";
import ResidenceSection from "../components/residenceSection";
import OverviewSection from "../components/overviewSection";
import LifestyleSection from "../components/lifestyleSection";
import LocationSection from "../components/locationSection";
import EnquireSection from "../components/enquire";
import Header from "../components/Layout/header";
import Specification from "../components/Layout/specification";
import Footer from "../components/Layout/footer";
import HeroSection from "../components/heroSection"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection/>
        <OverviewSection />
        <ResidenceSection />
        <Amenities />
        <LifestyleSection />
        <LocationSection />
        <EnquireSection />
        <Specification />
        <Footer />
      </main>
    </>
  );
}
