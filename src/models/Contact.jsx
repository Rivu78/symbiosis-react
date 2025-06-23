import React from "react";
import {
  Backdrop,
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";

const Contact = ({ closeForm }) => {
  const theme = useTheme();

  return (
    <Backdrop
      open={true}
      sx={{ zIndex: 1300, color: "#fff", backdropFilter: "blur(2px)", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <Box
        sx={{
          width: { xs: 320, md: 400 },
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h1" fontWeight="bold" color={theme.palette.primary.main} gutterBottom>
          Book Now
        </Typography>

        <Stack spacing={2}>
          <TextField
            fullWidth
            variant="filled"
            name="userFirstName"
            placeholder="First Name"
            InputProps={{ disableUnderline: true }}
            sx={{ bgcolor: "#4fb9e2", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            variant="filled"
            name="userLastName"
            placeholder="Last Name"
            InputProps={{ disableUnderline: true }}
            sx={{ bgcolor: "#4fb9e2", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="email"
            name="userEmail"
            placeholder="Your Email"
            InputProps={{ disableUnderline: true }}
            sx={{ bgcolor: "#4fb9e2", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            name="userNumber"
            placeholder="Phone No."
            InputProps={{ disableUnderline: true }}
            sx={{ bgcolor: "#4fb9e2", borderRadius: 1 }}
          />

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" color="primary">
              Book Appointment
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={closeForm}
            >
              Close
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Backdrop>
  );
};

export default Contact;
