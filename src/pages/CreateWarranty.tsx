import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import ProductForm from "../components/ProductForm";

const CreateWarranty = () => {
  const { connected, publicKey: walletPublicKey } = useWallet(); //
  const { publicKey } = useWallet();
  return (
    <>
      {connected && publicKey ? (
        <div className="p-8 bg-white min-h-[calc(100vh-169px)] space-y-8">
          <div className="max-w-[500px] m-auto mb-10">
            <h2 className="text-4xl text-[#513490] font-semibold text-primary text-center mb-5">
              Create a guarantee
            </h2>
            <ProductForm publicKey={publicKey?.toBase58()} />
          </div>
        </div>
      ) : (
        <div className="p-8 bg-white min-h-[calc(100vh-60px)] space-y-8 flex items-center">
          <div className="text-center mx-auto">
            <h2 className="text-center text-[#513490] text-4xl font-bold mb-10">
              Connect your wallet
            </h2>
            <WalletMultiButton />
          </div>
        </div>
      )}
    </>
  );
};

export default CreateWarranty;
