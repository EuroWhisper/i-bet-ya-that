const Input = (props: React.HTMLProps<HTMLInputElement>) => {
  return (
    <input
      className="bg-white text-gray-800 p-3 rounded-lg w-full"
      {...props}
    />
  );
};

export { Input };
