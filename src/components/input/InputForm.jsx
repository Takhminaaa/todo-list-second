import "./InputForm.css";

export const InputForm = ({ type, onChange, placeholder, value, id }) => {
  return (
    <input
      className="input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
    />
  );
};
