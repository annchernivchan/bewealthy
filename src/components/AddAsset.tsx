import { useState } from "react";
import { Asset } from "./Content";

type AddAssetProps = { onAdd: (asset: Asset) => void };

const AddAsset: React.FC<AddAssetProps> = (props) => {
  const { onAdd } = props;
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
        id={"asset_balance"}
        type={"number"}
        value={assetBalance}
        onChange={(event) => {
          setAssetBalance(parseInt(event.target.value));
        }}
      />
      <button onClick={() => onAdd({ name: assetName, balance: assetBalance })}>
        Add Asset
      </button>
    </section>
  );
};
export default AddAsset;
