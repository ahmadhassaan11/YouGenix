export const getButtonClass = (variant = "default") => {
  const baseStyles = "py-2 px-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105";

  const variants = {
    default: `${baseStyles} border border-white text-white hover:border-red-500 hover:bg-gradient-to-r from-red-200 to-red-500 hover:text-transparent bg-clip-text`,
    gradient: `${baseStyles} bg-gradient-to-r from-red-500 to-red-800 text-white hover:from-red-600 hover:to-red-900 hover:shadow-lg`,
  };

  return variants[variant];
};
