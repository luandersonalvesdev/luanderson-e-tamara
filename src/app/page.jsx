import TimeElapsed from "./customComponents/TimeElapsed";
import CustomCarousel from "./customComponents/CustomCarousel";

export default function Home() {
  return (
    <div className="flex justify-center px-16 sm:px-0">
      <CustomCarousel contents={[
        <TimeElapsed startDate={'2024-12-14T22:00:00'}/>,
        <TimeElapsed startDate={'2024-12-14T22:00:00'}/>
      ]}/>
    </div>
  );
}
