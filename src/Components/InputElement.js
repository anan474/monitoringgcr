export const InputElement = ({ label, type, value, onChange, placeholder }) => {
  return (
    <>
      <p id={`label-${label}`}>{label}</p>
      <input
        className="input-element"
        name={label}
        id={`${label.toLowerCase()}-input`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};
