import {
  Metaplex,
  keypairIdentity,
  irysStorage,
} from "@metaplex-foundation/js";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { walletAdapterIdentity } from "@metaplex-foundation/js";

// Настройка подключения
const connection = new Connection("https://api.devnet.solana.com");
const keypair = Keypair.generate(); // В боевом режиме должен использоваться настоящий ключ
const metaplex = Metaplex.make(connection)
  .use(keypairIdentity(keypair))
  .use(
    irysStorage({
      address: "https://devnet.irys.xyz",
      providerUrl: "https://api.devnet.solana.com",
      timeout: 60000,
    })
  );

// Создание NFT-гарантии
export const mintWarrantyNFT2 = async (
  creatorPubkey,
  { name, description, warrantyPeriod }
) => {
  const metadata = {
    name,
    symbol: "GUARANTIX", // Унікальний символ для NFT твого додатку
    description: `${description} | Гарантия: ${warrantyPeriod} мес.`,
    image: "https://placehold.co/400x300.png?text=GuarantiX+NFT",
    attributes: [
      {
        trait_type: "warrantyPeriod",
        value: warrantyPeriod,
      },
    ],
  };

  const { uri } = await metaplex.nfts().uploadMetadata(metadata);
  await metaplex.nfts().create({
    uri: uri,
    name: metadata.name,
    symbol: metadata.symbol,
    sellerFeeBasisPoints: 0,
    updateAuthority: creatorPubkey,
  });
};

export async function mintWarrantyNFT(wallet, metadata) {
  const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet));
  const { nft } = await metaplex.nfts().create({
    uri: metadata.uri,
    name: metadata.name,
    symbol: "GUARANTIX", // Додано символ
    warrantyPeriod: metadata.warrantyPeriod,
    sellerFeeBasisPoints: 0,
    maxSupply: 1,
  });
  return { address: nft.address.toBase58(), metadata };
}

// Получение NFT пользователя

export const getUserNFTs = async (publicKey) => {
  const nfts = await metaplex
    .nfts()
    .findAllByOwner({ owner: new PublicKey(publicKey) });

  const detailedNfts = await Promise.all(
    nfts.map(async (nft) => {
      try {
        const cid = nft.uri.split("/").pop();
        const fixedUri = `https://ipfs.io/ipfs/${cid}`;
        const response = await fetch(fixedUri);
        const json = await response.json();

        return {
          ...nft,
          json,
        };
      } catch (error) {
        console.warn(
          `Помилка при завантаженні метаданих для ${nft.uri}:`,
          error
        );
        return {
          ...nft,
          json: null,
        };
      }
    })
  );

  // Фільтруємо тільки NFT з символом GUARANTIX
  const filtered = detailedNfts.filter(
    (nft) => nft.json?.symbol === "GUARANTIX"
  );

  return filtered;
};

// Передача NFT другому пользователю
export const transferNFT = async (mintAddress, recipient) => {
  const nft = await metaplex
    .nfts()
    .findByMint({ mintAddress: new PublicKey(mintAddress) });
  await metaplex.nfts().send({
    mintAddress: nft.mintAddress,
    toOwner: new PublicKey(recipient),
  });
};
