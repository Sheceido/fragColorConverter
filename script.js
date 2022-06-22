const r = document.getElementById('r');
const g = document.getElementById('g');
const b = document.getElementById('b');
const a = document.getElementById('a');

const output = document.getElementById('output');

const arrayListen = [r, g, b, a];
let arrayOutput = [0, 0, 0, 1.0];

for (let i = 0; i < arrayListen.length; i++) {

    arrayListen[i].addEventListener('input', (event) => {

        if (i < 3) {
            arrayOutput[i] = parseFloat(event.target.value) / 255;
        } else {
            arrayOutput[i] = parseFloat(event.target.value);
        }


        output.innerHTML = `gl_FragColor = vec4(${arrayOutput});`;
    });
}