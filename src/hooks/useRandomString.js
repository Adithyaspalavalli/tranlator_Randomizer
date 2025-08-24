export function makeRandomString(length, opts) {
    const pools = [];
    if (opts.lower) pools.push("abcdefghijklmnopqrstuvwxyz");
    if (opts.upper) pools.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (opts.digits) pools.push("0123456789");
    if (opts.symbols) pools.push("!@#$%^&*()-_=+[]{};:,.<>/?");
    const pool = pools.join("") || "abcdefghijklmnopqrstuvwxyz";
    let out = "";
    for (let i = 0; i < length; i++) {
      out += pool[Math.floor(Math.random() * pool.length)];
    }
    return out;
  }
  