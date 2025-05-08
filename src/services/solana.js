import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com");

export const getBalance = async (publicKey) => {
  const balance = await connection.getBalance(new PublicKey(publicKey));
  return balance / 1e9; // в SOL
};
