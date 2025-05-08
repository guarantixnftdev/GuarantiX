// src/components/ProductForm.jsx
import { useState } from "react";
import { mintWarrantyNFT } from "../services/nft";
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";

function ProductForm({ publicKey }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    warrantyPeriod: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mintWarrantyNFT(publicKey, formData);
    alert("Гарантия создана!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
      <input name="name" placeholder="Название товара" onChange={handleChange} className="w-full p-2 border border-purple-700 rounded text-gray-500" />
      <textarea name="description" placeholder="Описание" onChange={handleChange} className="w-full p-2 border rounded text-gray-500" />
      <input name="warrantyPeriod" placeholder="Срок гарантии (мес.)" onChange={handleChange} className="w-full p-2 border rounded text-gray-500" />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Создать NFT-гарантию</button>
    </form>
  );
}

export default ProductForm;
