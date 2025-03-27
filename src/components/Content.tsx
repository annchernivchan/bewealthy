import { useState } from "react";
import AddAsset from "./AddAsset";
import Assets from "./Assets";

export type Asset = { name: string; balance: number };

const Content: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  return (
    <div>
      <AddAsset
        onAdd={(asset: Asset) => {
          setAssets(assets.concat(asset));
        }}
      />
      <Assets assets={assets} />
    </div>
  );
};

export default Content;
