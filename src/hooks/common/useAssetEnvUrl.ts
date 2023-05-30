import config from "@/config";
import useEnvStore from "@/stores/useEnvStore"

export default (path: string) => {
  const env = useEnvStore(state => state.env);

  const devUrl = `/${path}`;
  const prodUrl = `${config.cdnBaseUrl}/${path}`;

  const url = env === "production" ? prodUrl : devUrl;

  return url;
}