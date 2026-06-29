import "./Gallery.css";

function Gallery() {
  const photos = [
    "⚽ Match 1",
    "🏆 Final Match",
    "🥇 Award Ceremony",
    "👥 Team Photo",
    "🎉 Celebration",
    "📸 Crowd",
  ];

  return (
    <section className="gallery">

      <h2>📸 Tournament Gallery</h2>

      <div className="gallery-grid">

        {photos.map((photo,index)=>(

          <div className="gallery-card" key={index}>
            {photo}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;