type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: Props) => {
  return (
    <button className="w-full p-4 rounded-lg bg-red-500 text-white" {...props}>
      {children}
    </button>
  );
};

export { Button };
