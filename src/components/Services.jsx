import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import Button from "../layouts/Button"; // Assuming this is already MUI compatible
import ServicesCard from "../layouts/ServicesCard"; // Assuming this is already MUI compatible

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} color="#36ae9a" />;
  const icon2 = <MdHealthAndSafety size={35} color="#36ae9a" />;
  const icon3 = <FaHeartbeat size={35} color="#36ae9a" />;

  return (
    <Box
      px={{ xs: 2, md: 8 }}
      pt={{ xs: 12, md: 10 }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      {/* Top Section */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <Grid item xs={12} lg={6}>
          <Typography
            variant="h4"
            fontWeight={600}
            textAlign={{ xs: "center", lg: "left" }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            mt={1}
            textAlign={{ xs: "center", lg: "left" }}
          >
            
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3} textAlign={{ xs: "center", lg: "right" }}>
          <Box mt={{ xs: 2, lg: 0 }}>
            <Button title="See Services" />
          </Box>
        </Grid>
      </Grid>

      {/* Service Cards */}
      <Box
        pt={7}
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={3}
      >
        <ServicesCard icon={icon1} title="Gynaecology" desc='Comprehensive women’s health services including fertility care, pregnancy, menstrual disorders, menopause, laparoscopic surgery, and screenings expertly delivered with compassion and advanced technology.' />
        <ServicesCard icon={icon2} title="Infertility" desc='Advanced infertility care with personalized treatment plans including IUI, IVF, ovulation induction, and diagnostic procedures all, guided by expertise, ethics, and support.' />
        <ServicesCard icon={icon3} title="Paediatrics" desc='Expert pediatric care from birth through childhood, including vaccinations, growth monitoring, respiratory care, and illness management, delivered with warmth, patience, and clinical precision.' />
      </Box>
    </Box>
  );
};

export default Services;
