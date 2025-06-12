const SRC = "https://www.youtube.com/embed/2Nt8aRLQM8Y?si=1zWNGxmEw7Y9bMDI"

export default function OurMusic() {
  return (
    <div  className="w-full aspect-video">
      <iframe 
        className="w-full h-full border-0 rounded-md" 
        src={SRC} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
  )
}