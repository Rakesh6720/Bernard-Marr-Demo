import React from "react";
import getYouTubeID from "get-youtube-id";

const Video = ({ src, title }: { src: string; title: string }) => {
  const id = getYouTubeID(src);
  console.log(id);
  return (
    <div className="flex-col items-center justify-center text-center">
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
      <>{title}</>
    </div>
  );
};

export default Video;
