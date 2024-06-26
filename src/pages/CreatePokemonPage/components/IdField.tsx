import { Controller, get, UseFormReturn } from "react-hook-form";
import { CreatePokemonDto } from "../../../types";
import { Input } from "../../../components";
import { useState } from "react";

type IdFieldProps = {
  form: UseFormReturn<CreatePokemonDto>;
};

const IdField = ({ form }: IdFieldProps) => {
  const {
    control,
    formState: { errors },
  } = form;

  const error = get(errors, "id");

  return (
    <Controller
      control={control}
      name="id"
      rules={{
        required: "El id es requerido",
        pattern: {
          value: /^\d+$/,
          message: "Ingrese solo números",
        },
      }}
      render={({ field: { onChange, value } }) => (
        <div>
          <Input
            type="number"
            placeholder="1"
            label="Id *"
            onChange={onChange}
            value={value}
          />
          {error && <p className="text-xs text-red-400">{error?.message}</p>}
        </div>
      )}
    />
  );
};

export { IdField };
