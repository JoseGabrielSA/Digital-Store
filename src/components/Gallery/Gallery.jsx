import { useState } from 'react';

function Gallery({
  images,
  showThumbs = false,
  className = ''
}) {
  const [current, setCurrent] = useState(0);

  function previous() {
    setCurrent((value) =>
      value === 0 ? images.length - 1 : value - 1
    );
  }

  function next() {
    setCurrent((value) =>
      value === images.length - 1 ? 0 : value + 1
    );
  }

  return (
    <div className={`gallery ${className}`}>
      <div className="gallery-main">
        <img src={images[current]} alt={`Imagem ${current + 1}`} />

        <button className="gallery-arrow left" onClick={previous}>
          ‹
        </button>

        <button className="gallery-arrow right" onClick={next}>
          ›
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <button
              key={image}
              className={current === index ? 'selected' : ''}
              onClick={() => setCurrent(index)}
            >
              <img src={image} alt={`Miniatura ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;