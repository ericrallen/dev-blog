// import all sub components and export their defaults

import Chess from "./Chess";
import Ciph3rText from "./Ciph3rText";
import DatasetBreakdown from "./DatasetBreakdown";
import DatasetViewer from "./DatasetViewer";
import PGNChessVisualizer from "./PGNChessVisualizer";
import Tokenizer from "./Tokenizer";
import TrainingVisualizer from "./TrainingVisualizer";

export default {
  Chess,
  ...Ciph3rText,
  DatasetBreakdown,
  DatasetViewer,
  PGNChessVisualizer,
  Tokenizer,
  TrainingVisualizer,
};
