import TimeElapsed from "./customComponents/CustomCarousel/cards/TimeElapsed";
import CustomCarousel from "./customComponents/CustomCarousel";
import OurMusic from "./customComponents/CustomCarousel/cards/OurMusic";
import WhereWeMet from "./customComponents/CustomCarousel/cards/WhereWeMet";

const CONTENTS = [
  {
    node: <TimeElapsed startDate={'2024-12-14T22:00:00'} />,
    title: 'Tempo juntos'
  },
  {
    node: <OurMusic />,
    title: 'Nossa musica'
  },
  {
    node: <WhereWeMet />,
    title: 'Onde nos conhecemos'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center px-16 sm:px-0">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10 filter brightness-30 sm:brightness-15 blur-sm"
        style={{ backgroundImage: "url('/imgs/us.png')" }}
      />
      <CustomCarousel contents={CONTENTS} />
    </div>
  );
}
