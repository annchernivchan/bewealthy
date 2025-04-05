import { useEffect, useState } from "react";
import AddAsset from "./AddAsset";
import Assets from "./Assets";

export type Asset = { name: string; balance: number };

const Content: React.FC = () => {
  const initialAssets = JSON.parse(
    localStorage.getItem("assets") || "[]"
  ) as Asset[];
  const [assets, setAssets] = useState<Asset[]>(initialAssets);

  useEffect(() => {
    localStorage.setItem("assets", JSON.stringify(assets));
  }, [assets]);

  return (
    <div style={{ fontSize: "20px" }}>
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
