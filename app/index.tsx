import { Text, View, Button } from "tamagui";

export default function Index() {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Button
        size={12}
        hoverStyle={{
          scale: 2,
        }}
        pressStyle={{
          scale: 0.9,
        }}
      >
        Push!
      </Button>
    </View>
  );
}
