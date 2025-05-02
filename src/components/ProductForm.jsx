// src/components/ProductForm.jsx
import { useState } from "react";
import { mintWarrantyNFT } from "../services/nft";

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
      <input name="name" placeholder="Название товара" onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="description" placeholder="Описание" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="warrantyPeriod" placeholder="Срок гарантии (мес.)" onChange={handleChange} className="w-full p-2 border rounded" />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Создать NFT-гарантию</button>
    </form>
  );
}

export default ProductForm;
