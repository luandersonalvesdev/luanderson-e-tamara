import TimeElapsed from "./customComponents/CustomCarousel/cards/TimeElapsed";
import CustomCarousel from "./customComponents/CustomCarousel";
import SpotifyEmbedding from "./customComponents/CustomCarousel/cards/SpotifyEmbedding";
import WhereWeMet from "./customComponents/CustomCarousel/cards/WhereWeMet";
import MoonAtTheDayWeMet from "./customComponents/CustomCarousel/cards/MoonAtTheDayWeMet";

export default function Home() {
  return (
    <div className="flex w-full justify-center py-8 px-6 text-white text-xs sm:text-base">
      <div
        className="fixed inset-0 bg-cover bg-center bg-fixed -z-10 filter brightness-50"
        style={{ backgroundImage: "url('/imgs/bg.jpg')" }}
      />

      <div className="flex flex-col sm:max-w-7/12 justify-center gap-20">
        <SpotifyEmbedding />
        <TimeElapsed />
        <WhereWeMet />
        <MoonAtTheDayWeMet />
      </div>
    </div>
  );
}
