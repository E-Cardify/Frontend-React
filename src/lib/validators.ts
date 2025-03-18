import { emailSchema, namesSchema, passwordSchema } from "./schemas";

const emailValidator = (value: string) => {
  const parsed = emailSchema.safeParse(value);

  if (parsed.success) return null;
  return parsed.error.issues[0].message;
};

const passwordValidator = (value: string) => {
  const parsed = passwordSchema.safeParse(value);

  if (parsed.success) return null;
  return parsed.error.issues[0].message;
};

const namesValidator = (value: string) => {
  const parsed = namesSchema.safeParse(value);
  if (parsed.success) return null;
  return parsed.error.issues[0].message;
};

export { emailValidator, passwordValidator, namesValidator };
