import { Asset } from './Content.tsx';
import * as React from 'react';

type Props = {
  assets: Asset[];
};

const ActionAreaCard: React.FC<Props> = ({ assets }) => {
  const totalAssetsBalance = assets
    .map((asset) => asset.balance)
    .reduce((acc, val) => acc + val, 0);

  return (
    <div
      style={{
        padding: '10px',
        fontFamily: 'sans-serif'
      }}
    >
      <div
        style={{
          color: '#6c6c70',
          fontSize: '18px',
          marginBottom: '5px'
        }}
      >
        Total balance
      </div>
      <div
        style={{
          color: '#1c1c1e',
          fontSize: '26px',
          fontWeight: '400'
        }}
      >
        {totalAssetsBalance}
      </div>
    </div>
  );
};

export default ActionAreaCard;
