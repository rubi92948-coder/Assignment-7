import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FriendDetails from "./pages/FriendDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* 👉 Detail Page Route */}
        <Route path="/friend/:id" element={<FriendDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;