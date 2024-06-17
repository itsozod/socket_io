import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Chat from "./pages/chat/Chat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { useToken } from "./pages/login/store";

function App() {
  const { token } = useToken();

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute onlyFor={token} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/chat" element={<ProtectedRoute onlyFor={token} />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
