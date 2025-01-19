import Field from "./Field";

export interface CardInfoInterface {
    information: {
        firstName?: string;
        middleName?: string;
        lastName?: string;
        preferredName?: string;
        maidenName?: string;
        pronouns?: string;
        title?: string;
        department?: string;
        company?: string;
        headline?: string;
        motto?: string;
    };
    design: {
        color?: string;
        style?: string;
    };
    fields: Field[],
}
