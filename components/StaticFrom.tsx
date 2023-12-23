import { View, Text } from "react-native";
import React from "react";
import { Checkbox, Label, XStack, YStack } from "tamagui";

const StaticFrom = () => {
  return (
    <YStack width={300} alignItems="center" space="$2">
      <XStack width={300} alignItems="center" space="$4">
        <Checkbox size="$4">
          <Checkbox.Indicator>
            <Text>✅</Text>
          </Checkbox.Indicator>
        </Checkbox>
        <Label>Special offers</Label>
      </XStack>
      <XStack width={300} alignItems="center" space="$4">
        <Checkbox size="$4">
          <Checkbox.Indicator>
            <Text>✅</Text>
          </Checkbox.Indicator>
        </Checkbox>
        <Label>Newsletter</Label>
      </XStack>
      <XStack width={300} alignItems="center" space="$4">
        <Checkbox size="$4">
          <Checkbox.Indicator>
            <Text>✅</Text>
          </Checkbox.Indicator>
        </Checkbox>
        <Label>Checkbox</Label>
      </XStack>
    </YStack>
  );
};

export default StaticFrom;
