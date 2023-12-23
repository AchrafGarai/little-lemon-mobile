import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { H6, ScrollView, YStack, Text } from "tamagui";
import OnboardingForm from "../../components/OnboardingForm";
import { Stack } from "expo-router";
import { useUser } from "../../lib/userProvider";
import ProfileButton from "../../components/ui/ProfileButton";
import MenuBanner from "../../components/ui/MenuBanner";
import { MenuList } from "../../components/MenuItems";
import useMenuItems from "../../lib/useMenu";

export default function TabOneScreen() {
  const { user } = useUser();
  const { menuItems, setSearchTerm, searchTerm } = useMenuItems();
  const isHeaderShown = user === null ? false : true;
  const handleSearch = (value: string) => {
    console.log(value, searchTerm);
    setSearchTerm(value);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.root}>
          <Stack.Screen
            options={{
              headerShown: isHeaderShown,
              title: "Little Lemon",
              headerRight: () => <ProfileButton />,
            }}
          />
          {user ? (
            <YStack space="$4" marginTop={"$4"}>
              {/* <H6 marginBottom="$2">Welcome {user.name}</H6> */}
              <MenuBanner onSearch={handleSearch} />
              <Text marginTop="$4" marginBottom="$2">
                Explore our dishes
              </Text>
              {/* TODO Item list */}
              <MenuList menuItems={menuItems} />
            </YStack>
          ) : (
            <OnboardingForm />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  root: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 720,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
