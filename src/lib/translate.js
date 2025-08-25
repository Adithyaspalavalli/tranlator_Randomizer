const apiUrl = import.meta.env.VITE_TRANSLATE_URL;
const apiHost = import.meta.env.VITE_TRANSLATE_HOST;
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
        q: text,
        target: target,
        source: "en", // since we are translating from English
      }),
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();

    // Adjust this according to the API’s actual response structure
    const translated =
      data?.data?.translations?.[0]?.translatedText || "No translation";

    return { translated, raw: JSON.stringify(data, null, 2) };
  } catch (err) {
    console.error("Translation error:", err);
    throw err;
  }
}
