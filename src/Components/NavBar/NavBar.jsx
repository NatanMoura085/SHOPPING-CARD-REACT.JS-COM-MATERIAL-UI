
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext,useState } from 'react';
import { CarrinhoContext} from '/src/Context/Provedor';

export default function ButtonAppBar() {
  const { carrinho } = useContext(CarrinhoContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#800080" }}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: '#FFFFFF' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
            News
          </Typography>
          <IconButton sx={{ color: '#FFFAFA' }} color="sencondary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
            <span>{carrinho.length}</span>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

