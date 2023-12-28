import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import "../index.css";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoProfilePicture,
} from "../utilities/constant";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ width: { md: "320px", xs: "100%" } }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "106px",
        }}
      >
        <Link to={videoId ? `/video/${videoId - videoId}` : demoVideoTitle}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              color: "white",
              backgroundColor: "#393837",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="300px"
            sx={{
              color: "#B9B9B2",
              mt: "10px",
            }}
          >
            {snippet?.channelTitle.slice(0, 20) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
