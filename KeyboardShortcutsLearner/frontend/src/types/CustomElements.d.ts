import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "show-keystrokes": {
        // What keys to display
        keystrokes?: "all" | "shortcuts" | "navigational" | "none";

        // Visual theme
        theme?: "modern" | "mechanical";

        // Light/dark appearance
        "color-scheme"?: "light" | "dark";

        // Component size
        size?: "small" | "medium" | "large" | "x-large" | "xx-large";

        // Position
        position?:
          | "normal"
          | "viewport"
          | "pointer"
          | `viewport ${"top" | "center" | "bottom"} ${
              | "left"
              | "center"
              | "right"}`
          | `pointer ${"top" | "center" | "bottom"} ${
              | "left"
              | "center"
              | "right"}`;

        // How key names are displayed
        notation?: "symbols" | "text";

        // Delay before hiding, in milliseconds
        "hide-delay"?: number | string;

        // Fade-out duration, in milliseconds
        "hide-duration"?: number | string;

        // Static keycaps
        keys?: string;

        // Disable the visualizer
        disabled?: boolean;
      };
    }
  }
}
