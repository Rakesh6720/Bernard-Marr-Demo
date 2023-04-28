import { getVideos } from "@/sanity/sanity-utils";
import Video from "./Video";
import Image from "next/image";
import YouTubeImage from "../assets/youtube-button.png";

export default async function YouTube() {
  const videos = await getVideos();
  return (
    <div className="flex-col">
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
      <div className="lg:flex lg:flex-row lg:justify-center overflow-hidden">
        {videos.map((video, index) => {
          if (index < videos.length - 1) {
            return (
              <div key={video._id} className="flex justify-center">
                <Video key={video._id} src={video.url} title={video.title} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
