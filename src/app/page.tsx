import Amenities from "../components/amenities";
import ResidenceSection from "../components/residenceSection";
import OverviewSection from "../components/overviewSection";
import LifestyleSection from "../components/lifestyleSection";
import LocationSection from "../components/locationSection";

export default function Home() {
  return (
    <>
      <OverviewSection />
      <ResidenceSection />
      <Amenities />
      <LifestyleSection/>
      <LocationSection/>
    </>
  );
}
