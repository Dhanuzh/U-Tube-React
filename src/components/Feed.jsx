import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../index.css";
import { SideBar, Video } from "../components";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        // className="backtest"
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright &copy; 2023
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          New
        </Typography>
        <Video videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
