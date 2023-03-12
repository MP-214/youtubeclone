import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCards, { AdVideoCard } from "./VideoCards";

const VideoContainer = () => {
  const [videos, setVideoList] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const resp = await fetch(YOUTUBE_VIDEOS_API);
    const json = await resp.json();
    setVideoList(json.items);
  };

  return (
    <div className="flex flex-wrap ml-5">
      {videos.map((video) => (
        <Link key={video.id} to={`watch?v=${video.id}`}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
