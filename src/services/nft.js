import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com");
const metaplex = Metaplex.make(connection).use(bundlrStorage());

export const mintWarrantyNFT = async (creatorPubkey, { name, description, warrantyPeriod }) => {
  const metadata = {
    name,
    description: `${description} | Гарантия: ${warrantyPeriod} мес.`,
    image: "https://placehold.co/400x300.png?text=GuarantiX+NFT",
  };

  const { uri } = await metaplex.nfts().uploadMetadata(metadata);
  await metaplex.nfts().create({
    uri,
    name,
    sellerFeeBasisPoints: 0,
    updateAuthority: creatorPubkey,
  });
};

export const getUserNFTs = async (publicKey) => {
  const nfts = await metaplex.nfts().findAllByOwner({ owner: new PublicKey(publicKey) });
  return nfts.map((nft) => ({
    mint: nft.mintAddress.toBase58(),
    name: nft.name,
    description: nft.json?.description,
    image: nft.json?.image,
  }));
};

export const transferNFT = async (mintAddress, recipient) => {
  const nft = await metaplex.nfts().findByMint({ mintAddress: new PublicKey(mintAddress) });
  await metaplex.nfts().send({
    mintAddress: nft.mintAddress,
    toOwner: new PublicKey(recipient),
  });
};

