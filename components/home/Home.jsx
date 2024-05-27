import Footer from "@/components/common/Footer";
import HomePageBottom from "./HomePageBottom";
import HomePageHeader from "./HomePageHeader";
import HomePageMiddle from "./HomePageMiddle";
import NavbarHome from "./NavBarHome";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <HomePageHeader />
        <HomePageMiddle />
        <HomePageBottom />
        <Footer />
      </div>
    </>
  );
}
