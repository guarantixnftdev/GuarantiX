import { createContext, useContext } from "react";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const WalletContext = createContext();

export const WalletContextProvider = ({ children }) => {
  const connection = new Connection(clusterApiUrl("devnet"));

  return (
    <WalletContext.Provider value={{ connection }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
