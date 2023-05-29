import { useEffect } from "react";

import config from "@/config";
import { Merch } from "@/types";
import useLoadProgressStore from "@/stores/useLoadProgressStore";
import useEnvStore from "@/stores/useEnvStore";

export default () => {
  const env = useEnvStore(state => state.env);
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  useEffect(() => {
    for (const [k, v] of Object.entries(config.merchUrl)) {
      const image = new Image();

      const devUrl = `/${v}`;
      const prodUrl = `${config.cdnBaseUrl}/${v}`;

      const url = env === "production" ? prodUrl : devUrl;

      image.src = url;

      image.onload = () => {
        setLoadProgressStore("html", { [k as Merch]: true });
      }
    }
  }, [env]);
}