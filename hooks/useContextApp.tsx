import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

interface AppContextProps {
  theme: string;
  toggleTheme: () => void;
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const themeDevice = useColorScheme() ?? "light";
  const [theme, setTheme] = useState(themeDevice);
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("selectedTheme");
        const storedLanguage = await AsyncStorage.getItem("selectedLanguage");

        if (storedTheme !== null) setTheme(storedTheme as "light" | "dark");
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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    saveSetting("selectedTheme", newTheme);
  };

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    saveSetting("selectedLanguage", newLanguage);
  };
  const contextValue = {
    theme,
    toggleTheme,
    language,
    changeLanguage,
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
