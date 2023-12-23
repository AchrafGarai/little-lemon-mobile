import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { useUser } from "../../lib/userProvider";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function Layout() {
  const { user } = useUser();
  const isHeaderShown = user === null ? false : true;
  const colorScheme = useColorScheme();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitleStyle: {
            fontWeight: "600",
          },
        }}
      />
    </Stack>
  );
}
