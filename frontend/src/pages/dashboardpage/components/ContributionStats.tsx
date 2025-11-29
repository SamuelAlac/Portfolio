import { useState, useEffect } from "react";
import GithubCalendar from "react-github-calendar";

export const ContributionStats = () => {
  const [blockSize, setBlockSize] = useState(15);

  useEffect(() => {
    const updateBlockSize = () => {
      const width = window.innerWidth
      // small screens (mobile)
      if (width < 640) setBlockSize(8)
      // medium screens (tablet)
      else if (width < 1024) setBlockSize(12)
      // large screens (desktop)
      else setBlockSize(15)
    };

    updateBlockSize();
    window.addEventListener("resize", updateBlockSize);

    return () => window.removeEventListener("resize", updateBlockSize);
  }, []);

  return (
    <section className="w-full min-h-[16rem]">
      <div className="p-3">
        <h1 className="text-lg md:text-3xl mb-5">GitHub Contributions</h1>
        <div className="w-full overflow-x-auto">
          <div className="flex justify-center">
            <GithubCalendar
              username="samuelalac"
              blockMargin={5}
              blockSize={blockSize}
              showWeekdayLabels
            />
          </div>
        </div>
      </div>
    </section>
  );
};
