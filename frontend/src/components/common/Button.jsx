function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#C8A951] text-black hover:bg-[#d8b75d] hover:-translate-y-1",

    secondary:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;