import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const MapLocation = () => (
    <>
        <Typography variant="h5" fontWeight={600} mb={2}>
            Find Us
        </Typography>
        <Paper
            elevation={3}
            sx={{
                borderRadius: 2,
                overflow: "hidden",
                width: "100%",
                height: { xs: 300, md: 430 },
            }}
        >
            <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.7661814534973!2d87.31894501517406!3d22.70507748511802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277550d511131%3A0xd202ad202728208e!2sMidnapore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1718024025020!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </Paper></>
);

export default MapLocation;
