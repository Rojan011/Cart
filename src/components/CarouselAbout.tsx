import { useState, useRef, useEffect } from "react";
import { persons } from "../data/persons";
import classNames from "classnames";
import { FaPause, FaPlay } from "react-icons/fa";

function CarouselAbout() {
  const [activeItem, setActiveItem] = useState<number>(3);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio when the component mounts
    audioRef.current = new Audio("/data/theme.mp3");

    // Add event listener to reset state when audio ends
    const handleAudioEnd = () => {
      setIsPlaying(false); // Reset play state when music finishes
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      // Cleanup: Stop the music when leaving the page and remove event listener
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((error) => console.warn("Playback error:", error));
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[800px] w-full ">
      <div className="w-[1200px] max-w-full cursor-pointer">
        <ul className="flex group h-[500px] gap-2 justify-center">
          {persons.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "overflow-hidden [&[aria-current='true']]:w-[48%] w-[8%] rounded-2xl transition-[width] first:w-[1%] last:w-[1%] relative",
                "hover:w-[12%] [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%]"
              )}
              key={person.name}
            >
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-purple-900/40 z-10"></div>

                <img
                  className="h-full w-full object-cover grayscale"
                  src={person.img}
                  alt={person.name}
                />
              </div>

              {activeItem === index && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                  <h2 className="text-2xl font-bold text-white">
                    {person.name}
                  </h2>
                  <p className="text-base text-white/80">{person.title}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className=" mt-10 px-3">
        <button
          type="button"
          className="text-white bg-[#ff3535]  hover:bg-[#FF6B35] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#ff3535] dark:hover:bg-[#FF6B35] focus:outline-none cursor-pointer"
          onClick={toggleMusic}
        >
          <div className="flex justify-center items-center">
            {isPlaying ? <FaPause /> : <FaPlay />}
            <span className="ml-2">The Avengers</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default CarouselAbout;
