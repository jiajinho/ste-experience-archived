import config from "@/config";

export default (path: string) => {
  const devUrl = `/${path}`;
  const prodUrl = `${config.cdnBaseUrl}/${path}`;

  const url = process.env.NODE_ENV === "production" ? prodUrl : devUrl;

  return url;
}