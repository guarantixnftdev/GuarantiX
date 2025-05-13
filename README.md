
# 🛡️ Digital Warranty System (NFT-based)

A **React + TypeScript** web application that uses **Solana NFTs** to issue and manage digital warranties. This decentralized system replaces traditional paper receipts with **NFT warranties**, enabling traceability, transferability, and fraud prevention for product warranties.

---

## 🚀 Features

| Feature                      | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| 🧾 NFT Warranties            | Issue digital warranty cards as NFTs upon product purchase                 |
| 🔄 Transferable Ownership    | NFTs (warranties) can be transferred to new owners upon product resale     |
| 🗂️ On-Chain Tracking         | Brands can monitor warranty claims and transfers directly on Solana        |
| 👛 Phantom Wallet Integration | Secure login, NFT transfer, and interactions using the Phantom wallet      |
| 💨 Fast & Responsive         | Built with React, Vite, TailwindCSS, and TypeScript for optimal UX         |

---

## 🛠️ Tech Stack

| Technology       | Description                                    |
|------------------|------------------------------------------------|
| [React](https://reactjs.org/)      | Frontend framework                             |
| [TypeScript](https://www.typescriptlang.org/) | Static typing for scalable code                 |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework                    |
| [Vite](https://vitejs.dev/)        | Fast frontend build tool                        |
| [Phantom Wallet](https://phantom.app/) | Solana wallet integration                       |
| [Solana](https://solana.com/)      | Blockchain for NFT minting and tracking         |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/digital-warranty-nft.git

# Navigate into the project directory
cd digital-warranty-nft

# Install dependencies
npm install

# Start the development server
npm run dev
````

---

## 🔐 Authentication

This project uses [Phantom Wallet](https://phantom.app/) for authentication and wallet interactions.

---

## 📄 NFT Warranty Structure

| Field            | Description                              |
| ---------------- | ---------------------------------------- |
| `model`          | Product model name                       |
| `purchaseDate`   | ISO-formatted date of purchase           |
| `warrantyPeriod` | Duration of the warranty in months/years |
| `seller`         | Wallet address or name of the seller     |
| `owner`          | Current wallet holding the NFT           |

---

## 🔄 Warranty Transfer Flow

1. Product owner initiates a transfer from their Phantom wallet.
2. NFT warranty is sent to the new owner's wallet address.
3. Ownership and warranty validity are recorded on-chain.

