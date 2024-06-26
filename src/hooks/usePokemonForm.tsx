import { useForm } from "react-hook-form";
import { CreatePokemonDto } from "../types";

const usePokemonForm = () => {
  const form = useForm<CreatePokemonDto>();

  const previusItems = localStorage.getItem("pokemons");

  const onSubmit = form.handleSubmit(
    (data) => {
      if (previusItems) {
        const pokemons = JSON.parse(previusItems);

        const updatedPokemons = JSON.stringify([...pokemons, data]);

        localStorage.setItem("pokemons", updatedPokemons);
      } else {
        const updatedPokemons = JSON.stringify([data]);
        localStorage.setItem("pokemons", updatedPokemons);
      }
      form.reset({
        id: "" as any,
        name: "",
        size: "",
        gender: "",
        img: "",
        type: "",
      });
    },
    () => console.log("invalid")
  );

  return { form, onSubmit };
};

export { usePokemonForm };
