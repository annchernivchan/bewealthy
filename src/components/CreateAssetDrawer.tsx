import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Asset } from './Content';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { CURRENCY, EUR, UAH, USD } from '../constants/CurrencyConstants';
import { Currency, CurrencyFromAPI, CurrencyRate } from '../types/types';

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
  const [assetCurrency, setAssetCurrency] = useState<Currency | undefined>();

  const isDisabled =
    assetName === '' || assetBalance < 0 || assetCurrency === undefined;

  const [currencyRates, setCurrencyRates] = useState<CurrencyRate[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (currencyRates.length === 0) {
          const response = await fetch('https://api.monobank.ua/bank/currency');
          const data = await response.json();
          const filteredData = data
            ?.filter((currency: CurrencyFromAPI) => {
              return CURRENCY.has(currency.currencyCodeA);
            })
            .map((currency: CurrencyFromAPI) => {
              return {
                fromCurrency: CURRENCY.get(currency.currencyCodeA),
                toCurrency: CURRENCY.get(currency.currencyCodeB),
                rate: currency.rateBuy,
              };
            });
          setCurrencyRates(filteredData);
        }
      } catch (error) {}
    }

    fetchData();
  }, []);

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
            onChange={event => setAssetCurrency(event.target.value as Currency)}
          >
            <MenuItem value=""></MenuItem>
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
          disabled={isDisabled}
          onClick={() => {
            if (assetCurrency !== undefined) {
              onAdd({
                name: assetName,
                balance: assetBalance,
                currency: assetCurrency,
                id: Math.random().toString(36).substring(2, 10),
              });
              setAssetName('');
              setAssetBalance(0);
              setAssetCurrency(undefined);
            }
          }}
        >
          Add Asset
        </Button>
      </Box>
    </Drawer>
  );
};

export default CreateAssetDrawer;
