"use client";
import Image from "next/image";
import Draggable from "react-draggable";

const DraggableImage = ({ imgSrc, classes, deg }) => {
  return (
    <Draggable>
      <div>
        <Image
          src={imgSrc}
          className={`${classes} absolute w-[15rem]`}
          draggable={false}
          style={{ rotate: deg + "deg" }}
        />
      </div>
    </Draggable>
  );
};

export default DraggableImage;
