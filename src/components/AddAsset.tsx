import { useState } from 'react';
import { Asset } from './Content';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type AddAssetProps = { onAdd: (asset: Asset) => void };

const AddAsset: React.FC<AddAssetProps> = ({ onAdd }) => {
  const [assetName, setAssetName] = useState<string>('');
  const [assetBalance, setAssetBalance] = useState<number>(0);

  return (
    <section>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <div>
          <TextField
            onChange={event => setAssetName(event.target.value)}
            value={assetName}
            id="asset_name"
            label="Asset name"
            variant="outlined"
          />
          <TextField
            id="asset_balance"
            label="Number"
            type="number"
            value={assetBalance}
            onChange={event => {
              setAssetBalance(parseInt(event.target.value));
            }}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              input: {
                inputProps: {
                  min: 0,
                },
              },
            }}
          />
          <Button
            variant="contained"
            color="success"
            disabled={assetName === '' || assetBalance < 0}
            onClick={() => {
              onAdd({
                name: assetName,
                balance: assetBalance,
                id: Math.random().toString(36).substring(2, 10),
              });
              setAssetName('');
              setAssetBalance(0);
            }}
          >
            Add Asset
          </Button>
        </div>
      </div>
    </section>
  );
};
export default AddAsset;
