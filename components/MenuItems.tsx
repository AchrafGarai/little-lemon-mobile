import React, { useEffect, useState } from "react";
import { View } from "./Themed";
import { Menu, MenuItem } from "../consts/types/Menu";
import useSWR from "swr";
import useMenuItems from "../lib/useMenu";
import { YStack, Text } from "tamagui";
import { FlatList } from "react-native";
import { ItemCard } from "./ItemCard";

type Props = {
  menuItems: MenuItem[] | undefined;
};
export const MenuList = ({ menuItems }: Props) => {
  return (
    <View>
      {/* {JSON.stringify(menuItems)} */}

      <FlatList
        data={menuItems}
        renderItem={ItemCard}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
