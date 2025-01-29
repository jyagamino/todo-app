import { Stack } from "expo-router";
import { TamaguiProvider, View } from "tamagui";
import { config } from "../tamagui.config";

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack />
    </TamaguiProvider>
  );
}
