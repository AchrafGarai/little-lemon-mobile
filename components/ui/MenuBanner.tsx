import { View } from "react-native";
import { Card, H2, Paragraph, Image, Input, H3 } from "tamagui";
import { useDebouncedCallback } from "use-debounce";

const MenuBanner = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const debounced = useDebouncedCallback(
    (value) => {
      onSearch(value);
    },
    // delay in ms
    500
  );

  return (
    <View>
      <Card overflow="hidden" bordered>
        <Card.Header padded paddingTop={0}>
          <Image
            marginBottom="$4"
            resizeMode="cover"
            alignSelf="center"
            source={{
              width: 720,
              height: 120,
              uri: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
          <H3>Little Lemon</H3>
          <Paragraph>
            Welcome to Little Lemon, please take a look at our menu and pick
            your favorite dish
          </Paragraph>
        </Card.Header>
        <Card.Footer padded paddingTop="0">
          <Input
            backgroundColor={"$backgroundStrong"}
            flex={1}
            marginRight="$3"
            placeholder="Search our menu"
            onChangeText={(e) => debounced(e)}
          />
          {/* <Button themeInverse>Search</Button> */}
        </Card.Footer>
      </Card>
    </View>
  );
};

export default MenuBanner;
