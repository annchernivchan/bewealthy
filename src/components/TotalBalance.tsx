import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import { EUR, UAH, USD } from '../constants/CurrencyConstants';

type TotalBalanceProps = {
  balance: number;
};

const TotalBalance: React.FC<TotalBalanceProps> = ({ balance }) => {
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
            defaultValue={UAH}
            labelId="currency-label"
            id="currency-select"
          >
            <MenuItem value={UAH}>{UAH}</MenuItem>
            <MenuItem value={USD}>{USD}</MenuItem>
            <MenuItem value={EUR}>{EUR}</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default TotalBalance;
