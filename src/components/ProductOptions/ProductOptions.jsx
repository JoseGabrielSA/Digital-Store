function ProductOptions({
  sizes = [],
  colors = [],
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange
}) {
  return (
    <div className="product-options">
      {sizes.length > 0 && (
        <div className="option-group">
          <h3>Tamanho</h3>

          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => onSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {colors.length > 0 && (
        <div className="option-group">
          <h3>Cor</h3>

          <div className="color-options">
            {colors.map((color) => (
              <button
                key={color.name}
                title={color.name}
                aria-label={color.name}
                className={selectedColor === color.name ? 'selected' : ''}
                style={{ backgroundColor: color.value }}
                onClick={() => onColorChange(color.name)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductOptions;