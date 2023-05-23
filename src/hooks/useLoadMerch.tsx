import { useEffect } from "react";
import { useRouter } from "next/router";

import config from "config";
import { Merch } from "types";
import useLoadProgressStore from "stores/useLoadProgressStore";

export default () => {
  const router = useRouter();
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  useEffect(() => {
    if (router.pathname === "/") {
      for (const [k, v] of Object.entries(config.merchUrl)) {
        const image = new Image();
        image.src = v;

        image.onload = () => {
          setLoadProgressStore("html", { [k as Merch]: true });
        }
      }
    }
  }, [router]);
}