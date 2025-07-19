import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import { EUR, UAH, USD } from '../constants/CurrencyConstants';
import { Currency } from '../types/types';

type TotalBalanceProps = {
  balance: number;
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
};

const TotalBalance: React.FC<TotalBalanceProps> = ({
  balance,
  selectedCurrency,
  onCurrencyChange,
}) => {
  return (
    <div
      style={{
        padding: '10px',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          color: '#6c6c70',
          fontSize: '18px',
          marginBottom: '5px',
        }}
      >
        Total balance
      </div>
      <div
        style={{
          color: '#1c1c1e',
          fontSize: '26px',
          fontWeight: '400',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {balance}
        <FormControl sx={{ minWidth: 60 }} size="small">
          <Select
            defaultValue={selectedCurrency}
            labelId="currency-label"
            id="currency-select"
          >
            <MenuItem
              value={UAH}
              onClick={() => {
                onCurrencyChange(UAH);
              }}
            >
              {UAH}
            </MenuItem>
            <MenuItem
              value={USD}
              onClick={() => {
                onCurrencyChange(USD);
              }}
            >
              {USD}
            </MenuItem>
            <MenuItem
              value={EUR}
              onClick={() => {
                onCurrencyChange(EUR);
              }}
            >
              {EUR}
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default TotalBalance;
