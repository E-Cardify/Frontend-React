import { useTranslation } from "react-i18next";
import CardCustomizerInputContainer from "../../CardCustomizerInputContainer";
import { SaveResetCardCustomizer } from "../../SaveResetCardCustomizer";

export function Information() {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-h-[70vh] max-h-[70vh] overflow-auto">
        <div>
          <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">
            {t("Personal")}
          </h1>
          <div className="px-3 flex flex-col gap-5 py-3">
            <CardCustomizerInputContainer label="First Name" path="firstName" />
            <CardCustomizerInputContainer
              label="Middle Name"
              path="middleName"
            />
            <CardCustomizerInputContainer label="Last Name" path="lastName" />
            <CardCustomizerInputContainer
              label="Preferred Name"
              path="preferredName"
            />
            <CardCustomizerInputContainer
              label="Maiden Name"
              path="maidenName"
            />
            <CardCustomizerInputContainer label="Pronouns" path="pronouns" />
            <CardCustomizerInputContainer
              label="Motto"
              path="motto"
              isTextArea={true}
            />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">
            {t("Affiliation")}
          </h1>
          <div className="px-3 flex flex-col gap-5 py-3">
            <CardCustomizerInputContainer
              label="Title"
              path="title"
              isTextArea={true}
            />
            <CardCustomizerInputContainer
              label="Department"
              path="department"
            />
            <CardCustomizerInputContainer label="Company" path="company" />
            <CardCustomizerInputContainer
              label="Headline"
              path="headline"
              useAi={true}
              isTextArea={true}
            />
          </div>
        </div>
      </div>
      <SaveResetCardCustomizer />
    </>
  );
}
