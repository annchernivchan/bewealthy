import { Asset } from "./Content";

type AssetsProps = { assets: Asset[]; onDelete: (id: string) => void };

const Assets: React.FC<AssetsProps> = ({ assets, onDelete }) => {
  return (
    <div>
      {assets.map((asset) => (
        <div>
          asset:{asset.name}
          <br /> balance: {asset.balance}
          <br />
          <button
            onClick={() => {
              onDelete(asset.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Assets;
