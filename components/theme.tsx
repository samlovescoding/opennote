import { createContext, useContext } from "react";
import { getDisclosureDefault, useDisclosure } from "helpers/disclosure";

export const ThemeContext = createContext({
    sidebar: getDisclosureDefault(true, "sidebar-open"),
});

export const ThemeProvider = ({ children }) => {
    const sidebar = useDisclosure(true, "sidebar-open");
    return (
        <ThemeContext.Provider value={{ sidebar }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (key = null) => {
    const theme = useContext(ThemeContext);
    if (key) {
        return theme[key];
    } else {
        return theme;
    }
};

export type TypeColor =
    | "primary"
    | "warning"
    | "danger"
    | "success"
    | "info"
    | "secondary";
