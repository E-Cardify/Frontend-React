import { createTheme } from "@mantine/core";

const colors = {
  lightGray: "oklch(0.556 0 0)",
  darkGray: "oklch(0.356 0 0)",
};

const Loader = {
  defaultProps: {
    type: "dots",
  },
};

const label = {
  fontWeight: "bold",
  fontSize: "16px",
  color: colors.lightGray,
};

const Input = {
  styles: {
    label,
    input: {
      borderRadius: "8px",
      border: "5px solid inherit",
      fontSize: "15px",
    },
  },
};

const TextInput = {
  ...Input,
};

const PasswordInput = {
  ...Input,
};

const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
  components: {
    Input,
    TextInput,
    PasswordInput,
    Loader,
    Title: {
      defaultProps: {
        pb: "5",
      },
    },
    Divider: {
      defaultProps: {
        pb: "20",
      },
    },
  },
});

export default theme;
