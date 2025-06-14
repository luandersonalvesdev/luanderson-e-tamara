export default function Subtitle({ text, position="self-start" }) {
  return (
    <p
      style={{
        textShadow: "0 0 6px #fff, 0 0 15px #fff, 0 0 30px #fff",
      }}
      className="self-start text-sm sm:text-lg"
    >
      {text}
    </p>
  );
}
