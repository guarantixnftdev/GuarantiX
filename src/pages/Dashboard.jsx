import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { getUserNFTs } from "../services/nft";
import NFTCard from "../components/NFTCard";
import ProductForm from "../components/ProductForm";
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


function Dashboard() {
  const { publicKey } = useWallet();
  const [nfts, setNfts] = useState([]);
  const { connected, publicKey: walletPublicKey } = useWallet(); //

  useEffect(() => {
    if (publicKey) {
      getUserNFTs(publicKey.toBase58()).then(setNfts);
    }

    console.log(nfts);
  }, [publicKey]);

  return (
    <>
    {connected && publicKey?
    
    <div className="p-8 bg-white min-h-screen space-y-8">
      <div className="max-w-[500px] m-auto mb-10">
       
         <h2 className="text-4xl text-[#513490] font-semibold text-primary text-center mb-5">Your Guarantees</h2>
          <ProductForm publicKey={publicKey?.toBase58()} />
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {nfts.map((nft) => (
          
          
          <NFTCard key={nft.mint} nft={nft}/>
        ))}
      </div>
    </div>
    
    :
      <div className="p-8 bg-white min-h-[calc(100vh-60px)] space-y-8 flex items-center">
        <div  className="text-center mx-auto">
          <h2 className="text-center text-[#513490] text-4xl font-bold mb-10">Connect your wallet</h2>
          <WalletMultiButton/>
        </div>
      </div>
    }



    </>
    
  );
}

export default Dashboard;

  