export type CSSValue =
  | number
  | `${number}px`
  | `${number}rem`
  | `${number}em`
  | `${number}vh`
  | `${number}vw`
  | `${number}%`
  | `${number}.${number}px`
  | `${number}.${number}rem`
  | `${number}.${number}em`
  | `${number}.${number}vh`
  | `${number}.${number}vw`
  | `${number}.${number}%`;

export type RGBString =
  | `${number}, ${number}, ${number}`
  | `${number},${number},${number}`;
