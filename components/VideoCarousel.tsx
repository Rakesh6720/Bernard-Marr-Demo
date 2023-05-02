"use client";
import React, { useState } from "react";
import getYouTubeID from "get-youtube-id";
import { Video } from "@/types/Video";

interface Props {
  videos: Video[];
}

const VideoCarousel = ({ videos }: Props) => {
  const [videoIndex, setVideoIndex] = useState<number>(0);

  const playNextVideo = () => {
    if (videoIndex < videos.length - 1) {
      setVideoIndex((prevState) => prevState + 1);
    } else {
      setVideoIndex(0);
    }
  };

  const playPreviousVideo = () => {
    if (videoIndex <= videos.length - 1 && videoIndex > 0) {
      setVideoIndex((prevState) => prevState - 1);
    } else {
      setVideoIndex(videos.length - 1);
    }
  };

  const id = getYouTubeID(videos[videoIndex].url);
  const title = videos[videoIndex].title;

  return (
    <div className="flex-col lg:hidden md:block">
      <div id="video-player" className="justify-center flex">
        <div id="video">
          <iframe
            className="my-5 mx-3"
            width="400"
            height="200"
            src={`https://www.youtube.com/embed/${id}?autoplay=0&origin=http://example.com&controls=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
      <div>
        <h3 className="text-center mb-3 text-slate-700 font-semibold text-xl">
          {title}
        </h3>
      </div>
      <div id="video-buttons" className="flex mx-auto max-w-[400px]">
        <button onClick={playPreviousVideo} className="mx-auto">
          <p className="hover:underline">Previous</p>
        </button>
        <button onClick={playNextVideo} className="mx-auto">
          <p className="hover:underline">Next</p>
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
