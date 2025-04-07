import * as React from 'react';

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
        }}
      >
        {balance}
      </div>
    </div>
  );
};

export default TotalBalance;
