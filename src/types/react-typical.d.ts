// src/types/react-typical.d.ts

declare module 'react-typical' {
  import * as React from 'react';

  interface TypicalProps {
    steps: (string | number)[];
    loop?: number | boolean;
    wrapper?: keyof JSX.IntrinsicElements | React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  }

  const Typical: React.FC<TypicalProps>;

  export default Typical;
}
