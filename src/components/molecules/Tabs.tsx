import clsx from "clsx";

type TabsProps = {
  tabs: {
    id: string;
    title: string;
    onClick: () => void;
  }[];
  active: string;
};

const Tabs = ({ tabs, active }: TabsProps) => {
  return (
    <div
      className={clsx(
        "w-full border-b border-black border-2 flex  justify-between"
      )}
    >
      {tabs.map((item) => (
        <div
          key={item.id}
          onClick={item.onClick}
          className={clsx(
            "cursor-pointer px-6 py-2  transition-all flex items-center justify-center w-full",
            active === item.id ? "bg-blue-400 text-white" : "hover:bg-black/10"
          )}
        >
          <p className="text-xl font-bold w-full text-center">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export { Tabs };
