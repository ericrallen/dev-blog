import pgnDataset from "./pgn-dataset";
import kagglePgnDataset from "./kaggle-pgn";

export type DatasetMap = Record<string, string[][]>;

export default {
  "pgn-dataset": pgnDataset,
  "kaggle-pgn": kagglePgnDataset,
} as DatasetMap;
