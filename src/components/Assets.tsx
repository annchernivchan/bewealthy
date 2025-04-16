import Button from '@mui/material/Button';
import { Asset } from './Content';
import * as React from 'react';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditingAsset from './EditingAsset';

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
            <EditingAsset
              asset={asset}
              onEdit={asset => {
                onEdit(asset);
                setEditingAssetId(undefined);
              }}
            />
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
            <EditIcon />
          </Button>
          <Button
            onClick={() => onDelete(asset.id)}
            variant="outlined"
            color="error"
          >
            <DeleteOutlineIcon />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Assets;
