"use client";

import { Fragment, useEffect, useState } from "react";
import { eloBreakdown } from "./data/elo";
import { gamesByyear } from "./data/games-by-year";

export interface DatasetBreakdownProps {
  breakdownType: "year" | "elo";
}

const datasetColorClasses = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-violet-500",
];

export default function DatasetBreakdown({
  breakdownType = "elo",
}: DatasetBreakdownProps) {
  if (breakdownType === "year") {
    const totalGames = Object.values(gamesByyear).reduce((a, b) => a + b, 0);

    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [hoveredYear, setHoveredYear] = useState<string | null>(null);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const onClickYear = (year: string) => {
      if (selectedYear === year) {
        setSelectedYear(null);
      } else {
        setSelectedYear(year);
      }
    };

    const handleMouseEnter = (year: string) => {
      console.log("mouse enter", year);
      setHoveredYear(year);
      setIsHovering(true);
    };

    const handleMouseLeave = (year: string) => {
      console.log("mouse leave", year);
      setHoveredYear(null);
      setIsHovering(false);
    };

    const displayYear = selectedYear || hoveredYear;

    return (
      <div>
        <h1>Games by Year</h1>
        <div className="flex flex-row w-full h-12 gap-0 relative">
          {Object.entries(gamesByyear).map(([year, count]) => {
            const percentage = ((count / totalGames) * 100).toFixed(2);

            const width = `${percentage}%`;

            let opacity = "opacity-100";

            let bgColor =
              datasetColorClasses[
                parseInt(year, 10) % datasetColorClasses.length
              ];

            if (selectedYear) {
              if (selectedYear === year) {
                opacity = "opacity-100";
              } else {
                opacity = hoveredYear === year ? "opacity-75" : "opacity-50";
              }
            } else {
              if (isHovering) {
                if (hoveredYear === year) {
                  opacity = "opacity-75";
                } else {
                  opacity = "opacity-50";
                }
              } else {
                opacity = "opacity-100";
              }
            }

            return (
              <Fragment key={year}>
                <button
                  onMouseEnter={() => handleMouseEnter(year)}
                  onMouseLeave={() => handleMouseLeave(year)}
                  title={`${year}: ${count.toLocaleString()} games`}
                  onClick={() => onClickYear(year)}
                  style={{ width }}
                  className={`w-full h-full cursor-pointer appearance-none hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 ${bgColor} ${opacity}`}
                />
              </Fragment>
            );
          })}
        </div>
        <div className="text-sm text-neutral-500">
          {displayYear ? (
            <>
              <strong>{`${displayYear}:`}</strong>{" "}
              {gamesByyear[parseInt(displayYear, 10)].toLocaleString()} games
            </>
          ) : (
            <>
              <strong>Total:</strong> {totalGames.toLocaleString()} games
            </>
          )}
        </div>
        <div className="text-xs text-neutral-500">
          Year Range: {Math.min(...Object.keys(gamesByyear).map(Number))} -{" "}
          {Math.max(...Object.keys(gamesByyear).map(Number))}
        </div>
      </div>
    );
  }

  const eloMax = Math.max(
    Math.max(eloBreakdown.White, eloBreakdown.Black),
    4000
  );
  const eloMin = Math.min(Math.min(eloBreakdown.White, eloBreakdown.Black), 0);

  const eloRange = eloMax - eloMin;

  const blackEloPercentage = (eloBreakdown.Black / eloRange) * 100;
  const whiteEloPercentage = (eloBreakdown.White / eloRange) * 100;

  return (
    <div className="w-full">
      <strong>Average Elo:</strong>{" "}
      <span className="monospace">{eloBreakdown.Average}</span>
    </div>
  );
}
