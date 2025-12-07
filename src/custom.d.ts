declare module '*.css';
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*aos';
declare module '*jsx';
declare module '*antd-style';
declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
