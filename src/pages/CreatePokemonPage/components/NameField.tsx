import { Controller, get, UseFormReturn } from "react-hook-form";
import { CreatePokemonDto } from "../../../types";
import { Input } from "../../../components";

type NameFieldProps = {
  form: UseFormReturn<CreatePokemonDto>;
};

const NameField = ({ form }: NameFieldProps) => {
  const {
    control,
    formState: { errors },
  } = form;

  const error = get(errors, "name");

  return (
    <Controller
      control={control}
      name="name"
      rules={{
        required: "El nombre es requerido",
      }}
      render={({ field: { onChange, value } }) => (
        <div>
          <Input
            placeholder="Pikachu"
            label="Nombre *"
            onChange={onChange}
            value={value}
          />
          {error && <p className="text-xs text-red-400">{error?.message}</p>}
        </div>
      )}
    />
  );
};

export { NameField };
