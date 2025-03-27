import { useState } from "react";

type Asset = { name: string; balance: number };

const Content: React.FC = () => {
  const [assetName, setAssetName] = useState<string>("");
  const [assetBalance, setAssetBalance] = useState<number>(0);

  const [assets, setAssets] = useState<Asset[]>([]);
  return (
    <div>
      <section>
        <label htmlFor={"asset_name"}>Asset name</label>
        <input
          id={"asset_name"}
          type={"text"}
          value={assetName}
          onChange={(event) => setAssetName(event.target.value)}
        />
        <input
          id={"asset_balance"}
          type={"number"}
          value={assetBalance}
          onChange={(event) => {
            setAssetBalance(parseInt(event.target.value));
          }}
        />
        <button
          onClick={() =>
            setAssets(assets.concat({ name: assetName, balance: assetBalance }))
          }
        >
          Add Asset
        </button>
      </section>
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
