import Button from '@mui/material/Button';
import { Asset } from './Content';
import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

type AssetsProps = {
  assets: Asset[];
  onDelete: (id: string) => void;
  onEdit: (asset: Asset) => void;
};

const Assets: React.FC<AssetsProps> = ({ assets, onDelete, onEdit }) => {
  const [editingAssetId, setEditingAssetId] = useState<string | undefined>();

  return (
    <div>
      {assets.map(asset => (
        <div key={asset.id}>
          {editingAssetId === asset.id ? (
            <div>
              <TextField
                label="Asset Name"
                variant="standard"
                defaultValue={asset.name}
              />
              <br />
              <TextField
                label="Balance"
                type="number"
                variant="standard"
                defaultValue={asset.balance}
              />
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  onEdit({
                    id: asset.id,
                    name: asset.name,
                    balance: asset.balance,
                  });
                  setEditingAssetId(undefined);
                }}
              >
                Done
              </Button>
            </div>
          ) : (
            <div>
              asset: {asset.name}
              <br /> balance: {asset.balance}
              <br />
            </div>
          )}
          <Button
            variant="outlined"
            size="medium"
            onClick={() => {
              setEditingAssetId(asset.id);
            }}
          >
            Edit
          </Button>
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
