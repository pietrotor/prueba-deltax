import { Controller, get, UseFormReturn } from "react-hook-form";
import { CreatePokemonDto, PokemonType } from "../../../types";

import { useGetTypes } from "../../../services/use-get-types";
import { useMemo } from "react";

type TypeFieldProps = {
  form: UseFormReturn<CreatePokemonDto>;
};

const TypeField = ({ form }: TypeFieldProps) => {
  const {
    control,
    formState: { errors },
  } = form;

  const error = get(errors, "type");

  const { data } = useGetTypes();

  const options = useMemo(() => {
    return ((data?.results as PokemonType[]) || []).map(({ name }) => {
      return {
        label: name,
        value: name,
      };
    });
  }, [data]);

  return (
    <Controller
      control={control}
      name="type"
      rules={{
        required: "El typo es requerido",
      }}
      render={({ field: { onChange, value } }) => (
        <div>
          <p className="font-bold">Tipo *</p>
          <select
            onChange={onChange}
            value={value}
            className="border-black border rounded-md w-full px-3 py-2"
          >
            <option defaultChecked value={""}>
              Selecciona un tipo
            </option>
            {options.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
          {error && <p className="text-xs text-red-400">{error?.message}</p>}
        </div>
      )}
    />
  );
};

export { TypeField };
