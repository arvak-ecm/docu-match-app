import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { AppProvider, useAppSettings } from "../hooks/useContextApp";

SplashScreen.preventAutoHideAsync();

declare global {
  namespace ReactNativePaper {
    interface MD3Colors {
      linearGradient: string[];
    }
  }
}
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("@assets/fonts/SpaceMono-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

const MainContent = () => {
  const { paperTheme, isDarkMode } = useAppSettings();

  return (
    <PaperProvider theme={paperTheme}>
      <View>
        <StatusBar style={isDarkMode ? "light" : "dark"} />
      </View>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(check-cl)" options={{ headerShown: false }} />
        <Stack.Screen name="(config)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
};
