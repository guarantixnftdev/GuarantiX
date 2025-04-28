import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import { Keypair, Connection } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com");
const metaplex = Metaplex.make(connection);

export const mintNFT = async (payer, metadata) => {
  const { nft } = await metaplex
    .nfts()
    .create({
      uri: metadata.uri,
      name: metadata.name,
      sellerFeeBasisPoints: 0,
    })
    .run();
  return nft;
};
