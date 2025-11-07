import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ()=>{
    return(
        <div className="flex items-center gap-5 bg-base-300 p-3">
   <p className="text-base-100 bg-secondary py-2 px-3">Latest</p>
     <Marquee speed={50} gradient={false} pauseOnHover={true}>
      <p className="font-bold mx-3">
        Cristiano Ronaldo continues his hunt for the 1,000‑goal milestone after reaching 950 goals in his latest match.
      </p>
      <p className="font-bold mx-3">
        Lionel Messi has extended his contract with Inter Miami CF through 2028 and is committed to staying with the club for the long haul.
      </p>
      <p className="font-bold mx-3">
        Muhammad Yunus has sparked controversy by presenting an artwork to Pakistan depicting an altered map including parts of Northeast India.
      </p>
      <p className="font-bold mx-3">
        North South University (NSU) has broken into the Top 150 of the QS Asia University Rankings 2026 for the first time, ranked 149th overall.
      </p>
      <p className="font-bold mx-3">
        Germany 0-1 Spain: Bonmatí stuns Germany to send Spain to the final!
      </p>
    </Marquee>
        </div>

    )
}

export default LatestNews;