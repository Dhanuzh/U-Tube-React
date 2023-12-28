import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Video, ChannelCard } from "./";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utilities/fetchFromAPI";

const ChannelDetails = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(videos, channelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0]),
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items),
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(150deg, rgba(0,212,255,1) 8%, rgba(9,9,121,1) 70%, rgba(2,0,36,1) 100%)",
            zIndex: 10,
            height: "200px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Video videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetails;
