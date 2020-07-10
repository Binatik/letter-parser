const pars = document.querySelector('.decompiler_value');
let inp = document.querySelector('.parser__text');
const buttonCopy = document.querySelector('.btns');

const transformText = text => {
    for (const word of words.words) {
        text = text.replace(
            new RegExp(word, 'gi'),
            word.split('').map((sumbol) => transforms.transforms[sumbol] || sumbol).join(''));
    }
    return text;
}

buttonCopy.addEventListener('click', () => {
    let formatText = transformText(inp.value);   
    pars.innerHTML = formatText;
    navigator.clipboard.writeText(formatText); 
    inp.value = '';
})