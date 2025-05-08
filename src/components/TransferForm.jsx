// src/components/TransferForm.jsx
import { useState } from "react";
import { transferNFT } from "../services/nft";

function TransferForm({ nftMint }) {
  const [receiver, setReceiver] = useState("");

  const handleTransfer = async () => {
    await transferNFT(nftMint, receiver);
    alert("NFT передан!");
  };

  return (
    <div className="mt-4 space-y-2">
      <input
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        placeholder="Адрес получателя"
        className="w-full p-2 border rounded"
      />
      <button onClick={handleTransfer} className="bg-accent text-white px-4 py-2 rounded">Передать</button>
    </div>
  );
}

export default TransferForm;
