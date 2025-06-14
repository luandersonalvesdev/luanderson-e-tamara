import Title from "@/app/customComponents/CustomCarousel/Title";
import Subtitle from "../../Subtitle";

export default function Init() {
  return (
    <div className="py-8 sm:py-56">
      <h1
        style={{
          textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff",
        }}
        className="text-3xl text-center sm:text-6xl brightness-90"
      >
        Alguns encontros mudam nossas vidas para sempre.
      </h1>
      <p className="pt-3 sm:pt-6 text-sm sm:text-2xl text-center">
        Dia 14/12/2024 foi o nosso.
      </p>
    </div>
  );
}
