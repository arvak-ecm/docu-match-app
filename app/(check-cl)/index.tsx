import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

const listPropertyCheck = [
  "Número de la cuenta corriente y número de documento",
  "Serie y letras o códigos internos institución",
  "Nombre del titular",
  "Importe numérico en pesos",
  "Codificación de institución, sucursal y código de seguridad",
  "Ciudad de giro",
  "Fecha de giro",
  "Nombre del beneficiario y el importe del documento expresado en palabras",
  "Nombre de la institución bancaria, logo, dirección y otros",
  "Sector para la firma del cliente",
  "Espacio sugerido para cruzar el cheque",
  "Franja libre reservada para la impresión de los caracteres CMC-7",
];

const index = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={210} name="code-slash" />}
    >
      <View>
        <ThemedText type="title">Modelo de Cheque</ThemedText>
      </View>
      <View style={styles.list}>
        {listPropertyCheck.map((item, index) => (
          <ThemedText key={index} type="list">
            {index + 1} - {item}
          </ThemedText>
        ))}
      </View>
    </ParallaxScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  pageHeader: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    width: "100%",
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  list: {
    flex: 1,
    padding: 20,
  },
});
