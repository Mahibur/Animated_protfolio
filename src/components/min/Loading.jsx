import React, { useState } from "react";

const Loading = () => {
    const [close, setClose] =useState(true)
  return (
    <div onClick={()=>setClose(!close)} className={`absolute top-0 left-0 w-full h-dvh bg-[#010102] justify-center items-center z-[200]
    ${close? "flex":"hidden"}`}>
      <h1 className="text-center text-white font-black font-segoe text-9xl">
        Loading...
      </h1>
    </div>
  );
};
export default Loading;
