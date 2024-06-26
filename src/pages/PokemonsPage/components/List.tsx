import { Card } from "../../../components";
import { useGetPokemons } from "../../../services/use-get-pokemons";

type ListProps = {
  onClick: any;
};

const List = ({ onClick }: ListProps) => {
  const { data = [] } = useGetPokemons();
  return (
    <div className="px-10 py-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      {data.map((pokemon: any) => (
        <Card
          onClick={() =>
            onClick({
              ...pokemon,
              img: pokemon.sprites.front_default,
              type: pokemon.types?.[0]?.type.name,
              abilitie: pokemon.types?.[0]?.type.name,
              weight: pokemon.weight,
              height: pokemon.height,
            })
          }
          key={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          img={pokemon.sprites.front_default}
        />
      ))}
    </div>
  );
};

export { List };
