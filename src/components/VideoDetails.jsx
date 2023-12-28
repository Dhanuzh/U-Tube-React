import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { Video } from "./";
import { CheckCircle, StickyNote2 } from "@mui/icons-material";
import { fetchFromAPI } from "../utilities/fetchFromAPI";
import ReactPlayer from "react-player";

const VideoDetails = () => {
  const [videoDetails, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.item[0]),
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
