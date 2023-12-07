import React, { useState, useRef, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import "../styles/alignBoardStyles.css";
import { Chess } from "chess.js";

interface pieceMove {
  from: string;
  to: string;
}

function GamePage({ orientation }) {
  const chess = useRef(new Chess());
  const [fen, setFen] = useState(chess.current.fen());

  useEffect(() => {
    setFen(chess.current.fen());
  }, []);

  function dropPiece(sourceSquare, targetSquare) {
    const move: pieceMove = {
      from: sourceSquare,
      to: targetSquare,
    };
    try {
      chess.current.move(move);
      setFen(chess.current.fen());
      return true;
    } catch (error) {
      console.log("Invalid move");
    }
  }

  return (
    <div>
      <Chessboard
        id="InitialBoard"
        position={fen}
        boardWidth={600}
        areArrowsAllowed={true}
        snapToCursor={true}
        onPieceDrop={dropPiece}
      />
    </div>
  );
}

export default GamePage;
