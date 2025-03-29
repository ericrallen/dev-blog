import { Fragment } from "react";

import datasets from "./datasets";

export interface DatasetViewerProps {
  datasetName: string;
  title?: string;
}

export default function DatasetViewer({
  datasetName,
  title,
}: DatasetViewerProps) {
  const dataset = datasets[datasetName];

  if (!dataset) {
    throw new Error(`Dataset ${datasetName} not found`);
  }

  const columns = dataset[0];

  const rows = dataset.slice(1);

  return (
    <div className="flex flex-col w-full justify-start items-start">
      {title && (
        <h4 className="text-sm mb-2 text-neutral-500 font-bold">{title}</h4>
      )}
      <div className="w-full h-64 overflow-y-scroll overflow-x-hidden border border-neutral-600">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-neutral-950 after:content-[''] after:border-b after:border-neutral-600 after:w-full after:absolute">
            <tr className="text-left">
              <th className="p-2 border-r border-neutral-600"></th>
              {columns.map((column) => (
                <th className="p-2" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr className="border-b border-neutral-600" key={index}>
                <td className="p-2 monospace border-r border-neutral-600 text-right text-neutral-600">
                  {index + 1}
                </td>
                {row.map((cell) => (
                  <td key={cell} className="p-2 monospace">
                    <div className="text-nowrap overflow-hidden overflow-ellipsis">
                      {cell}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
