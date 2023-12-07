import { useState } from "react";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <div className="parent-container h-screen w-screen flex items-center justify-center">
      <GamePage />
    </div>
  );
}

export default App;
