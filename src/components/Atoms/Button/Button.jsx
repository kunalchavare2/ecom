
const Button = ({ title, onClick, ...props }) => {
  return (
    <button {...props} onClick={onClick}>
      {title && title}
    </button>
  );
};



export default Button;
