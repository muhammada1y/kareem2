import React from "react";
import "./styles.css";

const TopCarousel = () => {
  return (
    <div
      className='hero-sec flex items-center justify-center h-96 md:h-550 lg:w-full '
      style={{ marginTop: "-3%" }}>
      <h1 className='text-cyan-600 text-4xl font-bold text-center animate-pulse cursor-not-allowed'>
        Discover the best selection of high-quality tiles at IMAN Tiles! 😊
        <br />
        <br />
        <br />
        IMAN Tiles offers a wide selection of high-quality tiles.
      </h1>
    </div>
  );
};

export default TopCarousel;
