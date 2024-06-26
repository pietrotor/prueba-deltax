import clsx from "clsx";

export enum ButtonVariantEnum {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantEnum;
}
const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-3 py-2 w-full rounded-lg text-white text-xl font-bold",
        variant === ButtonVariantEnum.PRIMARY ? "bg-green-600" : "bg-red-600"
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export { Button };
