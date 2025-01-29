import { createTamagui, getConfig } from "@tamagui/core";
import { createAnimations } from "@tamagui/animations-moti";

export const config = createTamagui({
  // act like CSS variables at your root
  tokens: {
    // width="$sm"
    size: { sm: 8, md: 12, lg: 20 },
    // margin="$-sm"
    space: { "-sm": 8 },
    // radius="$none"
    radius: { none: 0, sm: 3 },
    color: { white: "#fff", black: "#000" },
  },
  animations: createAnimations({
    fast: {
      type: "spring",
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
    medium: {
      type: "spring",
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    slow: {
      type: "spring",
      damping: 20,
      stiffness: 60,
    },
  }),

  themes: {
    light: {
      bg: "#f2f2f2",
      color: "#333",
    },
    dark: {
      bg: "#111",
      color: "#000",
    },
  },

  // media query definitions can be used to style,
  // but also can be used with "groups" to do container queries by size:
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  },

  shorthands: {
    px: "paddingHorizontal",
  },

  settings: {
    disableSSR: true, // for client-side apps gains a bit of performance
    allowedStyleValues: "somewhat-strict-web", // if targeting only web
  },
});

// in other files use this:
console.log(`config is`, getConfig());

// get typescript types on @tamagui/core imports:
type AppConfig = typeof config;
declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}
