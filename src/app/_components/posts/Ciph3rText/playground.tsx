"use client";

import { useState } from "react";
import Ciph3rText, {
  type Ciph3rTextProps,
  BASE_PRINTABLE_CHARACTERS,
  ACTIONS,
} from "@interwebalchemy/ciph3r-text";

import Dropdown from "../VisualizationLibrary/Dropdown";

const actions = ACTIONS;

const characterSets: Record<
  string,
  { charset: string; label: string; value: string }
> = {
  default: {
    charset: BASE_PRINTABLE_CHARACTERS,
    label: "Default",
    value: "default",
  },
  binary: {
    charset: `01`,
    label: "Binary",
    value: "binary",
  },
  hex: {
    charset: `0123456789abcdef`,
    label: "Hexadecimal",
    value: "hex",
  },
  matrix: {
    charset: `012ᴈ45789Ƶﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ:・."=*+-<></>¦｜╌çｸ二コソヤ日`,
    label: "The Matrix",
    value: "matrix",
  },
  lovecraft: {
    charset: `A̸̡̬̺͝B̶̨̬̟̉̈́C̸̪̙̣̒̎D̶͕̱̜̆͑̚͝E̶̜̞̳̽͐̔͜F̶̧̝̳̜̅̋͝Ģ̴̱͖͌H̴̻̩̪̰͆̒Ḯ̵̧̖̜͝J̴̗͚̝̈̓K̷̦͍͎̮̃͛͂͋L̶͙̦͉̉ͅM̶̢̀́͝N̶͕̣̕O̴̠̔͜Ṕ̶̘̱̀Q̷̡̻̼̩͗̌́R̴̞̼͑̅Ṡ̶̪̜T̵̳͎͑̅̀̿Ȕ̸̩͔̣͈̚V̸̩̹͝W̴̠͎̾̃Ẍ̵͓͙̯̱́Ÿ̶̗̼̙́͋̂Z̶̙̰̟̉͠`,
    label: "Lovecraftian",
    value: "lovecraft",
  },
  irishRunes: {
    charset: `᚛ᚉᚑᚅᚔᚋᚈᚍᚂᚐᚌᚓ᚜`,
    label: "Irish Runes",
    value: "irishRunes",
  },
  angloSaxonRunes: {
    charset: `ᚳ᛫ᛗᚨᚷᛚᛋᛖᚩᛏᚪᚾᛞᚻᛁᚱᚧ᛬ᚠᛇᛒᛦᚦᚢᚹᚳᚫ`,
    label: "Anglo-Saxon Runes",
    value: "angloSaxonRunes",
  },
};

export default function Ciph3rTextPlayground() {
  const [characterSet, setCharacterSet] =
    useState<keyof typeof characterSets>("default");
  const [action, setAction] = useState<string>(ACTIONS[0]);
  const [defaultText, setDefaultText] = useState<string>("");
  const [targetText, setTargetText] = useState<string>("");

  const handleCharacterSetChange = (option: string) => {
    setCharacterSet(option as keyof typeof characterSets);
  };

  const handleActionChange = (option: string) => {
    setAction(option);
  };

  const handleDefaultTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultText(e.target.value);
  };

  const handleTargetTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetText(e.target.value);
  };

  return (
    <div className="flex flex-col border border-neutral-600 rounded-sm p-4">
      <Dropdown
        options={Object.keys(characterSets).map((key) => ({
          label: characterSets[key].label,
          value: characterSets[key].value,
        }))}
        onChange={handleCharacterSetChange}
        label="Character Set"
      />
      <Dropdown
        options={actions.map((action) => ({
          label: action,
          value: action,
        }))}
        onChange={handleActionChange}
        label="Action"
      />
      <input
        type="text"
        value={defaultText}
        onChange={handleDefaultTextChange}
      />
      <input type="text" value={targetText} onChange={handleTargetTextChange} />
      <Ciph3rText
        defaultText={defaultText}
        targetText={targetText}
        // @ts-expect-error
        action={action}
        characters={characterSets[characterSet].charset}
      />
    </div>
  );
}
