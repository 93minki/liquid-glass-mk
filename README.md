# Liquid Glass MK

A beautiful React library for creating liquid glass effects with customizable hover animations.

## Features

- �� Beautiful liquid glass effects with backdrop blur
- ⚡ Smooth hover animations with customizable scaling
- 🎛️ Highly customizable with props
- 📱 Responsive and mobile-friendly
- �� TypeScript support
- 🎯 Zero dependencies (except React)

## Installation

```bash
npm install liquid-glass-mk
```

## Usage

### Basic Usage

```tsx
import { LiquidGlass } from 'liquid-glass-mk';

function App() {
  return (
    <LiquidGlass>
      <p>Your content here</p>
    </LiquidGlass>
  );
}
```

### Advanced Usage

```tsx
import { LiquidGlass } from 'liquid-glass-mk';

function App() {
  return (
    <LiquidGlass
      intensity="strong"
      blur={15}
      size="lg"
      defaultHoverScale={1.1}
      onMouseEnter={() => console.log('Hovered!')}
      customHoverStyle={{
        transform: 'rotate(5deg) scale(1.1)',
      }}
    >
      <p>Advanced liquid glass effect</p>
    </LiquidGlass>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content to display inside the glass effect |
| `intensity` | `'light' \| 'medium' \| 'strong' \| number` | `'medium'` | Glass effect intensity |
| `blur` | `number` | `10` | Backdrop blur amount in pixels |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Border radius size |
| `defaultHoverScale` | `number` | `1.05` | Scale factor on hover |
| `disableDefaultHover` | `boolean` | `false` | Disable default hover effects |
| `onMouseEnter` | `() => void` | - | Custom mouse enter handler |
| `onMouseLeave` | `() => void` | - | Custom mouse leave handler |
| `customHoverStyle` | `React.CSSProperties` | - | Custom hover styles |
| `customBaseStyle` | `React.CSSProperties` | - | Custom base styles |
| `className` | `string` | - | Additional CSS classes |

## License

MIT