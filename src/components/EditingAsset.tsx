import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Asset } from './Content';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';

type EditingAssetProps = { asset: Asset; onEdit: (asset: Asset) => void };

const EditingAsset: React.FC<EditingAssetProps> = ({ asset, onEdit }) => {
  const [newAssetName, setNewAssetName] = useState<string>(asset.name);
  const [newAssetBalance, setNewAssetBalance] = useState<number>(asset.balance);

  return (
    <div>
      <TextField
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
        type="number"
        variant="standard"
        defaultValue={asset.balance}
        onChange={event => {
          setNewAssetBalance(parseInt(event.target.value));
        }}
      />
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
    </div>
  );
};

export default EditingAsset;
