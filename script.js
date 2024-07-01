document.getElementById('lengthSlider').addEventListener('input', function() {
  document.getElementById('lengthValue').innerText = this.value;
});

document.getElementById('copy').addEventListener('click', function() {
  const password = document.getElementById('password').value;
  navigator.clipboard.writeText(password).then(() => {
    alert('Password copied to clipboard');
  });
});

document.getElementById('generate').addEventListener('click', function() {
  const length = document.getElementById('lengthSlider').value;
  const includeUppercase = document.getElementById('includeUppercase').checked;
  const includeLowercase = document.getElementById('includeLowercase').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  let characters = '';
  if (includeUppercase) characters += uppercase;
  if (includeLowercase) characters += lowercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  document.getElementById('password').value = password;
});
