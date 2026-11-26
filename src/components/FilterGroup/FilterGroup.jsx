function FilterGroup({ title, options, selected, onChange }) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>

      {options.map((option) => (
        <label key={option} className="filter-option">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onChange(option)}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}

export default FilterGroup;