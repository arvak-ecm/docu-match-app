import { Dark, Light } from "@/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { DefaultTheme, MD3DarkTheme, MD3LightTheme } from "react-native-paper";

const themeLight = {
  ...DefaultTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...Light,
  },
};

const themeDark = {
  ...DefaultTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...Dark,
  },
};
interface AppContextProps {
  themeApp: string;
  toggleTheme: (selectTheme: string) => void;
  language: string;
  changeLanguage: (newLanguage: string) => void;
  paperTheme: typeof themeLight | typeof themeDark;
  isDarkMode: boolean;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const themeDevice = useColorScheme() ?? "light";
  const [isDarkMode, setIsDarkMode] = useState(themeDevice === "dark");
  const [themeApp, setThemeApp] = useState(themeDevice);
  const [language, setLanguage] = useState("es");
  const [paperTheme, setPaperTheme] = useState(themeLight);

  useEffect(() => {
    if (themeApp === "light") {
      setPaperTheme(themeLight);
    } else if (themeApp === "dark") {
      setPaperTheme(themeDark);
    } else {
      setPaperTheme(themeLight); // default to light theme
    }
  }, [themeApp]);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("selectedTheme");
        const storedLanguage = await AsyncStorage.getItem("selectedLanguage");

        if (storedTheme !== null) setThemeApp(storedTheme as "light" | "dark");
        if (storedLanguage !== null) setLanguage(storedLanguage);
      } catch (error) {
        console.error("Failed to load settings", error);
      }
    };

    loadSettings();
  }, []);

  const saveSetting = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error("Failed to save setting", error);
    }
  };

  const toggleTheme = (selectTheme: string) => {
    const newTheme = selectTheme === "light" ? "dark" : "light";
    setThemeApp(newTheme);
    setIsDarkMode(newTheme === "dark");
    saveSetting("selectedTheme", newTheme);
  };

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    saveSetting("selectedLanguage", newLanguage);
  };
  const contextValue = {
    isDarkMode,
    themeApp,
    toggleTheme,
    language,
    changeLanguage,
    paperTheme,
  };
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppSettings = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppSettings must be used within an AppProvider");
  }
  return context;
};
