"use client";

import React from "react";
import { useState } from "react";
import { mintWarrantyNFT } from "../services/nft";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { Shield, Package, FileText, Clock, Sparkles } from "lucide-react";

const PINATA_API_KEY = "8a224262d33aa3e2858b";
const PINATA_SECRET_API_KEY =
  "a633499e952d7c2b99397a679381ece598b6f1d1f30b7cb42fc124b3e4ec9261";

function ProductForm({ publicKey }) {
  const { wallet } = useWallet();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    warrantyPeriod: "",
  });

  const uploadJSONToPinata = async (json) => {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      json,
      {
        headers: {
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET_API_KEY,
        },
      }
    );

    return res.data.IpfsHash; // CID
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!wallet || !publicKey) return alert("Connect your wallet first");

    setIsSubmitting(true);

    try {
      // 2️⃣ Create metadata.json object
      const metadataJSON = {
        name: formData.name,
        description: formData.description,
        warrantyPeriod: formData.warrantyPeriod,
      };

      // 3️⃣ Upload metadata.json to Pinata
      const metadataCID = await uploadJSONToPinata(metadataJSON);
      const metadataURI = `https://gateway.pinata.cloud/ipfs/${metadataCID}`;

      // 4️⃣ Mint NFT with metadata URI
      const metadata = {
        name: formData.name,
        uri: metadataURI,
      };

      const nft = await mintWarrantyNFT(wallet.adapter, metadata);
      alert(`✅ NFT Minted: ${nft.address}`);

      // Reset form after successful submission
      setFormData({
        name: "",
        description: "",
        warrantyPeriod: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Mint failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  to-blue-50 p-4">
      <div className=" mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#513490] to-blue-500 rounded-full mb-6">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Create a guarantee
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Mint your product warranty as an NFT on Solana blockchain. Build
            trust with your customers today.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-8 animate-slide-up">
          <div className="text-center pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Warranty Details
            </h2>
            <p className="text-gray-600">
              Fill in the information below to create your product guarantee NFT
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Product Name Field */}
            <div
              className="space-y-3 animate-slide-in-left"
              style={{ animationDelay: "0.1s" }}
            >
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <Package className="h-4 w-4 text-[#513490]" />
                Product Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your product name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-[#513490] focus:outline-none transition-all duration-300 hover:border-gray-300"
              />
            </div>

            {/* Description Field */}
            <div
              className="space-y-3 animate-slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              <label
                htmlFor="description"
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <FileText className="h-4 w-4 text-[#513490]" />
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe your product and warranty coverage"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#513490] focus:outline-none transition-all duration-300 hover:border-gray-300 resize-none"
              />
            </div>

            {/* Warranty Period Field */}
            <div
              className="space-y-3 animate-slide-in-left"
              style={{ animationDelay: "0.3s" }}
            >
              <label
                htmlFor="warrantyPeriod"
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <Clock className="h-4 w-4 text-[#513490]" />
                Warranty Period
              </label>
              <input
                id="warrantyPeriod"
                name="warrantyPeriod"
                type="text"
                placeholder="e.g., 2 years, 24 months, 1 year"
                value={formData.warrantyPeriod}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-[#513490] focus:outline-none transition-all duration-300 hover:border-gray-300"
              />
            </div>

            {/* Submit Button */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                type="submit"
                disabled={isSubmitting || !wallet || !publicKey}
                className="w-full h-14 bg-gradient-to-r from-[#513490] to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Minting NFT...
                  </>
                ) : !wallet || !publicKey ? (
                  <>
                    <Shield className="h-5 w-5" />
                    Connect Wallet First
                  </>
                ) : (
                  <>
                    <Shield className="h-5 w-5" />
                    Create warranty NFT
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Wallet Status */}
          {wallet && publicKey && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
              <div className="flex items-center gap-2 text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">
                  Wallet Connected: {publicKey.toString().slice(0, 8)}...
                  {publicKey.toString().slice(-8)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            {
              icon: Shield,
              title: "Blockchain Secured",
              desc: "Immutable on Solana",
            },
            {
              icon: Clock,
              title: "Instant Minting",
              desc: "Fast NFT creation",
            },
            { icon: Sparkles, title: "Decentralized", desc: "True ownership" },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <feature.icon className="h-8 w-8 text-[#513490] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
