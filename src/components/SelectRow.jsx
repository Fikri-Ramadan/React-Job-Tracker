/* eslint-disable react/prop-types */
const SelectRow = ({ name, label, list, defaultValue, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="select"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectRow;
