const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function morse(ten) {
  if (ten[0] === "*") return " ";
  let key = "";
  for (let i = 0; i < ten.length; i += 2) {
    const sym = ten[i] + ten[i + 1];
    if (sym === "10") key += ".";
    if (sym === "11") key += "-";
  }
  return MORSE_TABLE[key];
}

function decode(expr) {
  const array = expr.split(/(.{10})/);
  return array.map((element) => morse(element)).join("");
}

module.exports = {
  decode,
};
