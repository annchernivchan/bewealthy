import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Asset } from './Content';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
  const [assetCurrency, setAssetCurrency] = useState<string>('');

  const isDisabled =
    assetName === '' || assetBalance < 0 || assetCurrency === '';

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
          label="Balance"
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
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Currency</InputLabel>
          <Select
            defaultValue={''}
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Currency"
            onChange={event => setAssetCurrency(event.target.value)}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="ГРН">ГРН</MenuItem>
            <MenuItem value={'$'}>$</MenuItem>
            <MenuItem value={'€'}>€</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button
          style={{ marginTop: 16 }}
          variant="contained"
          color="success"
          disabled={isDisabled}
          onClick={() => {
            onAdd({
              name: assetName,
              balance: assetBalance,
              currency: assetCurrency,
              id: Math.random().toString(36).substring(2, 10),
            });
            setAssetName('');
            setAssetBalance(0);
            setAssetCurrency('');
          }}
        >
          Add Asset
        </Button>
      </Box>
    </Drawer>
  );
};

export default CreateAssetDrawer;
