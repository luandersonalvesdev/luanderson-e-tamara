const SRC = "https://open.spotify.com/embed/track/656TZu3G6rnfK9m2Y0zR6g?utm_source=generator&theme=0"

export default function SpotifyEmbedding() {
  return (
    <div>
      <iframe
        className="w-full border-0 rounded-md"
        src={SRC}
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
