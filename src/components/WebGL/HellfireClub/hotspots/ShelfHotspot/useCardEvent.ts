import useCardStore from 'stores/html/useCardStore';
import { Asset } from 'types';

export default (merch: Asset.Merch) => {
  const set = useCardStore(state => state.set);

  const onClick = () => {
    set("merch", merch);
    set("htmlEvent", "merch");
  }

  return { onClick }
}