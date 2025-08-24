import { useCallback, useEffect, useState } from "react";
import { makeRandomString } from "../hooks/useRandomString";

export default function Randomizer() {
  const [len, setLen] = useState(12);
  const [opts, setOpts] = useState({ lower: true, upper: true, digits: true, symbols: false });
  const [value, setValue] = useState("");

  const generate = useCallback(() => {
    setValue(makeRandomString(Number(len) || 0, opts));
  }, [len, opts]);

  useEffect(() => { generate(); }, [generate]);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Random String Generator</h2>

      <div className="grid gap-4 md:grid-cols-[280px,1fr]">
        <div className="space-y-3 p-4 rounded-2xl border bg-white">
          <label className="block text-sm">Length: {len}</label>
          <input
            type="range" min="4" max="64" value={len}
            onChange={(e) => setLen(e.target.value)}
            className="w-full"
          />

          <div className="space-y-2">
            {[
              ["lower","Lowercase"],
              ["upper","Uppercase"],
              ["digits","Digits"],
              ["symbols","Symbols"],
            ].map(([key,label]) => (
              <label key={key} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={opts[key]}
                  onChange={(e) => setOpts(prev => ({ ...prev, [key]: e.target.checked }))}
                />
                {label}
              </label>
            ))}
          </div>

          <button onClick={generate} className="mt-2 w-full px-4 py-2 rounded-xl bg-gray-900 text-white">
            Regenerate
          </button>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Result</label>
          <div className="p-4 rounded-2xl border bg-gray-50 font-mono break-all select-all">
            {value}
          </div>
        </div>
      </div>
    </section>
  );
}
