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
  }, [publicKey]);

  return (
    <>
    {connected && publicKey?
    
    <div className="p-8 bg-white min-h-screen space-y-8">
      <h2 className="text-2xl font-semibold text-primary">Your Guarantees</h2>
      <ProductForm publicKey={publicKey?.toBase58()} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {nfts.map((nft) => (
          <NFTCard key={nft.mint} nft={nft} />
        ))}
      </div>
    </div>
    
    :
      <div className="p-8 bg-white min-h-[calc(100vh-60px)] space-y-8 flex items-center">
        <div  className="text-center mx-auto">
          <h2 className="text-center text-purple-700 text-4xl font-bold mb-10">Connect your wallet</h2>
          <WalletMultiButton/>
        </div>
      </div>
    }



    </>
    
  );
}

export default Dashboard;

  