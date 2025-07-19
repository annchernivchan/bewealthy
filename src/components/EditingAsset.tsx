import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Asset } from './Content';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import Drawer from '@mui/material/Drawer';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import ConfirmationDialog from './ConfirmationDialog';
import { EUR, UAH, USD } from '../constants/CurrencyConstants';
import { Currency } from '../types/types';

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
  const [newAssetCurrency, setNewAssetCurrency] = useState<Currency>(
    asset.currency,
  );
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <>
      <ConfirmationDialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
          onClose();
          setNewAssetName(asset.name);
          setNewAssetBalance(asset.balance);
          setNewAssetCurrency(asset.currency);
        }}
        onSave={() => {
          setDialogOpen(false);
          onEdit({
            id: asset.id,
            name: newAssetName,
            balance: newAssetBalance,
            currency: newAssetCurrency,
          });
        }}
      />
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => {
          if (
            newAssetName === asset.name &&
            newAssetBalance === asset.balance
          ) {
            onClose();
          } else {
            setDialogOpen(true);
          }
        }}
      >
        <Box sx={{ padding: '24px' }} role="presentation">
          <div style={{ fontSize: '23px', marginBottom: '20px' }}>
            Edit Asset
          </div>
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
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="currency-label">Currency</InputLabel>
            <Select
              defaultValue={asset.currency}
              labelId="currency-label"
              id="currency-select"
              label="Currency"
              onChange={event =>
                setNewAssetCurrency(event.target.value as Currency)
              }
            >
              <MenuItem value={UAH}>{UAH}</MenuItem>
              <MenuItem value={USD}>{USD}</MenuItem>
              <MenuItem value={EUR}>{EUR}</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Button
            style={{ marginTop: 16 }}
            variant="contained"
            color="success"
            onClick={() => {
              onEdit({
                id: asset.id,
                name: newAssetName,
                balance: newAssetBalance,
                currency: newAssetCurrency,
              });
            }}
          >
            <DoneIcon />
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default EditingAsset;
