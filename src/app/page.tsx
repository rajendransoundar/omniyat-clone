import Amenities from "../components/amenities";
import ResidenceSection from "../components/residenceSection";
import OverviewSection from "../components/overviewSection";
import LifestyleSection from "../components/lifestyleSection";
import LocationSection from "../components/locationSection";
import Header from "../components/Layout/header"

export default function Home() {
  return (
    <>
    <Header/>
      <OverviewSection />
      <ResidenceSection />
      <Amenities />
      <LifestyleSection/>
      <LocationSection/>
    </>
  );
}
