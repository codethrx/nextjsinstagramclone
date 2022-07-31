import React from "react";

function Story({ name, img: image }) {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <img
        src={image}
        alt={name}
        className="rounded-full w-14 h-14 object-contain border-red-500 cursor-pointer border-2 transition  ease-out duration-75 hover:scale-110"
      />
      <p className="text-xs text-center truncate mx-[30px] ">{name}</p>
    </div>
  );
}

export default Story;
