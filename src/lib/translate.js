const apiUrl = import.meta.env.VITE_TRANSLATE_URL;   // should be https://openl-translate.p.rapidapi.com/translate/bulk
const apiHost = import.meta.env.VITE_TRANSLATE_HOST; // openl-translate.p.rapidapi.com
const apiKey  = import.meta.env.VITE_TRANSLATE_KEY;

export async function translateText({ text, target }) {
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey,
      },
      body: JSON.stringify({
        texts: Array.isArray(text) ? text : [text], // MUST be array
        target: target
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API error: ${res.status} - ${errorText}`);
    }

    const data = await res.json();

    // The API returns: { translations: ["Hola mundo"] }
    const translated = data?.translations?.[0] || "No translation";

    return { translated, raw: JSON.stringify(data, null, 2) };
  } catch (err) {
    console.error("Translation error:", err);
    throw err;
  }
}
