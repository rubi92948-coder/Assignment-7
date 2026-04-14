import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./components/Timeline";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend/:id" element={<FriendDetails />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;