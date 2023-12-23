import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { Stack } from "expo-router";
import {
  YStack,
  Checkbox,
  XStack,
  Label,
  ScrollView,
  Button,
  Separator,
  Form,
  Spinner,
  H2,
  Text,
  Input,
  Paragraph,
} from "tamagui";
import { useUser } from "../../lib/userProvider";
import StaticFrom from "../../components/StaticFrom";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { User } from "../../consts/types/user";

export default function TabOneScreen() {
  const { user, storeUser } = useUser();

  const [status, setStatus] = useState<"off" | "submitting" | "submitted">(
    "off"
  );

  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("off"), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isLoading },
  } = useForm<User>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
  });

  const onSubmit = async (data: User) => {
    await storeUser(data);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.root}>
          <Stack.Screen
            options={{
              title: "Profile",
            }}
          />
          <Form
            marginTop="$10"
            gap="$2"
            onSubmit={() => setStatus("submitting")}
            paddingBottom={"$2"}
            flexGrow={1}
          >
            <ScrollView flex={1}>
              <YStack marginBottom={"$2"} space={"$3"}>
                <H2 fontSize={"$6"}>Personal Information</H2>
                <Paragraph color={"$colorFocus"}>
                  Update your profile information now
                </Paragraph>
              </YStack>
              <Controller
                control={control}
                rules={{
                  required: "Name is required!",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Label>Full Name</Label>
                    <Input
                      defaultValue={user?.name}
                      placeholder="First name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      marginBottom="$3"
                    />
                  </>
                )}
                name="name"
              />

              {errors.name && (
                <Text fontSize={12} textAlign="right">
                  {errors.name.message}
                </Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: "E-mail is required!",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Label>Email</Label>
                    <Input
                      defaultValue={user?.email}
                      placeholder="E-mail Address"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      marginBottom="$3"
                    />
                  </>
                )}
                name="email"
              />

              {errors.email && (
                <Text fontSize={12} textAlign="right">
                  {errors.email.message}
                </Text>
              )}
            </ScrollView>
            <Separator marginTop="$4" marginBottom="$4" />
            <StaticFrom />
            <Separator marginTop="$4" marginBottom="$4" />
            <Button width={"100%"}>Logout</Button>
            <Separator marginTop="$4" marginBottom="$4" />
            <XStack space="$4" flexGrow={1}>
              <Button flexGrow={1}>Discard Changes</Button>
              <Form.Trigger asChild disabled={status !== "off"}>
                <Button
                  flexGrow={1}
                  icon={status === "submitting" ? () => <Spinner /> : undefined}
                  onPress={handleSubmit(onSubmit)}
                >
                  Save Changes
                </Button>
              </Form.Trigger>
            </XStack>
          </Form>
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
});
