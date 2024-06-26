import { Button, ButtonVariantEnum } from "../../components";
import { usePokemonForm } from "../../hooks";
import { IdField } from "./components/IdField";
import { NameField } from "./components/NameField";
import { TypeField } from "./components/TypeField";
import { SizeField } from "./components/SizeField";
import { GenderField } from "./components/GenderField";
import { Link } from "react-router-dom";

const CreatePokemonPage = () => {
  const { form, onSubmit } = usePokemonForm();

  return (
    <section className="w-full bg-gray-200 flex items-center justify-center min-h-screen">
      <div className="w-full bg-white shadow-2xl max-w-[850px] p-7 rounded-md space-y-3">
        <div className="flex gap-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s" />
          <div className="mx-auto">
            <IdField form={form} />
          </div>
        </div>
        <NameField form={form} />
        <TypeField form={form} />
        <div className="flex gap-3 w-full">
          <SizeField form={form} />
          <GenderField form={form} />
        </div>
        <div className="mt-4 flex gap-3">
          <Link to={"/"} className="w-full">
            <Button variant={ButtonVariantEnum.SECONDARY}>Cancelar</Button>
          </Link>
          <Button
            type="button"
            onClick={onSubmit}
            variant={ButtonVariantEnum.PRIMARY}
          >
            Crear
          </Button>
        </div>
      </div>
    </section>
  );
};

export { CreatePokemonPage };
