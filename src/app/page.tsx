import Amenities from "../components/amenities";
import ResidenceSection from "../components/residenceSection";
import OverviewSection from "../components/overviewSection";
import LifestyleSection from "../components/lifestyleSection";
import LocationSection from "../components/locationSection";
import Header from "../components/Layout/header";
import Specification from "../components/specification";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <OverviewSection />
        <ResidenceSection />
        <Amenities />
        <LifestyleSection />
        <LocationSection /><Specification/>
      </main>
    </>
  );
}
