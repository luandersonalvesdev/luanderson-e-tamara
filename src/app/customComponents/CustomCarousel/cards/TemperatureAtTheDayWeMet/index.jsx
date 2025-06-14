import Title from "@/app/customComponents/CustomCarousel/Title";
import Subtitle from "../../Subtitle";

export default function TemperatureAtTheDayWeMet() {
  return (
    <div className="flex flex-col w-full aspect-video">
      <Title text='Temperatura do dia' />
      <img src="/imgs/temperature.png" alt="place"  className="w-40 sm:w-96 self-center"/>
    </div>
  );
}
