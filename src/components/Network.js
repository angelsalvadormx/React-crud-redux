const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
export const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));
