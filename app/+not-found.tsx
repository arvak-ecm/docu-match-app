import { Link, Stack, usePathname, useRouter, useSegments } from "expo-router";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  const router = useRouter();
  const segments = useSegments();
  const pathname = usePathname();
  const routes = segments.map((segment) => `/${segment}`);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text>pathname: {pathname}</Text>
        <Link href="/" style={styles.link}>
          <Text>Go to home screen!</Text>
        </Link>
        <FlatList
          data={routes}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.routeItem}>
              <Text style={styles.routeText}>{item}</Text>
              <Button title="Go" onPress={() => router.push(item)} />
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  routeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
  routeText: {
    fontSize: 16,
  },
});
