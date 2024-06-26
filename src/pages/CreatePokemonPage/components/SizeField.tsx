import { Controller, get, UseFormReturn } from "react-hook-form";
import { CreatePokemonDto } from "../../../types";
import { Input } from "../../../components";

type SizeFieldProps = {
  form: UseFormReturn<CreatePokemonDto>;
};

const SizeField = ({ form }: SizeFieldProps) => {
  const { control } = form;

  return (
    <Controller
      control={control}
      name="size"
      render={({ field: { onChange, value } }) => (
        <div className="w-full">
          <Input label="Tamaño" onChange={onChange} value={value} />
        </div>
      )}
    />
  );
};

export { SizeField };
