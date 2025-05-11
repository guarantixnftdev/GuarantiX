// src/components/NFTCard.jsx
import React from "react";

import cardImage from '../assets/card.png';


function NFTCard({ nft }) {
  console.log(nft);
  
    return (
      <div className="bg-card  rounded shadow" onClick={()=>console.log(nft)}>

        <img src={cardImage} alt={nft.name} className="w-full h-48 object-cover rounded" />
        <div className="px-4 py-2">
          <h3 className="mt-2 text-lg font-bold text-[#513490]">{nft.name}</h3>
          <p className="text-sm text-gray-500">{nft.json?.description}</p>
        </div>
      </div>
    );
  }
  
  export default NFTCard;
  