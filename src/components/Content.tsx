import { useEffect, useState } from 'react';
import Assets from './Assets';
import * as React from 'react';
import TotalBalance from './TotalBalance.tsx';
import Button from '@mui/material/Button';
import CreateAssetDrawer from './CreateAssetDrawer.tsx';

export type Asset = {
  name: string;
  balance: number;
  currency: string;
  id: string;
};

const ASSETS_KEY = 'assets';

const Content: React.FC = () => {
  const initialAssetsString = localStorage.getItem(ASSETS_KEY);
  const [openAddAsset, setOpenAddAsset] = useState<boolean>(false);
  const initialAssets = initialAssetsString
    ? (JSON.parse(initialAssetsString) as Asset[])
    : [];

  const [assets, setAssets] = useState<Asset[]>(initialAssets);

  const deleteAsset = (id: string) => {
    const filteredAssets = assets.filter(asset => {
      return asset.id !== id;
    });
    setAssets(filteredAssets);
  };

  const editAsset = (editedAsset: Asset) => {
    const editedAssets = assets.map(asset => {
      return asset.id === editedAsset.id
        ? {
            id: asset.id,
            name: editedAsset.name,
            balance: editedAsset.balance,
            currency: editedAsset.currency,
          }
        : asset;
    });
    setAssets(editedAssets);
  };

  const totalAssetsBalance = assets
    .map(asset => asset.balance)
    .reduce((acc, val) => acc + val, 0);

  useEffect(() => {
    localStorage.setItem(ASSETS_KEY, JSON.stringify(assets));
  }, [assets]);

  return (
    <div style={{ display: 'block', gap: '16px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '16px',
          justifyContent: 'space-between',
          marginTop: '16px',
          marginRight: '16px',
        }}
      >
        <TotalBalance balance={totalAssetsBalance} />
        <CreateAssetDrawer
          onAdd={(asset: Asset) => {
            setAssets(assets.concat(asset));
            setOpenAddAsset(false);
          }}
          isOpen={openAddAsset}
          onClose={() => {
            setOpenAddAsset(false);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            setOpenAddAsset(true);
          }}
        >
          Add Asset
        </Button>
      </div>
      <div style={{ fontSize: '20px', marginLeft: '10px' }}>
        <Assets assets={assets} onDelete={deleteAsset} onEdit={editAsset} />
      </div>
    </div>
  );
};

export default Content;
