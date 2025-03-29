"use client";

import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess as ChessJS } from "chess.js";
import type {
  CustomSquareStyles,
  Square,
} from "react-chessboard/dist/chessboard/types";

export interface ChessProps {
  game?: ChessJS;
  onMove?: (move: string) => void;
}

export default function Chess({ game, onMove }: ChessProps) {
  const [gameState, setGameState] = useState<ChessJS>(game || new ChessJS());
  const [moveFrom, setMoveFrom] = useState<Square | null>(null);
  const [moveTo, setMoveTo] = useState<Square | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<CustomSquareStyles>({});

  const getMoveOptions = (square: Square): boolean => {
    const moves = gameState?.moves({
      square,
      verbose: true,
    });

    if (moves.length === 0) {
      setPossibleMoves({});
      return false;
    }

    const newSquares: CustomSquareStyles = {};

    moves.forEach((move) => {
      newSquares[move.to] = {
        background:
          gameState?.get(move.to) &&
          gameState?.get(move.to)?.color !== gameState?.get(square)?.color
            ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
            : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
        borderRadius: "50%",
      };
    });

    newSquares[square] = {
      background: "rgba(255, 255, 0, 0.4)",
    };

    setPossibleMoves(newSquares);

    return true;
  };

  const onSquareClick = (square: Square): void => {
    if (moveFrom === null) {
      const canMove = getMoveOptions(square);

      if (canMove) {
        setMoveFrom(square);
      }
    } else if (moveTo === null) {
      const moves = gameState?.moves({ square: moveFrom, verbose: true });

      if (!moves) {
        return;
      }

      const isValidMove = moves.find(
        (move) => move.from === moveFrom && move.to === square
      );

      if (!isValidMove) {
        const canMove = getMoveOptions(square);

        setMoveFrom(canMove ? square : null);
      } else {
        setMoveTo(square);
        setPossibleMoves({});

        gameState?.move({ from: moveFrom, to: square });

        onMove?.(gameState?.pgn() ?? "");

        setMoveFrom(null);
        setMoveTo(null);
      }
    }
  };

  return (
    <div className="flex flex-col w-1/2 justify-center items-center">
      {gameState ? (
        <Chessboard
          position={gameState.fen()}
          onSquareClick={onSquareClick}
          arePiecesDraggable={false}
          customSquareStyles={{ ...possibleMoves }}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
