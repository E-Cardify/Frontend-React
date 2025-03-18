import TitleDivider from "@components/Typography/TitleDivider/TitleDivider";
import { ColorPicker, Group } from "@mantine/core";
import { useCardCreationFormContext } from "@pages/CardCreationComponent/context/CardCreationContext";
import { useState } from "react";

export function Display() {
  const form = useCardCreationFormContext();
  const [colorValue, setColorValue] = useState(form.getValues().color);

  const colors = [
    "rgb(34, 139, 230)", //matine-blue
    "#22C55E", // green-500
    "#EF4444", // red-500
    "#FACC15", // yellow-400
    "#A855F7", // purple-500
    "#374151", // gray-700
    "#14B8A6", // teal-500
    "#F59E0B", // amber-500
    "#6366F1", // indigo-500
    "#10B981", // emerald-500
  ];

  return (
    <>
      <TitleDivider text="Color" order={3} />
      <Group>
        <ColorPicker
          flex={1}
          value={colorValue}
          onChange={(color) => {
            form.setValues({
              color,
            });
            setColorValue(color);
          }}
          onClick={() => {}}
          maw="300px"
          format="hex"
          swatches={colors}
        />
      </Group>

      <TitleDivider text="Style" order={3} mt="md" />

      {/* <div className="min-h-[70vh] max-h-[70vh] overflow-auto">
        <div>
          <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">
            {t("Color")}
          </h1>
          <div className="px-3 flex gap-5 py-3 flex-wrap">
            {colors.map((color, index) => {
              return (
                <div
                  className={`rounded-xl w-10 h-10 bg-${color} cursor-pointer`}
                  key={index}
                  onClick={() => {}}
                >
                  {/* {color == cardInfo.design?.color && (
                    <div className="text-white p-1 flex items-center justify-center">
                      <CheckIcon />
                    </div>
                  )} */}
      {/* </div>
              );
            })}
          </div>

          <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">
            {t("Style")}
          </h1>
          <div className="px-3 flex gap-5 py-3 flex-wrap">
            <div
              title={t("Solid")}
              onClick={() => handleStyleChange("solid")}
              className={`rounded-xl w-10 h-10 bg-${
                cardInfo.design?.color || "green-500"
              } cursor-pointer`}
            >
              {"solid" == cardInfo.design?.style && (
                <div className="text-white p-1 flex items-center justify-center">
                  <CheckIcon />
                </div>
              )}
            </div>
            <div
              title={t("Gradient")}
              onClick={() => handleStyleChange("gradient")}
              className={`rounded-xl w-10 h-10 from-${
                cardInfo.design?.color || "green-500"
              } to-${getLighterShade(
                cardInfo.design?.color || "green-500"
              )} bg-gradient-to-br cursor-pointer`}
            >
              {"gradient" == cardInfo.design?.style && (
                <div className="text-white p-1 flex items-center justify-center">
                  <CheckIcon />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <SaveResetCardCustomizer /> */}
    </>
  );
}
