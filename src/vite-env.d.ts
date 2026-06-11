
/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react' {
  export type ReactNode = any;
  export type ComponentProps<T> = any;
  export const StrictMode: any;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): { render(children: any): void };
}

declare module 'framer-motion' {
  export const motion: any;
}

declare module 'lucide-react' {
  export const ArrowRight: any;
  export const Banknote: any;
  export const Blocks: any;
  export const CircleDollarSign: any;
  export const Code2: any;
  export const Coins: any;
  export const GitBranch: any;
  export const Github: any;
  export const Handshake: any;
  export const Landmark: any;
  export const LockKeyhole: any;
  export const Menu: any;
  export const Network: any;
  export const Rocket: any;
  export const ShieldCheck: any;
  export const Sparkles: any;
  export const Users: any;
  export const Vote: any;
  export const Wallet: any;
  export const Zap: any;
}


declare module '*.css';
