import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Asset } from './Content';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

type AddAssetProps = {
  onAdd: (asset: Asset) => void;
  isOpen: boolean;
  onClose: () => void;
};

const CreateAssetDrawer: React.FC<AddAssetProps> = ({
  onAdd,
  isOpen,
  onClose,
}) => {
  const [assetName, setAssetName] = useState<string>('');
  const [assetBalance, setAssetBalance] = useState<number>(0);
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ padding: '24px' }} role="presentation">
        <div style={{ fontSize: '23px', marginBottom: '20px' }}>Add Asset</div>
        <TextField
          onChange={event => setAssetName(event.target.value)}
          value={assetName}
          id="asset_name"
          label="Asset name"
          variant="outlined"
          style={{ marginBottom: '16px' }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <br />
        <TextField
          id="asset_balance"
          label="Number"
          type="number"
          style={{ marginBottom: '16px' }}
          value={assetBalance}
          onChange={event => {
            setAssetBalance(parseInt(event.target.value));
          }}
          slotProps={{
            input: {
              inputProps: {
                min: 0,
              },
            },
          }}
        />
        <br />
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
      </Box>
    </Drawer>
  );
};

export default CreateAssetDrawer;
