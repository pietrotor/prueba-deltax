import { Controller, get, UseFormReturn } from "react-hook-form";
import { CreatePokemonDto } from "../../../types";
import { Input } from "../../../components";

type GenderFieldProps = {
  form: UseFormReturn<CreatePokemonDto>;
};

const GenderField = ({ form }: GenderFieldProps) => {
  const {
    control,
    formState: { errors },
  } = form;

  return (
    <Controller
      control={control}
      name="gender"
      render={({ field: { onChange, value } }) => (
        <div className="w-full">
          <Input label="Genero" onChange={onChange} value={value} />
        </div>
      )}
    />
  );
};

export { GenderField };
