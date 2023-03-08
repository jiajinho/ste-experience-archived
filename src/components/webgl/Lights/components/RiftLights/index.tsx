import EastRift from "./EastRift";
import WestRift from "./WestRift";
import SouthAmbient from "./SouthAmbient";
import NorthAmbient from "./NorthAmbient";
import NorthWestRift from "./NorthWestRift";
import SouthEastRift from "./SouthEastRift";
import CoreRift from "./CoreRift";

export default () => (
  <>
    <WestRift />
    <EastRift />
    <SouthAmbient />
    <NorthAmbient />
    <NorthWestRift />
    <SouthEastRift />
    <CoreRift debug />
  </>
)