import Amenities from "../components/amenities";
import ResidenceSection from "../components/residenceSection";
import OverviewSection from "../components/overviewSection"

export default function Home() {
  return (
    <>
    <OverviewSection/>
      <ResidenceSection />
      <Amenities />
    </>
  );
}
