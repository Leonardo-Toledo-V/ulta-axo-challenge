interface CustomButtonProps {
  text: string,
  variant: "primary" | "secondary",
  size: "md" | "sm" | "lg",
  disabled?: boolean,
  onClick?: () => void,
  className?: string,
}

export default function CustomButton({ text, variant, size, disabled, onClick, className }: CustomButtonProps) {
  const baseClasses = "inline-flex items-center justify-center transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded-3xl active:scale-95 font-outfit";
  const variants = {
    primary: "bg-primary-black text-primary-white hover:bg-primary-black/85 focus:ring-primary-black",
    secondary: "bg-primary-white text-primary-black shadow-xs hover:bg-primary-black hover:text-white focus:ring-primary-black",
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