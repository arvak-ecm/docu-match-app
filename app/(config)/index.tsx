import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Avatar, Card, MD3Colors, useTheme } from "react-native-paper";
import { useAppSettings } from "../../hooks/useContextApp";

export default function ConfigPage() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const theme = useTheme();
  const { themeApp, toggleTheme, paperTheme } = useAppSettings();

  useEffect(() => {
    if (themeApp === "light") {
      setIsSwitchOn(false);
    } else if (themeApp === "dark") {
      setIsSwitchOn(true);
    }
  }, [themeApp]);

  const onToggleSwitch = () => {
    const theme = !isSwitchOn ? "light" : "dark";
    toggleTheme(theme);
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<TabBarIcon size={210} name="code-slash" />}
    >
      <Pressable onPress={onToggleSwitch}>
        <Card elevation={2} style={{ backgroundColor: paperTheme.colors.secondaryContainer }}>
          <Card.Title
            style={styles.card}
            title="Tema de la aplicación"
            subtitle={isSwitchOn ? "Modo oscuro" : "Modo claro"}
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon={isSwitchOn ? "moon-waxing-crescent" : "white-balance-sunny"}
                style={{ backgroundColor: paperTheme.colors.secondary }}
              />
            )}
          />
        </Card>
      </Pressable>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  containerThemed: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  card: {
    borderRadius: 8,
    borderColor: MD3Colors.primary20,
    elevation: 2,
  },
  checkboxChecked: {
    backgroundColor: "coral",
  },
  themedActivated: {
    color: MD3Colors.primary20,
  },
  themedDeactivated: {
    color: MD3Colors.primary80,
  },
});
