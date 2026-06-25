const BASE = "http://127.0.0.1:8000/images";

function HairstyleDetailImage({ hairstyle }) {
  const images = hairstyle?.gallery?.length
    ? hairstyle.gallery
    : [hairstyle?.image];

  return (
    <>
      <div className="detail-image-wrapper">
        <img
          src={`${BASE}/${images[0]}`}
          alt={hairstyle?.name}
          className="detail-image"
        />
      </div>

      {images.length > 1 && (
        <div className="detail-thumbnails">
          {images.slice(0, 4).map((img, i) => (
            <div key={i} className={`detail-thumb${i === 0 ? " detail-thumb--active" : ""}`}>
              <img src={`${BASE}/${img}`} alt={`${hairstyle?.name} view ${i + 1}`} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default HairstyleDetailImage;