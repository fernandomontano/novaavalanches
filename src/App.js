import Header from "./components/Header";
import Information from "./components/Information";
import { Routes, Route } from "react-router-dom";
import "./components/Information.css";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="px-24 py-4 font-Poppins no-padding">
      <Header />
      <Routes>
        <Route path="" element={<Information />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
