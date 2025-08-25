const apiUrl = import.meta.env.VITE_TRANSLATE_URL;   // e.g. https://openl-translate.p.rapidapi.com/translate/bulk
const apiHost = import.meta.env.VITE_TRANSLATE_HOST; // e.g. openl-translate.p.rapidapi.com
const apiKey  = import.meta.env.VITE_TRANSLATE_KEY;

export async function translateText({ text, target }) {
  try {
    const payload = {
      texts: Array.isArray(text) ? text : [text], // MUST be array
      target: target
    };

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const raw = await res.text(); // get raw text first
    console.log("Raw API response:", raw);

    if (!res.ok) {
      throw new Error(`API error: ${res.status} - ${raw}`);
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      throw new Error(`Response is not valid JSON: ${raw}`);
    }

    // Expected: { translations: ["Hola mundo"] }
    const translated = data?.translations?.[0] || "No translation";

    return { translated, raw: JSON.stringify(data, null, 2) };
  } catch (err) {
    console.error("Translation error:", err);
    throw err;
  }
}
