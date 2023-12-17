import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/game"
          element={
            <div className="parent-container h-screen w-screen flex items-center justify-center">
              <GamePage />
            </div>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
