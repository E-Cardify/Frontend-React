// import CardPreviewCard from "@components/CardPreviewCard";
// import { useTranslation } from "react-i18next";
// import { useState } from "react";
// import { CardInfoInterface } from "@interfaces/CardInfoInterface";
// import { Information } from "@pages/CardCreationComponent/components/Information/Information";
// import { Display } from "@pages/CardCreationComponent/components/Display/Display";
// import { Fields } from "@pages/CardCreationComponent/components/Fields/Fields";
// import { ButtonHorizontalNavBar } from "@components/ui/Buttons/ButtonHorizontalNavBar";
// import useViewContext from "@contexts/useViewContext";

// export function CardEditingComponent() {
//   const { t } = useTranslation();
//   const { editingCardInfo } = useViewContext();

//   const [cardInfo, setCardInfo] = useState<CardInfoInterface>(editingCardInfo);

//   const [currentTab, setCurrentTab] = useState<
//     "Display" | "Information" | "Fields"
//   >("Information");

//   const handleSetCurrentTab = (
//     newTab: "Display" | "Information" | "Fields"
//   ) => {
//     setCurrentTab(newTab);
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-2 h-full">
//         <div className="flex-1 flex justify-center items-center">
//           {/* Preview */}
//           <div className="p-20">
//             <CardPreviewCard cardInfo={cardInfo} />
//           </div>

//           {/* Information Inputs */}
//           <div className="flex-1 bg-white dark:bg-neutral-900 dark:border-black dark:text-white flex flex-col rounded-lg border-2 p-2 ute">
//             <h1 className="font-Montserrat font-bold text-3xl">
//               {t("Card customizer")}
//             </h1>
//             <div className="flex mt-2 border-b-2">
//               <ButtonHorizontalNavBar
//                 text="Display"
//                 currentView={currentTab}
//                 onClick={() => {
//                   handleSetCurrentTab("Display");
//                 }}
//               />
//               <ButtonHorizontalNavBar
//                 text="Information"
//                 currentView={currentTab}
//                 onClick={() => {
//                   handleSetCurrentTab("Information");
//                 }}
//               />
//               <ButtonHorizontalNavBar
//                 isBeta={true}
//                 text="Fields"
//                 currentView={currentTab}
//                 onClick={() => {
//                   handleSetCurrentTab("Fields");
//                 }}
//               />
//             </div>
//             <div className="flex-1 px-4 py-2">
//               {currentTab == "Information" && (
//                 <>
//                   <Information />
//                 </>
//               )}
//               {currentTab == "Display" && (
//                 <>
//                   <Display />
//                 </>
//               )}
//               {currentTab == "Fields" && (
//                 <>
//                   <Fields />
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
