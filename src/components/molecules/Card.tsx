import { handleErrorImage } from "../../helpers";

type CardProps = {
  img?: string;
  name: string;
  type: string;
  onClick?: () => void;
};
const Card = ({ name, type, img, onClick }: CardProps) => {
  return (
    <section
      className="w-full cursor-pointer rounded overflow-hidden shadow-2xl border border-gray-300"
      onClick={onClick}
    >
      <img
        className="w-full h-52 object-cover"
        src={
          img ||
          "https://www.globalwatersolutions.com/wp-content/uploads/placeholder-734-1-2.png"
        }
        onError={handleErrorImage}
      />
      <div className="bg-white flex flex-col items-center p-2">
        <h5 className="font-bold text-lg">{name}</h5>
        <p>{type}</p>
      </div>
    </section>
  );
};

export { Card };
