import { handleErrorImage } from "../../helpers";

type PreviewProps = {
  img: string;
  name: string;
  height: string;
  weight: string;
  type: string;
  abilities: string;
  number: number;
};

const Preview = ({
  abilities,
  height,
  img,
  type,
  weight,
  number,
  name,
}: PreviewProps) => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <img className="w-full" src={img} onError={handleErrorImage} />
      <div className="space-y-3">
        <h2 className="text-4xl font-bold">
          {name} <span className="font-normal"> #{number}</span>
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Abilities</p>
            {Array.isArray(abilities) && (
              <p>{abilities.map((item) => item.ability.name)}</p>
            )}
          </div>
          <div>
            <p className="font-semibold">Type</p>
            <p className="font-semibold px-2 w-fit bg-yellow-500 text-white rounded">
              {type}
            </p>
          </div>
          <div>
            <p className="font-semibold">Height</p>
            <p>{height}</p>
          </div>
          <div>
            <p className="font-semibold">Weight</p>
            <p>{weight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Preview };
