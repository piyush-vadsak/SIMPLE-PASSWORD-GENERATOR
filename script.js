document.getElementById("generate").addEventListener("click", function () {
  const length = parseInt(document.getElementById("length").value);
  const includeLetters = document.getElementById("letters").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const password = generatePassword(
    length,
    includeLetters,
    includeNumbers,
    includeSymbols
  );
  document.getElementById("password").value = password;
});

function generatePassword(length, letters, numbers, symbols) {
  const lettersSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersSet = "0123456789";
  const symbolsSet = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characters = "";
  if (letters) characters += lettersSet;
  if (numbers) characters += numbersSet;
  if (symbols) characters += symbolsSet;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}
