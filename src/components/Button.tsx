import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'success' | 'danger' | 'update';
  children: React.ReactNode;
}

export const Button = ({ onClick, children, type = 'button', variant = 'success', ...rest}: ButtonProps) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick} type={type} {...rest}>
      {children}
    </button>
  );
};