// Reusable button used across the showcase page.
// variant: "primary" (filled blue) | "pill" (outlined blue pill, e.g. "Customize It")

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors cursor-pointer";

  const variants = {
    primary:
      "h-[44px] px-6 rounded-lg bg-[#3B5BDB] text-white text-[16px] hover:bg-[#3048C9]",
    pill:
      "px-4 py-1.5 rounded-full border border-[#3B5BDB] text-[#3B5BDB] text-xs hover:bg-[#3B5BDB] hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
