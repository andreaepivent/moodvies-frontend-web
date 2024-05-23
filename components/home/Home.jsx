import Footer from "@/components/common/Footer";
import HomePageBottom from "./HomePageBottom";
import HomePageHeader from "./HomePageHeader";
import HomePageMiddle from "./HomePageMiddle";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <HomePageHeader />
        <HomePageMiddle />
        <HomePageBottom />
        <div className="border-t-2 border-slate-300">
          <Footer />
        </div>
      </div>
    </>
  );
}
