import { useState } from "react";
import AddAsset from "./AddAsset";

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
      <div>
        {assets.map((asset) => (
          <div>
            asset:{asset.name}
            <br /> balance: {asset.balance}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
