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
      intensity="strong"
      blur={15}
      borderRadius="lg"
      saturate="180%"
      borderIntensity={0.9}
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
      intensity={0.3}
      blur={20}
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

#### Conditional Cursor Effect

```tsx
import { useLiquidGlassCursor } from "liquid-glass-mk";
import { useState } from "react";

function App() {
  const [enableCursor, setEnableCursor] = useState(false);

  useLiquidGlassCursor(
    enableCursor
      ? {
          size: 100,
          blur: 10,
          intensity: 0.2,
        }
      : undefined
  );

  return (
    <div>
      <button onClick={() => setEnableCursor(!enableCursor)}>
        Toggle Cursor Effect
      </button>
    </div>
  );
}
```

## API Reference

### LiquidGlass Props

| Prop              | Type                                        | Default    | Description                                     |
| ----------------- | ------------------------------------------- | ---------- | ----------------------------------------------- |
| `children`        | `React.ReactNode`                           | -          | Content to display inside the glass effect      |
| `intensity`       | `'light' \| 'medium' \| 'strong' \| number` | `'medium'` | Glass effect intensity (0-1 for number)         |
| `blur`            | `number`                                    | `2`        | Backdrop blur amount in pixels                  |
| `borderRadius`    | `number \| string \| 'sm' \| 'md' \| 'lg'`  | `'md'`     | Border radius (px, rem, or keyword)             |
| `saturate`        | `number \| string`                          | `1.8`      | Color saturation (1.8 or "180%")                |
| `borderIntensity` | `'light' \| 'medium' \| 'strong' \| number` | `0.8`      | Border opacity intensity                        |
| `className`       | `string`                                    | -          | Additional CSS classes (Tailwind CSS supported) |
| `style`           | `React.CSSProperties`                       | -          | Custom inline styles                            |
| `ref`             | `React.Ref<HTMLDivElement>`                 | -          | Ref to the glass element                        |
| `onClick`         | `(event: MouseEvent) => void`               | -          | Click handler                                   |
| `onMouseEnter`    | `(event: MouseEvent) => void`               | -          | Mouse enter handler                             |
| `onMouseLeave`    | `(event: MouseEvent) => void`               | -          | Mouse leave handler                             |
| ...               | `React.HTMLAttributes<HTMLDivElement>`      | -          | All standard HTML div attributes                |

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
  // Enable cursor effect
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
        intensity="strong"
        blur={25}
        borderRadius="lg"
        className="p-8 text-white mb-6"
        onClick={() => console.log("Glass clicked!")}
      >
        <h1>Welcome to Liquid Glass</h1>
        <p>Move your mouse to see the cursor effect!</p>
      </LiquidGlass>

      <LiquidGlass
        intensity={0.2}
        blur={15}
        borderRadius="md"
        className="p-6 text-white"
        style={{ backgroundColor: "rgba(255, 0, 0, 0.1)" }}
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
