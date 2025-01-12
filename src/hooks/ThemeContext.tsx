import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextType {
    theme: "dark" | "light";
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

let userTheme = localStorage.getItem("userTheme") as "dark" | "light" || "dark";
if (userTheme !== "light" && userTheme !== "dark") {
    userTheme = "dark";
}

function ThemeProvider(props: { children: ReactNode }) {
    const [theme, setTheme] = useState<"dark" | "light">(userTheme);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("userTheme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("userTheme", "light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };