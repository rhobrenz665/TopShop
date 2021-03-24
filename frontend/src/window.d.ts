import MyInterface from './MyInterface';

declare global {
  interface Window {
    paypal: MyInterface;
  }
}
