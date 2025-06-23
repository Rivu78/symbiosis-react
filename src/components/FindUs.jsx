import React from "react";
import { Box, Stack } from "@mui/material";
import MapLocation from "./MapLocation";
import TimeTable from "./TimeTable";

const FindUs = () => {
    return (
        <Box
            sx={{
                width: "100%",
                overflowX: "hidden", // ✅ Prevent horizontal scroll
                px: { xs: 2, md: 8 },
            }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                sx={{
                    width: "100%",
                    alignItems: "stretch",
                }}
            >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <MapLocation />
                </Box>

                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <TimeTable />
                </Box>
            </Stack>
        </Box>
    );
};

export default FindUs;
