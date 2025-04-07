import { useEffect, useState } from 'react';
import AddAsset from './AddAsset';
import Assets from './Assets';
import * as React from 'react';
import ActionAreaCard from './ActionAreaCard.tsx';

export type Asset = { name: string; balance: number; id: string };

const ASSETS_KEY = "assets";

const Content: React.FC = () => {
  const initialAssetsString = localStorage.getItem(ASSETS_KEY);
  const initialAssets = initialAssetsString
    ? (JSON.parse(initialAssetsString) as Asset[])
    : [];

  const [assets, setAssets] = useState<Asset[]>(initialAssets);

  const deleteAsset = (id: string) => {
    const filteredAssets = assets.filter((asset) => {
      return asset.id !== id;
    });
    setAssets(filteredAssets);
  };

  useEffect(() => {
    localStorage.setItem(ASSETS_KEY, JSON.stringify(assets));
  }, [assets]);

  return (
    <div style={{ display: 'block', gap: '16px' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px'
      }}>
        <ActionAreaCard assets={assets} />
      </div>
      <div style={{ fontSize: '20px', marginLeft: '10px' }}>
        <AddAsset
          onAdd={(asset: Asset) => {
            setAssets(assets.concat(asset));
          }}
        />
        <Assets assets={assets} onDelete={deleteAsset} />
      </div>
    </div>
  );
};

export default Content;
