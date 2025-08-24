import { useCallback, useState } from "react";
import { translateText } from "../lib/translate";
import "./Translate.css";

const LANGS = [
  { label: "Hindi", value: "hi" },
  { label: "Kannada", value: "kn" },
  { label: "Telugu", value: "te" },
  { label: "Tamil", value: "ta" },
  { label: "Malayalam", value: "ml" },
  { label: "Marathi", value: "mr" },
  { label: "Gujarati", value: "gu" },
  { label: "Bengali", value: "bn" },
  { label: "Urdu", value: "ur" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
];

export default function Translator() {
  const [text, setText] = useState("");
  const [target, setTarget] = useState("hi");
  const [out, setOut] = useState("");
  const [rawOut, setRawOut] = useState(""); // ✅ to hold raw response
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const doTranslate = useCallback(async () => {
    if (!text.trim()) return;

    setErr("");
    setLoading(true);
    try {
      const { translated, raw } = await translateText({ text, target });
      setOut(translated || "");
      setRawOut(raw || "");
    } catch (e) {
      setErr(e.message || "Something went wrong");
      setOut("");
      setRawOut("");
    } finally {
      setLoading(false);
    }
  }, [text, target]);

 
    return (
    <section className="translator">
      <h2>Text Translator</h2>
      <div className="grid">
        {/* Input */}
        <div>
          <label>Enter English text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something in English…"
          />
          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            <select value={target} onChange={(e) => setTarget(e.target.value)}>
              {LANGS.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
            <button onClick={doTranslate} disabled={loading || !text.trim()}>
              {loading ? "Translating…" : "Translate"}
            </button>
          </div>
          {err && <p className="error">{err}</p>}
        </div>

        {/* Output */}
        <div>
          <label>Output (Translated)</label>
          <textarea readOnly value={out} />
        </div>
      </div>
    </section>
  );
}
