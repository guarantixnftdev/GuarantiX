// src/components/NFTCard.jsx
function NFTCard({ nft }) {
    return (
      <div className="bg-card p-4 rounded shadow">
        <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover rounded" />
        <h3 className="mt-2 text-lg font-bold">{nft.name}</h3>
        <p className="text-sm">{nft.description}</p>
      </div>
    );
  }
  
  export default NFTCard;
  