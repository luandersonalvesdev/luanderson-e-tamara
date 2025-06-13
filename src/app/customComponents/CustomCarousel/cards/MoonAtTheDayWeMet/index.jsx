import Title from "@/app/customComponents/CustomCarousel/Title";
import Subtitle from "../../Subtitle";

export default function MoonAtTheDayWeMet() {
  return (
    <div className="flex flex-col w-full aspect-video gap-2">
      <Title text='Lua quando nos conhecemos' />
      <Subtitle text='Quarto Crescente'/>
      <img src="/imgs/moon.png" alt="place"  className="rounded-md"/>
      {/* <iframe
        className="w-full h-full border-0 rounded-md"
        src={URL}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </div>
  );
}
