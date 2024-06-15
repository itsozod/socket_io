import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Chat from "./pages/chat/Chat";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
