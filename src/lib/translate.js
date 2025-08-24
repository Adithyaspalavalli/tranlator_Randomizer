// translate.js

export async function translateText({ text, target }) {
  const url = import.meta.env.VITE_TRANSLATE_URL;
  const apiKey = import.meta.env.VITE_TRANSLATE_KEY;
  const apiHost = import.meta.env.VITE_TRANSLATE_HOST;

  const payload = {
    target_lang: target,
    text: Array.isArray(text) ? text : [text]
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": apiHost,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const raw = await response.text();
    // console.log("Raw API response:", raw);

    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      throw new Error("API did not return JSON: " + raw);
    }

    return {
      raw,
      translated: data?.translatedTexts?.[0] || null
    };
  } catch (err) {
    console.error("Translation API error:", err.message);
    throw err;
  }
}
