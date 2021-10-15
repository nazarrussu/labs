//зберігаємо ім'я гравця і число;
let name = '';
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');
//регулювання ходу гри через гравця
prompt.addEventListener('submit', handleSubmit);

printMessage('Введіть імя гравця:');

input.focus();

function handleSubmit(event) {
    event.preventDefault();
//получаємо значення введене в поле
    processInput(input.value);

    input.value = '';
}
//для виводу ім'я в консоль
function printMessage(message) {
    let li = document.createElement('li');

    li.textContent = message;

    output.appendChild(li);
}

function clearOutput() { //стерає за собою минулі повідомлення;
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}

function processInput(input) {
    if (!input) return;
//провірка наявність змінних name;
    if (!name) {
        name = input;
        clearOutput();
        printMessage(`${name}, загадано число від 0 до 100. Попробуй відгадати його за найменшу кількість спроб. Після кажної спроби я скажу "мало", "багато" чи "вірно".`);
        return;
    }

    printMessage(input);

    let guess = Number.parseInt(input); 

    if (Number.isNaN(guess)) return;

    guesses += 1;

    if (guess > number) {
        printMessage('Багато. Попробуй ще раз.');
    } else if (guess < number) {
        printMessage('Мало. Попробуй ще раз.');
    } else {
        printMessage(`Вірно, це число ${guess}.`);
        printMessage(`Кількість спроб: ${guesses}.`);
        printMessage('GAME OVER');

        prompt.remove();
    }
}