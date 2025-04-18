import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Asset } from './Content';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';

type EditingAssetProps = {
  asset: Asset;
  onEdit: (asset: Asset) => void;
  isOpen: boolean;
  onClose: () => void;
};

const EditingAsset: React.FC<EditingAssetProps> = ({
  asset,
  onEdit,
  isOpen,
  onClose,
}) => {
  const [newAssetName, setNewAssetName] = useState<string>(asset.name);
  const [newAssetBalance, setNewAssetBalance] = useState<number>(asset.balance);

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ padding: '24px' }} role="presentation">
        <div style={{ fontSize: '23px', marginBottom: '20px' }}>Edit Asset</div>
        <TextField
          style={{ marginBottom: '16px' }}
          label="Asset Name"
          variant="standard"
          defaultValue={asset.name}
          onChange={event => {
            setNewAssetName(event.target.value);
          }}
        />
        <br />
        <TextField
          label="Balance"
          style={{ marginBottom: '16px' }}
          type="number"
          variant="standard"
          defaultValue={asset.balance}
          onChange={event => {
            setNewAssetBalance(parseInt(event.target.value));
          }}
        />
        <br />
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            onEdit({
              id: asset.id,
              name: newAssetName,
              balance: newAssetBalance,
            });
          }}
        >
          <DoneIcon />
        </Button>
      </Box>
    </Drawer>
  );
};

export default EditingAsset;
