import TimeElapsed from "./customComponents/TimeElapsed";
import CustomCarousel from "./customComponents/CustomCarousel";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-red-100">
      <TimeElapsed startDate={'2024-12-14T22:00:00'}/>
      <CustomCarousel />
    </div>
  );
}
