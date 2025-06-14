import Title from "@/app/customComponents/CustomCarousel/Title";
import Subtitle from "../../Subtitle";

export default function MoonAtTheDayWeMet() {
  return (
    <div className="flex flex-col w-full aspect-video">
      <Title text="Lua quando nos encontramos" />
      <img src="/imgs/moon.png" alt="place" className="mt-4 rounded-md w-40 sm:w-96 self-center" />
      <p
        style={{
          textShadow: "0 0 6px #fff, 0 0 15px #fff, 0 0 30px #fff",
        }}
        className="self-center text-sm sm:text-lg"
      >
        Lua Quarto Crescente
      </p>
    </div>
  );
}
