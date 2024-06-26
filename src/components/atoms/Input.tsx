import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const Input = ({ label, ...props }: InputProps) => {
  return (
    <label>
      <p className="font-bold">{label}</p>
      <input
        {...props}
        className={clsx("px-2 py-2 w-full rounded-md border border-gray-800")}
      />
    </label>
  );
};

export { Input };
