import Button from '@mui/material/Button';
import { Asset } from './Content';
import * as React from 'react';

type AssetsProps = { assets: Asset[]; onDelete: (id: string) => void };

const Assets: React.FC<AssetsProps> = ({ assets, onDelete }) => {
  return (
    <div>
      {assets.map(asset => (
        <div key={asset.id}>
          asset: {asset.name}
          <br /> balance: {asset.balance}
          <br />
          <Button
            onClick={() => onDelete(asset.id)}
            variant="outlined"
            color="error"
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Assets;
