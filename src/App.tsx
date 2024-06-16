import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Chat from "./pages/chat/Chat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

function App() {
  const accessToken = localStorage.getItem("token");
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute onlyFor={accessToken} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/chat" element={<ProtectedRoute onlyFor={accessToken} />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
