import TimeElapsed from "./customComponents/CustomCarousel/cards/TimeElapsed";
import CustomCarousel from "./customComponents/CustomCarousel";
import SpotifyEmbedding from "./customComponents/CustomCarousel/cards/SpotifyEmbedding";
import WhereWeMet from "./customComponents/CustomCarousel/cards/WhereWeMet";
import MoonAtTheDayWeMet from "./customComponents/CustomCarousel/cards/MoonAtTheDayWeMet";
import SkyAtTheDayWeMet from "./customComponents/CustomCarousel/cards/SkyAtTheDayWeMet";
import Init from "./customComponents/CustomCarousel/cards/Init";
import Ending from "./customComponents/CustomCarousel/cards/Ending";
import FloatingHeartsButton from "./customComponents/CustomCarousel/FloatingHearthsButton";
import TemperatureAtTheDayWeMet from "./customComponents/CustomCarousel/cards/TemperatureAtTheDayWeMet";

export default function Home() {
  return (
    <div className="flex w-full justify-center py-8 px-6 text-white text-xs sm:text-base">
      <div
        className="fixed inset-0 bg-cover bg-center bg-fixed -z-10 filter brightness-35"
        style={{ backgroundImage: "url('/imgs/bg2.jpg')" }}
      />

      <div className="flex flex-col sm:max-w-7/12 justify-center gap-20">
        <SpotifyEmbedding />
        <Init />
        <TimeElapsed />
        <WhereWeMet />
        <TemperatureAtTheDayWeMet />
        <SkyAtTheDayWeMet />
        <MoonAtTheDayWeMet />
        <Ending />
      </div>
    </div>
  );
}
