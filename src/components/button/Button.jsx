import "./Button.css";

const Button = ({ children, backgroundColor, onClick, ...props }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: `${backgroundColor}` }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
