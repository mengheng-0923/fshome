declare module '*.css';
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*aos';
declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
