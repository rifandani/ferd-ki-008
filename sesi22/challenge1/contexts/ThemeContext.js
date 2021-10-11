import React from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState({
    isLightMode: true,
    light: {
      headerBg: "blue.100",
      headerTitleColor: "coolGray.800",
      itemBorderColor: "coolGray.200",
      itemBg: "coolGray.50",
      itemFullname: "coolGray.800",
      itemAddress: "coolGray.500",
      itemEmail: "red.500",
    },
    dark: {
      headerBg: "blue.600",
      headerTitleColor: "coolGray.100",
      itemBorderColor: "coolGray.200",
      itemBg: "coolGray.800",
      itemFullname: "coolGray.200",
      itemAddress: "coolGray.500",
      itemEmail: "red.500",
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
