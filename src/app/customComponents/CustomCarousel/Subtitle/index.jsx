export default function Subtitle({text}) {
  return (
    <p 
          style={{
        textShadow: "0 0 6px #fff, 0 0 15px #fff, 0 0 30px #fff",
      }}
    className='self-start text-sm sm:text-lg'>{text}</p>
  )
}