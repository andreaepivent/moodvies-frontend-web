import React, { useState } from "react";

function IconMovie({ nom }) {

const [selected,setSelected] = useState(false)

  return (
    <img
      src={"/Film_Poster/" + nom + ".png"}
      className={"size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-125 hover:brightness-75"  + (selected ? (" border-4 border-white"):"")}
      alt={nom + " Movie"} onClick={()=>setSelected(!selected)} onContextMenu={(e)=>e.preventDefault()}
    />
  );
}

export default IconMovie;
