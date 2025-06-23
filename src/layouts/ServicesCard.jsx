import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

const ServicesCard = ({ icon, title, desc }) => {
  const theme = useTheme();

  return (
    <Card
      elevation={3}
      sx={{
        width: '100%',
        borderRadius: 2,
        textAlign: 'center',
        p: 3,
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-12px)',
        },
      }}
    >
      <Box
        sx={{
          bgcolor: '#d5f2ec',
          display: 'inline-flex',
          p: 1.5,
          borderRadius: '50%',
          transition: 'background-color 0.3s ease-in-out',
          mb: 2,
          '&:hover': {
            bgcolor: '#ade9dc',
          },
        }}
      >
        {icon}
      </Box>

      <CardContent sx={{ p: 0 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" mb={2}>
          {desc}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: theme.palette.primary.main,
            transition: 'color 0.3s ease-in-out',
            '&:hover': {
              color: '#ade9dc',
            },
          }}
        >
          Learn more
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
