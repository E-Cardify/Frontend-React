import Field from "./Field";

// export const defaultCardInterfaceObject: CardInfoInterface = {
//     information: {
//         firstName: "",
//         middleName: "",
//         lastName: "",
//         preferredName: "",
//         maidenName: "",
//         pronouns: "",
//         title: "",
//         department: "",
//         company: "",
//         headline: "",
//         motto: "",
//     },
//     design: {
//         color: "green-500",
//         "style": "solid",
//     },
//     fields: [],
// }

export const getDefaultCardInterfaceObject: () => CardInfoInterface = () => {
  return {
    information: {
      firstName: "",
      middleName: "",
      lastName: "",
      preferredName: "",
      maidenName: "",
      pronouns: "",
      title: "",
      department: "",
      company: "",
      headline: "",
      motto: "",
    },
    design: {
      color: "green-500",
      style: "solid",
    },
    fields: [],
  };
};

export interface CardInfoInterface {
  information: {
    firstName: string;
    middleName: string;
    lastName: string;
    preferredName: string;
    maidenName: string;
    pronouns: string;
    title: string;
    department: string;
    company: string;
    headline: string;
    motto: string;
  };
  design: {
    color: string;
    style: string;
  };
  fields: Field[];
  id?: string;
  isMain?: boolean;
}
