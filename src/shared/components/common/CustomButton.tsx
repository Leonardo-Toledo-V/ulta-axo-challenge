interface CustomButtonProps {
  text: string,
  variant: "primary" | "secondary",
  size: "md" | "sm" | "lg",
  disabled: boolean,
  onClick: () => void,
  className: string,
}

export default function CustomButton({ text, variant, size, disabled, onClick, className }: CustomButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-primary-black text-white hover:bg-primary-black/85 focus:ring-primary-black active:scale-95 rounded-3xl cursor-pointer transition-colors duration-500",
    secondary: "bg-primary text-primary-white border border-primary hover:bg-primary/85 focus:ring-primary active:scale-95 rounded-3xl cursor-pointer transition-colors duration-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};