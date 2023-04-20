import Video from "./Video";

export default function YouTube() {
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
      <div className="flex ml-8 mr-10 items-center justify-center sm:flex-col-1">
        <div className="flex-col items-center justify-center text-center">
          <iframe
            className="my-5 mx-3"
            width="400"
            height="200"
            src={`https://www.youtube.com/embed/CcBHZ0t2Qwc?autoplay=0&origin=http://example.com&controls=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <>The 5 Biggest Artificial Intelligence Trends In...</>
        </div>
        <Video src="`https://youtu.be/kLsER_zHiS4" title="Youtube For Sanity" />
        <div className="flex-col items-center justify-center text-center">
          <iframe
            className="m-5"
            width="400"
            height="200"
            src={`https://www.youtube.com/embed/UhJ8cas5XX0?autoplay=0&origin=http://example.com&controls=1&rel=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <h4>The 5 Biggest Artificial Intelligence Trends In...</h4>
        </div>
        <div className="flex-col items-center justify-center text-center">
          <iframe
            className="m-5"
            width="400"
            height="200"
            src={`https://www.youtube.com/embed/rCG6Gdj_fWE?autoplay=0&origin=http://example.com&controls=1&rel=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <h4>The 5 Biggest Artificial Intelligence Trends In...</h4>
        </div>
      </div>
    </div>
  );
}
