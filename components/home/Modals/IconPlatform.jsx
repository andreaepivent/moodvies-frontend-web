import React, { useState } from "react";

function IconPlatform({nom,}) {

    const [selected,setSelected] = useState(false)

  return (
    
      <img
        src={"/logo-platform/"+ nom + ".png"}
        class={"size-20 m-4  rounded transition duration-500 ease-in-out transform hover:scale-125 hover:brightness-75 shadow-glow-white" + (selected ? (" border-4 border-white "):"")}
        alt={ nom + " Logo"} onClick={()=>setSelected(!selected)} onContextMenu={(e)=>e.preventDefault()}
      />

  );
}

export default IconPlatform;
