import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday",
];

const TimeTable = () => (
    <>
        <Typography variant="h5" fontWeight={600} mb={2}>
            Doctor Availability
        </Typography>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Day</strong></TableCell>
                        <TableCell align="center"><strong>Morning</strong></TableCell>
                        <TableCell align="center"><strong>Evening</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {days.map((day) => (
                        <TableRow key={day}>
                            <TableCell>{day}</TableCell>
                            <TableCell align="center">9:00 AM – 12:00 PM</TableCell>
                            <TableCell align="center">5:00 PM – 8:00 PM</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
);

export default TimeTable;
