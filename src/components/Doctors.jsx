import React from "react";
import { Box, Typography, Stack, useTheme, useMediaQuery } from "@mui/material";
import doc1 from "../assets/img/KanchanDhara.jpeg"; // replace with your image
import doc2 from "../assets/img/SandhaDhara.jpeg"; // replace with your image

const Doctors = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box px={{ xs: 2, md: 8 }} py={{ xs: 10, md: 14 }}>
      {/* Section Header */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight={600} textAlign="left" gutterBottom>
          Our Doctors
        </Typography>
        <Typography variant="body1" textAlign="left">
          Meet our experienced specialists who are committed to delivering exceptional healthcare for you and your family.
        </Typography>
      </Box>

      {/* Doctor 1 */}
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={4}
        alignItems={'center'}
        mb={10}
      >
        <Box flex={1}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            Dr. Kanchan Kumar Dhara
          </Typography>
          <Typography variant="body1" lineHeight={1.8}>
            Dr. Kanchan Kumar Dhara is a senior obstetrician and gynecologist practicing at Symbiosis IMC Clinic and Fertility Centre in Midnapore, with over 30 years of experience in gynecology and laparoscopic surgery. He completed his MBBS from Burdwan Medical College in 1991 and earned his MS in Obstetrics and Gynaecology from Rabindranath Tagore Medical College, Udaipur in 1996. In the same year, he was awarded the MRCOG by the Royal College of Obstetricians and Gynaecologists, London.
            He has undergone specialized training in various advanced fields: Endoscopic Surgery at the Institute of Endoscopic Surgery (2001), Infertility and IVF procedures at the Institute of Reproductive Medicine (1997), Hands-on IVF and Embryology at Embryology Academy for Research & Training (2013), Male Infertility Management at the American Academy of CME (2015), and IVF & High-Risk Pregnancy care at the National University Hospital (2016).

            Dr. Dhara is also a member of the Indian Society for Assisted Reproduction (ISAR). His core areas of expertise include general gynecology, minimally invasive laparoscopic procedures, infertility evaluation and treatment, IVF-ET, and high-risk pregnancy management.
          </Typography>
        </Box>

        <Box
          flex={1}
          component="img"
          src={doc1}
          alt="Dr. Anjali Sharma"
          sx={{
            width: "100%",
            maxHeight: 400,
            objectFit: "cover",
            borderRadius: 3,
            boxShadow: 3,
          }}
        />
      </Stack>

      {/* Doctor 2 */}
      <Stack
        direction={isMobile ? "column" : "row-reverse"}
        spacing={4}
        alignItems={'center'}
      >
        <Box flex={1}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            Dr. Sandhya Mandal Dhara
          </Typography>
          <Typography variant="body1" lineHeight={1.8}>
            Dr. Sandhya Mandal Dhara is a highly respected Consultant Neonatologist and Pediatrician practicing at Symbiosis IMC Clinic & Fertility Centre in Midnapore. With over two decades of experience in neonatal and pediatric care, she provides expert medical services covering the full spectrum of child health, from newborns to adolescents. Her clinical practice includes tertiary-level neonatal care, management of respiratory conditions, immunization programs, and well-baby clinics, making her one of the most trusted names in child healthcare in the region.

            She has received specialized training in neonatology from international institutions and has consistently updated her skills to keep pace with advancements in pediatric medicine. She is known for her warm, attentive approach to patient care, combined with strong diagnostic acumen and a dedication to evidence-based practices.

            Her outstanding contributions to the field have earned her prestigious accolades, including the Bharat Jyoti Award (New Delhi, 2010) and the Gem of India Gold Medal Award (House of Lords, London, 2012), both in recognition of her excellence and service in neonatology.

            With a strong focus on preventive health, growth and development tracking, and early diagnosis of childhood disorders, Dr. Dhara ensures every child receives the care and attention they deserve. Her work at Symbiosis IMC Clinic is guided by her unwavering commitment to improving health outcomes for infants and children across Midnapore and surrounding districts.
          </Typography>
        </Box>

        <Box
          flex={1}
          component="img"
          src={doc2}
          alt="Dr. Rajeev Mehta"
          sx={{
            width: "100%",
            maxHeight: 500,
            objectFit: "cover",
            borderRadius: 3,
            boxShadow: 3,
          }}
        />
      </Stack>
    </Box>
  );
};

export default Doctors;
