"use client";
import Image from "next/image";
import Draggable from "react-draggable";
import { useEffect, useState } from "react";

const DraggableImage = ({ imgSrc, classes, deg }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on mount
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();

    // Add resize event listener
    window.addEventListener("resize", checkIsMobile);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const ImageComponent = (
    <Image
      src={imgSrc}
      className={`${classes} absolute sm:w-[15rem] w-[13rem]`}
      draggable={false}
      style={{ rotate: deg + "deg" }}
    />
  );

  return isMobile ? (
    <>{ImageComponent}</>
  ) : (
    <Draggable>{ImageComponent}</Draggable>
  );
};

export default DraggableImage;
