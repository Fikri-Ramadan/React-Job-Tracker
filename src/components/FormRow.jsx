// eslint-disable-next-line react/prop-types
const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="label">
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="input"
        defaultValue={defaultValue}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default FormRow;
