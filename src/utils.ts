import config from "./config";

export function applyStyleIf(predicate: boolean, style: string) {
  if (predicate) return style;
  return '';
}

export function clamp(value: number, min: number, max: number) {
  if (value > max) return max;
  if (value < min) return min;
  return value;
}

export function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function getAssetEnvUrl(path: string) {
  const devUrl = `/${path}`;
  const prodUrl = `${config.cdnBaseUrl}/${path}`;

  const url = process.env.NODE_ENV === "production" ? prodUrl : devUrl;

  return url;
}