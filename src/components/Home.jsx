import React, { useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import banner1 from "../assets/img/banner_1.jpg"
import banner2 from "../assets/img/banner_2.jpg"
import banner3 from "../assets/img/banner_3.jpeg"
import banner4 from "../assets/img/banner_4.jpg"
import banner5 from "../assets/img/banner_5.jpeg"

const backgroundImages = [banner1, banner2, banner3, banner4, banner5];

const Home = () => {

  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundImage: `url(${backgroundImages[currentIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        px: { xs: 2, lg: 12 },
        color: "#fff",
        position: "relative",
        fontFamily: "'Poppins', sans-serif",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Stronger Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.40)", // Stronger darkness
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: { xs: "100%", lg: "60%" },
          mt: 10,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            display: "inline-block",
            px: 1,
            borderRadius: "4px",
          }}
        >
          The first clinic in Midnapore district to deliver complete care for mother and child under the same roof...
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            mt: 2,
            p: 1,
            borderRadius: "4px",
          }}
        >
          L
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#dd8036",
            "&:hover": { backgroundColor: "#FFC000" },
          }}
        >
          See Services
        </Button>
      </Box>
    </Box>

  );
};

export default Home;
