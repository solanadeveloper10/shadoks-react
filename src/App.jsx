import { BrowserRouter, Routes, Route } from "react-router";

import './App.css'

import Layout from "./_components/Layout";
import Home from "./_pages/Home";
import Tokenomics from "./_pages/Tokenomics";
import Roadmap from "./_pages/Roadmap";
import HowToBuy from "./_pages/HowToBuy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
