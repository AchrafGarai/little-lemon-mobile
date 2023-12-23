import React from "react";
import { View, Text, Avatar } from "tamagui";
import { Link } from "expo-router";
import { useUser } from "../../lib/userProvider";
const ProfileButton = () => {
  const { user } = useUser();
  const initials = user?.name.slice(0, 2);
  return (
    <Link href={"/(app)/profile"}>
      <View padding="$2">
        <Avatar circular size="$3">
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback
            backgroundColor="$blue10Dark"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text>{initials}</Text>
          </Avatar.Fallback>
        </Avatar>
      </View>
    </Link>
  );
};

export default ProfileButton;
