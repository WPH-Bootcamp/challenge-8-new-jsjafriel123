import HeroSlider from "../components/HeroSection/HeroSlider";
import NewRelease from "../components/NewReleaseSection/NewReleaseScroll";
import TrendingNow from "../components/TrendingSection/TrendingScroll";

export function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrendingNow />
      <NewRelease />
    </>
  );
}
