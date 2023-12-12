import React, { useState, useRef, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import "../styles/alignBoardStyles.css";
import { Chess } from "chess.js";

interface pieceMove {
  from: string;
  to: string;
  promotion: string;
}

function GamePage({ orientation }) {
  const chess = useRef<ChessInstance>(new Chess());
  const [fen, setFen] = useState<string>(chess.current.fen());

  useEffect(() => {
    setFen(chess.current.fen());
    if (chess.current.isGameOver()) {
      console.log("Game over");
      return;
    }
  }, [fen]);

  function dropPiece(
    sourceSquare: string,
    targetSquare: string,
    piece: string,
  ) {
    const move: pieceMove = {
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1].toLowerCase() ?? "q",
    };

    try {
      chess.current.move(move);
      setFen(chess.current.fen());
      return true;
    } catch (error) {
      console.log(error);
      console.log("Invalid move");
      return false;
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
