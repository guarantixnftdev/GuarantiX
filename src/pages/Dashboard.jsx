import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { getUserNFTs } from "../services/nft";
import NFTCard from "../components/NFTCard";
import ProductForm from "../components/ProductForm";

function Dashboard() {
  const { publicKey } = useWallet();
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (publicKey) {
      getUserNFTs(publicKey.toBase58()).then(setNfts);
    }
  }, [publicKey]);

  return (
    <div className="p-8 bg-background min-h-screen space-y-8">
      <h2 className="text-2xl font-semibold text-primary">Ваши Гарантии</h2>
      <ProductForm publicKey={publicKey?.toBase58()} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {nfts.map((nft) => (
          <NFTCard key={nft.mint} nft={nft} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

  