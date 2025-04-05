import { useState } from "react";
import { Asset } from "./Content";

type AddAssetProps = { onAdd: (asset: Asset) => void };

const AddAsset: React.FC<AddAssetProps> = ({ onAdd }) => {
  const [assetName, setAssetName] = useState<string>("");
  const [assetBalance, setAssetBalance] = useState<number>(0);

  return (
    <section>
      <label htmlFor={"asset_name"}>Asset name</label>
      <input
        id={"asset_name"}
        type={"text"}
        value={assetName}
        onChange={(event) => setAssetName(event.target.value)}
      />
      <label htmlFor={"asset_balance"}>Balance</label>
      <input
        min="0"
        id={"asset_balance"}
        type={"number"}
        value={assetBalance}
        onChange={(event) => {
          setAssetBalance(parseInt(event.target.value));
        }}
      />
      <button
        disabled={assetName === "" || assetBalance < 0}
        onClick={() => {
          onAdd({
            name: assetName,
            balance: assetBalance,
            id: Math.random().toString(36).substring(2, 10),
          });
          setAssetName("");
          setAssetBalance(0);
        }}
      >
        Add Asset
      </button>
    </section>
  );
};
export default AddAsset;
