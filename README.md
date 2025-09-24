# Liquid Glass MK

A beautiful React library for creating liquid glass effects with customizable animations and cursor effects.

## Features

- Beautiful liquid glass effects with backdrop blur
- Smooth hover animations with customizable scaling
- Highly customizable with props
- Responsive and mobile-friendly
- TypeScript support
- Zero dependencies (except React)
- Cursor effect utility for enhanced user experience

## Installation

```bash
npm install liquid-glass-mk
```

## Usage

### LiquidGlass Component

#### Basic Usage

```tsx
import { LiquidGlass } from "liquid-glass-mk";

function App() {
  return (
    <LiquidGlass>
      <p>Your content here</p>
    </LiquidGlass>
  );
}
```

#### Advanced Usage

```tsx
import { LiquidGlass } from "liquid-glass-mk";

function App() {
  return (
    <LiquidGlass
      glassRadius="2rem"
      glassBlur={15}
      glassSaturate="180%"
      glassBrightness={1.2}
      glassBorder={2}
      glassAlpha={0.2}
      glassBg="255, 255, 255"
      className="p-6 text-white"
      style={{ margin: "20px" }}
    >
      <h2>Advanced liquid glass effect</h2>
      <p>This has custom styling and effects</p>
    </LiquidGlass>
  );
}
```

#### Custom Styling with Tailwind CSS

```tsx
import { LiquidGlass } from "liquid-glass-mk";

function App() {
  return (
    <LiquidGlass
      glassAlpha={0.3}
      glassBlur={20}
      glassRadius="1rem"
      className="bg-red-500 text-white p-4 rounded-lg shadow-lg"
      onClick={() => console.log("Clicked!")}
    >
      <h2>Custom Styled Glass</h2>
    </LiquidGlass>
  );
}
```

### LiquidGlass Cursor Effect

#### Basic Cursor Effect

```tsx
import { useLiquidGlassCursor } from "liquid-glass-mk";

function App() {
  useLiquidGlassCursor();

  return (
    <div>
      <h1>Move your mouse to see the cursor effect!</h1>
    </div>
  );
}
```

#### Advanced Cursor Effect

```tsx
import { useLiquidGlassCursor } from "liquid-glass-mk";

function App() {
  useLiquidGlassCursor({
    size: 120,
    blur: 15,
    intensity: 0.3,
    zIndex: 9999,
  });

  return (
    <div>
      <h1>Custom cursor effect</h1>
    </div>
  );
}
```

## API Reference

### LiquidGlass Props

| Prop              | Type                                   | Default           | Description                                     |
| ----------------- | -------------------------------------- | ----------------- | ----------------------------------------------- |
| `children`        | `React.ReactNode`                      | -                 | Content to display inside the glass effect      |
| `glassRadius`     | `number \| string`                     | `"md"`            | Border radius (px, rem, em, vh, vw, %)          |
| `glassBg`         | `string`                               | `"255, 255, 255"` | RGB background color (format: "r,g,b")          |
| `glassAlpha`      | `number`                               | `0.16`            | Background opacity (0-1)                        |
| `glassBlur`       | `number \| string`                     | `2`               | Backdrop blur amount (px, rem, em, vh, vw)      |
| `glassSaturate`   | `number \| string`                     | `1.8`             | Color saturation (number or "180%")             |
| `glassBrightness` | `number`                               | `1.05`            | Color brightness multiplier                     |
| `glassBorder`     | `number \| string`                     | `1`               | Border width (px, rem, em, vh, vw)              |
| `className`       | `string`                               | -                 | Additional CSS classes (Tailwind CSS supported) |
| `style`           | `React.CSSProperties`                  | -                 | Custom inline styles                            |
| `ref`             | `React.Ref<HTMLDivElement>`            | -                 | Ref to the glass element                        |
| `onClick`         | `(event: MouseEvent) => void`          | -                 | Click handler                                   |
| `onMouseEnter`    | `(event: MouseEvent) => void`          | -                 | Mouse enter handler                             |
| `onMouseLeave`    | `(event: MouseEvent) => void`          | -                 | Mouse leave handler                             |
| ...               | `React.HTMLAttributes<HTMLDivElement>` | -                 | All standard HTML div attributes                |

### useLiquidGlassCursor Options

| Option      | Type     | Default | Description                         |
| ----------- | -------- | ------- | ----------------------------------- |
| `size`      | `number` | `100`   | Size of the cursor effect in pixels |
| `blur`      | `number` | `20`    | Blur amount for the cursor effect   |
| `intensity` | `number` | `0.1`   | Opacity intensity (0-1)             |
| `zIndex`    | `number` | `9999`  | Z-index of the cursor element       |

## Examples

### Complete Example with Both Components

```tsx
import { LiquidGlass, useLiquidGlassCursor } from "liquid-glass-mk";
import { useEffect } from "react";

function App() {
  useLiquidGlassCursor({
    size: 80,
    blur: 10,
    intensity: 0.2,
  });

  return (
    <div
      style={{
        background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <LiquidGlass
        glassAlpha={0.2}
        glassBlur={25}
        glassRadius="2rem"
        glassSaturate={2.0}
        className="p-8 text-white mb-6"
        onClick={() => console.log("Glass clicked!")}
      >
        <h1>Welcome to Liquid Glass</h1>
        <p>Move your mouse to see the cursor effect!</p>
      </LiquidGlass>

      <LiquidGlass
        glassAlpha={0.2}
        glassBlur={15}
        glassRadius="1rem"
        glassBg="255, 0, 0"
        className="p-6 text-white"
      >
        <h2>Custom Styled Glass</h2>
        <p>This glass has custom background color</p>
      </LiquidGlass>
    </div>
  );
}
```

## Development

This repository includes a development environment for testing and showcasing the library features.

### Running the Development Server

```bash
# Clone the repository
git clone https://github.com/93minki/liquid-glass-mk.git
cd liquid-glass-mk

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:5173` and you can see various examples of the LiquidGlass component and cursor effects in action.

**Note:** The development files (`App.tsx`, `main.tsx`, etc.) are not included in the published npm package. They are only used for development and testing purposes.

## License

MIT
