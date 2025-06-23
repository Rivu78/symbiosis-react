import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/img/logo.png"
import Contact from '../models/Contact';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleDrawerToggle = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'Gynaecology', to: 'xyz' },
    { label: 'Infertility', to: 'home' },
    { label: 'Paediatrics', to: 'doctors' },
    { label: 'About Us', to: 'about' },
    { label: 'Blog', to: 'blog' },
    { label: 'Gallery', to: 'home' },
  ];

  const drawer = (
    <Box
      sx={{ width: '100vw', bgcolor: 'background.default', pt: 8, textAlign: 'center' }}
      role="presentation"
      onClick={closeMenu}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.to} button>
            <Link to={item.to} spy={true} smooth={true} duration={500}>
              <ListItemText primaryTypographyProps={{ fontSize: 24, fontWeight: 600 }} primary={item.label} />
            </Link>
          </ListItem>
        ))}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={openForm}>
            Contact Us
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" alignItems={'center'} sx={{ bgcolor: '#027dc6', boxShadow: '0 3px 8px rgba(0,0,0,0.24)' }}>
      <Toolbar sx={{ height: 80, alignItems: 'center', justifyContent: 'space-between', px: { xs: 2, md: 8 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <Link to="home" spy={true} smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: 70,
                height: 70,
                mr: 1,
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff' }}>
              Symbiosis Clinic
            </Typography>
          </Link>
        </Box>

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: 'pointer', fontSize: '1rem', fontWeight: 500, textDecoration: 'none', color: 'inherit' }}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="contained" sx={{ background: '#e875a6' }} color="primary" onClick={openForm}>
              Contact Us
            </Button>
          </Box>
        )}

        {isMobile && (
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            {menu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </IconButton>
        )}
      </Toolbar>

      <Drawer anchor="left" open={menu} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>

      {showForm && <Contact closeForm={closeForm} />}
    </AppBar>
  );
};

export default Navbar;
