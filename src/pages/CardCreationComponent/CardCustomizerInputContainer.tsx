// import { CardInfoInterface } from "@interfaces/CardInfoInterface";
// import useCardCreationTabContext from "@contexts/useCardCreationTabContext";
// import { useTranslation } from "react-i18next";
// import Input from "@components/ui/Input";
// import { ActionIcon, Textarea } from "@mantine/core";
// import CodeSandBox from "../../assets/icons/CodeSandBox";
// import { rewriteCardDescription } from "../../lib/api";
// import socket from "../../lib/socket.io";
// import { useState } from "react";

// export default function CardCustomizerInputContainer(props: {
//   label: string;
//   path: keyof CardInfoInterface["information"];
//   isTextArea?: boolean;
//   useAi?: boolean;
// }) {
//   const { cardInfo, setCardInfo } = useCardCreationTabContext();
//   const { t } = useTranslation();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleValueChange = (newValue: string) => {
//     setCardInfo((prevCardInfo) => ({
//       ...prevCardInfo,
//       information: {
//         ...prevCardInfo.information,
//         [props.path]: newValue,
//       },
//     }));
//   };

//   const rewriteHandler = () => {
//     if (props.useAi) {
//       setIsLoading(true);
//       console.log(cardInfo.information[props.path]);
//       rewriteCardDescription(cardInfo.information[props.path]);

//       let dataString = "";
//       handleValueChange(dataString);

//       const rewriteDataDescriptionSocket = socket.on(
//         "rewrite-card-description",
//         (data) => {
//           dataString += data;
//           handleValueChange(dataString);
//         }
//       );

//       socket.on("terminate", () => {
//         rewriteDataDescriptionSocket.off();
//         setIsLoading(false);
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col gap-1.5">
//       <label
//         className="font-Poppins font-semibold text-neutral-500"
//         htmlFor={props.path}
//       >
//         {t(props.label)}:
//       </label>

//       {!props.isTextArea && (
//         <Input
//           title=""
//           id={props.path}
//           value={cardInfo.information[props.path]}
//           onChange={(e) => {
//             handleValueChange(e.target.value);
//           }}
//         />
//       )}

//       {props.isTextArea && (
//         <>
//           <Textarea
//             radius="md"
//             label={props.label}
//             placeholder="Input placeholder"
//             value={cardInfo.information[props.path]}
//             autosize
//             onChange={(e) => {
//               handleValueChange(e.target.value);
//             }}
//             resize="vertical"
//             leftSection={
//               <>
//                 {props.useAi && (
//                   <ActionIcon
//                     loading={isLoading}
//                     variant="gradient"
//                     gradient={{ from: "blue", to: "teal", deg: 124 }}
//                     aria-label="Generate better response"
//                     onClick={rewriteHandler}
//                   >
//                     <CodeSandBox width="24px" height="24px" />
//                   </ActionIcon>
//                 )}
//               </>
//             }
//           />
//         </>
//       )}
//     </div>
//   );
// }
