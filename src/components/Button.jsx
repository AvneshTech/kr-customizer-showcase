// Reusable button used across the showcase page.
// variant: "primary" (filled blue) | "pill" (outlined blue pill, e.g. "Customize It")

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex min-w-fit items-center justify-center whitespace-nowrap font-medium transition-colors cursor-pointer";

  const variants = {
    primary:
      "h-[44px] px-6 rounded-lg bg-[#3458C4] text-white text-sm hover:bg-[#2C4BB0]",
    pill:
      "px-4 py-2 rounded-full border border-[#3458C4] text-[#3458C4] text-sm hover:bg-[#3458C4] hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
