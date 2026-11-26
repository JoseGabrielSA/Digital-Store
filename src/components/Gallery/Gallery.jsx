
import { useState } from 'react';

function Gallery({
  images = [],
  showThumbs = false,
  className = ''
}) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return null;
  }

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
        <img
          src={images[current]}
          alt={`Imagem ${current + 1} de ${images.length}`}
        />

        {images.length > 1 && (
          <>
            <button
              className="gallery-arrow left"
              onClick={previous}
              aria-label="Imagem anterior"
            >
              ‹
            </button>

            <button
              className="gallery-arrow right"
              onClick={next}
              aria-label="Próxima imagem"
            >
              ›
            </button>
          </>
        )}
      </div>

      {showThumbs && images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              className={current === index ? 'selected' : ''}
              onClick={() => setCurrent(index)}
              aria-label={`Selecionar imagem ${index + 1}`}
              aria-pressed={current === index}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
