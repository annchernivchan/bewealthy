import Button from '@mui/material/Button';
import { Asset } from './Content';
import * as React from 'react';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditingAsset from './EditingAsset';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type AssetsProps = {
  assets: Asset[];
  onDelete: (id: string) => void;
  onEdit: (asset: Asset) => void;
};

const Assets: React.FC<AssetsProps> = ({ assets, onDelete, onEdit }) => {
  const [editingAssetId, setEditingAssetId] = useState<string | undefined>();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map(asset => (
            <TableRow
              key={asset.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {asset.name}
              </TableCell>
              <TableCell align="right">{asset.balance}</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="medium"
                  onClick={() => {
                    setEditingAssetId(asset.id);
                  }}
                >
                  <EditIcon />
                </Button>
                <EditingAsset
                  asset={asset}
                  onEdit={asset => {
                    onEdit(asset);
                    setEditingAssetId(undefined);
                  }}
                  isOpen={asset.id === editingAssetId}
                  onClose={() => {
                    setEditingAssetId(undefined);
                  }}
                />
              </TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => onDelete(asset.id)}
                  variant="outlined"
                  color="error"
                >
                  <DeleteOutlineIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Assets;
