import ButtonError from "@components/ui/Buttons/ButtonError";
import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
import ButtonRectangle from "@components/ui/Buttons/ButtonRectangle";
import ButtonSecondary from "@components/ui/Buttons/ButtonSecondary";
import ButtonTertiary from "@components/ui/Buttons/ButtonTertiary";
import Input from "@components/ui/Input";

export default function ComponentPreview() {
  return (
    <>
      <div className="w-full p-5 container mx-auto">
        <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">
          Buttons
        </h1>
        <div className="flex gap-2 mt-2 px-3 items-center">
          <ButtonPrimary text="Primary" />
          <ButtonError text="Reset" />
          <ButtonSecondary text="Secondary" />
          <ButtonTertiary text="Tertiary" />
          <ButtonRectangle text="Cancel" />
          <ButtonRectangle
            text="Cancel"
            className="border-red-500 text-red-500 hover:text-red-500"
          />
        </div>
        <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">
          Inputs
        </h1>
        <div className="flex gap-2 mt-2 px-3 items-center">
          <Input />
        </div>
      </div>
    </>
  );
}
