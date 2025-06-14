import Title from "@/app/customComponents/CustomCarousel/Title";
import Subtitle from "../../Subtitle";

export default function SkyAtTheDayWeMet() {
  return (
    <div className="flex flex-col w-full aspect-video">
      <Title text='Céu quando nos conhecemos' />
      <img src="/imgs/sky.png" alt="place"  className="mt-2 rounded-md"/>
    </div>
  );
}
