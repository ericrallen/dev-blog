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
    label: "Default Character Set",
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
    charset: `ᚳ᛫ᛗᚨᚷᛚᛋᛖᚩᛏᚪᚾᛞᚻᛁᚱᚧ᛬ᚠᛇᛒᛦᚦᚢᚹᚳᚫ᛭`,
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
    <div className="flex flex-col border border-neutral-600 rounded-sm p-4 gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="characterSet" className="text-neutral-600 text-sm">
          Character Set
        </label>
        <Dropdown
          id="characterSet"
          options={Object.keys(characterSets).map((key) => ({
            label: characterSets[key].label,
            value: characterSets[key].value,
          }))}
          onChange={handleCharacterSetChange}
          label="Character Set"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="defaultText" className="text-neutral-600 text-sm">
            Default Text
          </label>
          <input
            id="defaultText"
            className="text-neutral-800 w-full p-2 border rounded-sm resize-none h-10"
            type="text"
            value={defaultText}
            onChange={handleDefaultTextChange}
            placeholder="Your brain does the translating."
          />
        </div>
        <div>
          <label htmlFor="targetText" className="text-neutral-600 text-sm">
            Target Text
          </label>
          <input
            id="targetText"
            className="text-neutral-800 w-full p-2 border rounded-sm resize-none h-10"
            type="text"
            value={targetText}
            onChange={handleTargetTextChange}
            placeholder="I don't even see the code."
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="action" className="text-neutral-600 text-sm">
          Action
        </label>
        <Dropdown
          id="action"
          options={actions.map((a) => ({
            label: a,
            value: a,
            disabled: a === "transform" && (!defaultText || !targetText),
          }))}
          onChange={handleActionChange}
          label="Action"
        />
      </div>
      <div className="flex flex-row gap-2 border border-neutral-600 rounded-sm p-2 h-10 mt-8 items-center">
        <label className="text-neutral-600 text-sm">Ciph3r Text</label>
        <Ciph3rText
          defaultText={defaultText}
          targetText={targetText}
          // @ts-expect-error
          action={action}
          characters={characterSets[characterSet].charset}
        />
      </div>
    </div>
  );
}
