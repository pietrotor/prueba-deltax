import { useMemo, useState } from "react";
import { Button, ButtonVariantEnum, Card, Tabs } from "../../components";
import { CreatePokemonDto } from "../../types";
import Modal from "../../components/molecules/Modal";
import { useDisclosure } from "../../hooks";
import { Preview } from "../../components/molecules/Preview";
import { Link } from "react-router-dom";
import { List } from "./components/List";

const PokemonsPage = () => {
  const { isOpen, onClose, onOpen, data } = useDisclosure();

  const pokemons = useMemo((): CreatePokemonDto[] => {
    if (localStorage.getItem("pokemons")) {
      return JSON.parse(localStorage.getItem("pokemons") || "") as any;
    }
    return [];
  }, []);

  const [activeTab, setActiveTab] = useState<string>("list");
  console.log;

  const TabsOptions = [
    {
      id: "list",
      title: "Pokedex nacional",
      onClick: () => setActiveTab("list"),
    },
    {
      id: "custom",
      title: "Pokedex tumbo",
      onClick: () => setActiveTab("custom"),
    },
  ];

  return (
    <div className="w-full bg-gray-200 min-h-screen">
      <Tabs active={activeTab} tabs={TabsOptions} />
      {activeTab === "custom" && (
        <div className="w-full flex justify-end px-10">
          <div className="max-w-64 my-2">
            <Link to={"/create"} className="w-full">
              <Button variant={ButtonVariantEnum.PRIMARY}>Crear pokemon</Button>
            </Link>
          </div>
        </div>
      )}
      {activeTab === "custom" && (
        <div className="px-10 py-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {pokemons.map((pokemon) => (
            <Card
              onClick={() => onOpen(pokemon)}
              key={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
            />
          ))}
        </div>
      )}
      {activeTab !== "custom" && <List onClick={onOpen} />}
      <Modal isOpen={isOpen} onClose={onClose}>
        {data && (
          <Preview
            abilities={data.abilities}
            height={(data.height = "")}
            name={data.name}
            number={data.id}
            type={data.type}
            weight={data.weight}
            img={data.img}
          />
        )}
      </Modal>
    </div>
  );
};

export { PokemonsPage };
