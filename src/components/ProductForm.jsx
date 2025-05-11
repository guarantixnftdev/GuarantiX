// src/components/ProductForm.jsx
import { useState } from "react";
import { mintWarrantyNFT } from "../services/nft";
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { walletAdapterIdentity } from "@metaplex-foundation/js";

const PINATA_API_KEY = '8a224262d33aa3e2858b'
const PINATA_SECRET_API_KEY = 'a633499e952d7c2b99397a679381ece598b6f1d1f30b7cb42fc124b3e4ec9261'


function ProductForm({ publicKey }) {

  const { wallet} = useWallet()

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    warrantyPeriod: "",
  });

  const uploadJSONToPinata = async (json) => {
    const res = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS', json, {
      headers: {
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    })

    return res.data.IpfsHash // CID
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!wallet || !publicKey) return alert('Connect your wallet first')

    try {

      // 2️⃣ Create metadata.json object
      const metadataJSON = {
        name: formData.name,
        description: formData.description,
        warrantyPeriod: formData.warrantyPeriod,
      }

      // 3️⃣ Upload metadata.json to Pinata
      const metadataCID = await uploadJSONToPinata(metadataJSON)
      const metadataURI = `https://gateway.pinata.cloud/ipfs/${metadataCID}`

      // 4️⃣ Mint NFT with metadata URI
      const metadata = {
        name:formData.name,
        uri: metadataURI,
      }

      const nft = await mintWarrantyNFT(wallet.adapter, metadata)
      alert(`✅ NFT Minted: ${nft.address}`)
    } catch (err) {
      console.error(err)
      alert('❌ Mint failed')
    
    await mintWarrantyNFT(wallet, formData);
    alert("Гарантия создана!");
  }};

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
      <input name="name" placeholder="Product name" onChange={handleChange} className="w-full p-2 border border-[#513490] rounded text-gray-500" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border border-[#513490] rounded text-gray-500" />
      <input name="warrantyPeriod" placeholder="Warranty period" onChange={handleChange} className="w-full p-2 border border-[#513490] rounded text-gray-500" />
      <button type="submit" className="bg-[#513490] text-white px-26 block m-auto py-2  rounded">Create warranty</button>
    </form>
  );
}

export default ProductForm;
