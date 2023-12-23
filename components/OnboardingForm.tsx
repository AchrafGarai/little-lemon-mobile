import React, { useEffect, useState } from "react";
import { Label, Text, H2, Form, Spinner, ScrollView } from "tamagui";
import { Button, Input, YStack } from "tamagui";
import { useForm, Controller } from "react-hook-form";
import { User } from "../consts/types/user";

import { useRouter } from "expo-router";
import { useUser } from "../lib/userProvider";

const OnboardingForm = () => {
  const { storeUser } = useUser();

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
      name: "",
      email: "",
    },
  });
  const onSubmit = async (data: User) => {
    await storeUser(data);
  };

  return (
    <>
      <Form
        marginTop="$10"
        gap="$2"
        onSubmit={() => setStatus("submitting")}
        paddingBottom={"$2"}
        flexGrow={1}
      >
        <ScrollView flex={1}>
          <YStack marginBottom={"$2"} space={"$3"}>
            <H2 fontSize={"$6"}>Welcome to little lemon</H2>
            <Text color={"$colorFocus"}>
              Welcome to little lemon please fill the the information about
              yourself to access the menu
            </Text>
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
        <Form.Trigger asChild disabled={status !== "off"}>
          <Button
            icon={status === "submitting" ? () => <Spinner /> : undefined}
            onPress={handleSubmit(onSubmit)}
            // disabled={!isValid}
          >
            Submit
          </Button>
        </Form.Trigger>
      </Form>
    </>
  );
};

export default OnboardingForm;
