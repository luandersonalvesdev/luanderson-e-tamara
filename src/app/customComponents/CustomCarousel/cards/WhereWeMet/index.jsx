import Title from "@/app/customComponents/CustomCarousel/Title";

const URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.0641649052066!2d-38.22009036078265!3d-9.398859108217247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70931223412d66d%3A0xd54d4c3eec511482!2sEspetinho%20Online!5e0!3m2!1spt-BR!2sus!4v1749699860039!5m2!1spt-BR!2sus";

export default function WhereWeMeet() {
  return (
    <div className="flex flex-col w-full aspect-video gap-2">
      <Title text='Onde tudo começou' />
      <img src="/imgs/place.png" alt="place"  className="rounded-md"/>
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
