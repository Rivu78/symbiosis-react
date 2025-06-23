import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../assets/img/About_us.jpeg";

const About = () => {
  return (
    <Box
      px={{ xs: 2, md: 8 }}
      pt={{ xs: 12, md: 10 }}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      gap={4}
    >
      {/* Text Section */}
      <Box flex={1.2}>
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign={{ xs: "center", md: "left" }}
          gutterBottom
        >
          About Us
        </Typography>

        <Typography
          variant="body1"
          textAlign={{ xs: "justify", md: "left" }}
          paragraph
        >
          Welcome to Symbiosis IMC Clinic & Fertility Centre, the first healthcare facility in the Midnapore district to offer complete care for both mother and child under one roof. With a focus on clinical excellence, compassionate care, and modern infrastructure, we are proud to be a trusted destination for families across Paschim Medinipur and beyond.
        </Typography>

        <Typography
          variant="body1"
          textAlign={{ xs: "justify", md: "left" }}
          paragraph
        >
          At Symbiosis, we understand that the journey to parenthood is both emotional and medical — requiring personalized guidance, advanced treatment, and reliable support. From fertility evaluations and IVF treatments to pregnancy care, safe deliveries, and child wellness, we provide comprehensive services designed to support every stage of this journey.
        </Typography>

        <Typography
          variant="body1"
          textAlign={{ xs: "justify", md: "left" }}
        >
          To deliver ethical, evidence-based, and empathetic healthcare for women and children — bridging science and compassion to bring hope, healing, and happiness to families.
        </Typography>
      </Box>

      {/* Image Section */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="img"
          src={img}
          alt="About Symbiosis"
          borderRadius={2}
          width="100%"
          height="auto"
          sx={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default About;
