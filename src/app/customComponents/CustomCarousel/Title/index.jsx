export default function Title({ text }) {
  return (
    <p
      // style={{
      //   textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff",
      // }}
      className="text-neon animate-glow self-start text-2xl sm:text-3xl brightness-90"
    >
      {text}
    </p>
  );
}
