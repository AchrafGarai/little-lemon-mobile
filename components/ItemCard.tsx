import { Card, Image, H3, Paragraph, YStack, H6, XStack, Text } from "tamagui";
import { MenuItem } from "../consts/types/Menu";
import { View } from "./Themed";
import { StyleSheet } from "react-native";

export const ItemCard = ({ item }: { item: MenuItem }) => (
  <Card overflow="hidden" bordered marginBottom="$4">
    <Card.Header padded>
      <View style={styles.container}>
        <View style={styles.cardDetails}>
          <H6 marginBottom="$2">{item.name}</H6>
          <Paragraph
            fontWeight={"$4"}
            color={"$colorFocus"}
            flexShrink={1}
            flexWrap="wrap"
            marginBottom="$2"
          >
            {item.description}
          </Paragraph>

          <Text fontWeight={"$4"} marginBottom="$2">
            ${item.price}
          </Text>
        </View>

        <Image
          resizeMode="cover"
          alignSelf="center"
          borderRadius={"$4"}
          source={{
            width: 120,
            height: 120,
            uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true`,
          }}
        />
      </View>
    </Card.Header>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    backgroundColor: "var(--background)",
  },
  cardDetails: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
    flexGrow: 1,
    backgroundColor: "var(--background)",
  },
});
