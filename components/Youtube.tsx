import { getVideos } from "@/sanity/sanity-utils";
import Video from "./Video";
import Image from "next/image";
import YouTubeImage from "../assets/youtube-button.png";

export default async function YouTube() {
  const videos = await getVideos();
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-3 md:flex md:flex-row md:justify-normal">
        <div className="bg-blue-800 rounded-full w-20 h-20"></div>
        <div className="my-3 text-center md:text-left md:ml-3">
          <h5>Bernard Marr</h5>
          <h6>71K Subscribers &bull; 698 Videos &bull; 5.4M views</h6>
        </div>
        <div className="md:ml-auto md:mr-12">
          <button className="bg-[#e62117] border rounded border-b-black border-l-black border-t-black px-12 text-white flex items-center font-semibold">
            <div className="bg-[#e62117] flex items-center -ml-8 pr-3">
              <Image
                className=""
                src={YouTubeImage}
                alt="Youtube"
                width={30}
                height={30}
              />
              YouTube
            </div>
            <p className="bg-white -mr-12 text-black h-8 border border-r-black px-2 flex items-center">
              71K
            </p>
          </button>
        </div>
      </div>
      <div className="md:flex mr-12 md:ml-8 md:justify-center lg:justify-between md:items-center ml-32 flex-wrap">
        {videos.map((video, index) => {
          if (index < 4) {
            return (
              <Video key={video._id} src={video.url} title={video.title} />
            );
          }
        })}
      </div>
    </div>
  );
}
