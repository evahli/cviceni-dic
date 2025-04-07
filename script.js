console.log('ahoj');

const isDIC = (inputString) => {
  if (inputString.length < 11) {
    return false;
  }
  if (inputString.length >= 12) {
    return false;
  }
  const prefix = inputString.slice(0, 2);
  if (prefix !== 'CZ') {
    return false;
  }
  const digits = inputString.slice(2);
  if (validator.isInt(digits) === false) {
    return false;
  }
  return true;
};

const input1 = 'CZ12345f6789';
const digits = input1.slice(2, 11);

const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(userInput.value);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (isDIC(userInput.value) === false)
  {
    return (document.body.innerHTML = `<h1>Smula!</h1> <p>Tohle DIC je bamboozle</p>`);
  }
  return (document.body.innerHTML = `<h1>Jupi!</h1> <p>Tohle DIC je LEGIT!</p>`);
});

/* Postupujte dle následujících kroků:


Dále si ve funkci do proměnné prefix uložte první dva znaky vstupního řetězce.
Pomocí podmínky zkontrolujte, že proměnná prefix obsahuje přesně znaky CZ. Pokud ne, ihned vraťte false.
Do proměnné digits si uložte část vstupního řetězce od třetího znaku dále.
Použijte metodu validator.isInt, která umí zkontrolovat, zda řetězec obsahuje pouze číslice. Pokud metoda vrátí false, ihned také vraťte false.
Pokud funkce dospěla až do tohoto bodu, vstup prošel všemi testy. Můžeme vrátit true.
Vyzkoušejte svoji funkci na různých vstupech a ověřte, že funguje. Nezapomeňte ověřit platná i neplatná DIČ.
*/
