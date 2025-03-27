import { Asset } from "./Content";

type AssetsProps = { assets: Asset[] };

const Assets: React.FC<AssetsProps> = (props) => {
  const { assets } = props;
  return (
    <div>
      {assets.map((asset) => (
        <div>
          asset:{asset.name}
          <br /> balance: {asset.balance}
        </div>
      ))}
    </div>
  );
};

export default Assets;
