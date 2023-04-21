import { getVideos } from "@/sanity/sanity-utils";
import Video from "./Video";

export default async function YouTube() {
  const videos = await getVideos();
  return (
    <div className="flex-col">
      <div className="flex ml-8 py-5 items-center">
        <div className="bg-blue-800 rounded-full w-20 h-20"></div>
        <div className="flex-col ml-5 mt-3">
          <h5>Bernard Marr</h5>
          <h6>71K Subscribers . 698 Videos . 5.4M views</h6>
        </div>
        <div className="flex justify-center ml-auto mr-20">
          <button className="bg-red-500 border border-black h-10 px-12">
            YouTube
          </button>
          <p className="border border-black h-10 flex items-center">71K</p>
        </div>
      </div>
      <div className="flex ml-8 mr-10 justify-center items-center flex-wrap">
        {videos.map((video) => (
          <Video key={video._id} src={video.url} title={video.title} />
        ))}
      </div>
    </div>
  );
}
