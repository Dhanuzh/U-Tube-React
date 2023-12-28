import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { Video } from "./";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../utilities/fetchFromAPI";
import ReactPlayer from "react-player";

const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0]),
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoIt=${id}&type=video`).then(
      (data) => setVideo(data.items),
    );
  }, [id]);

  if (!videoDetails?.snippet) return "Loading";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "-webkit-sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
            />
            <Typography color="white" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  color="#fff"
                  variant={{ sm: "h6", md: "h6" }}
                  sx={{
                    backgroundColor: "#3D3D3B",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "14px", color: "white", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  sx={{ ml: "5px", fontSize: "15px", color: "white" }}
                >
                  Like: {parseInt(likeCount).toLocaleString()}
                </Typography>
                <Typography sx={{ fontSize: "15px", color: "white" }}>
                  Views: {parseInt(viewCount).toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          k
          justifyContent="center"
          alignItems="center"
        >
          <Video videos={video} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
