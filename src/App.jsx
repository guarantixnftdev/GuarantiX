import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { WalletContextProvider } from "./contexts/WalletContext";

function App() {
  return (
    <WalletContextProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </WalletContextProvider>
  );
}

export default App;

