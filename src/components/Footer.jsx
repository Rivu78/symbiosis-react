import React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#027dc6',
        color: 'white',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        mt: 8,
        px: { xs: 3, md: 16 },
        py: 5,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box sx={{ maxWidth: 500 }}>
            <Typography variant="h6" fontWeight={600} pb={1}>
              Symbiosis Clinic
            </Typography>
            <Typography variant="body2" sx={{
              whiteSpace: 'normal',     // Allows multi-line wrapping
              wordBreak: 'break-word',  // Break long words if necessary
            }}>
              Our team of dedicated doctors, each specializing in unique fields such as orthopedics, cardiology,
              pediatrics, neurology, dermatology, and more.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h6" fontWeight={500} pb={1} pt={{ xs: 3, md: 0 }}>
            About Us
          </Typography>
          <Stack spacing={1}>
            <Link to="about" smooth duration={500} style={linkStyle}>
              About
            </Link>
            <Link to="services" smooth duration={500} style={linkStyle}>
              Services
            </Link>
            <Link to="doctors" smooth duration={500} style={linkStyle}>
              Doctors
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h6" fontWeight={500} pb={1} pt={{ xs: 3, md: 0 }}>
            Services
          </Typography>
          <Stack spacing={1}>
            <Link to="services" smooth duration={500} style={linkStyle}>
              Lab Test
            </Link>
            <Link to="services" smooth duration={500} style={linkStyle}>
              Health Check
            </Link>
            <Link to="services" smooth duration={500} style={linkStyle}>
              Heart Health
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={500} pb={1} pt={{ xs: 3, md: 0 }}>
            Contact Us
          </Typography>
          <Stack spacing={1}>
            <Link to="/" smooth duration={500} style={linkStyle}>
              123 Elm Street, Suite 456 Springfield, IL 62701 United States
            </Link>
            <Link to="/" smooth duration={500} style={linkStyle}>
              support@care.com
            </Link>
            <Link to="/" smooth duration={500} style={linkStyle}>
              +123-456-7890
            </Link>
          </Stack>
        </Grid>
      </Grid>

      <Box pt={4}>
        <Typography align="center" variant="body2">
          © developed by{' '}
          <Box component="span" sx={{ color: '#FFC000', fontWeight: 500 }}>
            champion programmers
          </Box>{' '}
          | All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

const linkStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'color 0.3s',
  ':hover': {
    color: '#FFC000',
  },
};

export default Footer;
