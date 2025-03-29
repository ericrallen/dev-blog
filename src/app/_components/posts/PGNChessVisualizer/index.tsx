"use client";

import { useEffect, useState } from "react";
import { Chess as ChessJS } from "chess.js";

import Chess from "../Chess";
import Tokenizer from "../Tokenizer";

export default function PGNChessVisualizer() {
  const [game, setGame] = useState<ChessJS>();
  const [pgn, setPgn] = useState("");

  useEffect(() => {
    setGame(new ChessJS());
  }, []);

  const onMove = (move: string) => {
    const currentPgn = game?.pgn();

    const pgnWithRemovedSpacesAfterTurnNumber = currentPgn?.replace(
      /\.\s/g,
      "."
    );

    setPgn(pgnWithRemovedSpacesAfterTurnNumber ?? "");
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      {game ? (
        <>
          <p className="text-center text-sm text-gray-500 mb-2 w-2/3">
            Move the pieces on the chess board to generate a PGN string that's
            tokenized in real time.
          </p>
          <Chess game={game} onMove={onMove} />
          <div className="flex flex-col w-full justify-center items-center mt-2">
            <Tokenizer
              value={pgn}
              defaultEncoder="pgn"
              canChangeEncoder={false}
              disabled={true}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
