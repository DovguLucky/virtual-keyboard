

let nameKeys = {
    "firstLine": ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    "secondLine": ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    "thirdLine": ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    "fourthLine": ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    "fiveLine": ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
}


let engKeyBoard = {
    firstLine: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    secondLine: ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
    thirdLine: ["caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    fourthLine: ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&#9650;", "Shift"],
    fiveLine: ["ctrl", "Win", "alt", "Space", "alt", "&#9668;", "&#9660;", "&#9658;", "ctrl"]
};
let engKeyBoardShift = {
    firstLine: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    secondLine: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', "Del"],
    thirdLine: ['caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    fourthLine: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift'],
    fiveLine: ['ctrl', 'Win', 'alt', 'Space', 'alt', '&#9668;', '&#9660;', '&#9658;', 'ctrl']
};

let rusKeyBoard = {
    firstLine: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    secondLine: ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
    thirdLine: ["caps lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    fourthLine: ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "&#9650;", "Shift"],
    fiveLine: ["ctrl", "Win", "alt", "Space", "alt", "&#9668;", "&#9660;", "&#9658;", "ctrl"]
};
let rusKeyBoardShift = {
    firstLine: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    secondLine: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', "Del"],
    thirdLine: ['caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', ],
    fourthLine: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', "&#9650;", 'Shift'],
    fiveLine: ["ctrl", "Win", "alt", "Space", "alt", "&#9668;", "&#9660;", "&#9658;", "ctrl"]
};

let language = "eng";
let count = 0;
if (localStorage.getItem("lang")) {
    let lang = localStorage.getItem("lang");
    language = lang;
}
localStorage.clear()


let body = document.querySelector('body');
let wrapper = document.createElement('div');
wrapper.classList.add("wrapper");
body.prepend(wrapper);

let textBoard = document.createElement('div');
textBoard.classList.add("textboard");
textBoard.innerHTML = '<p>Тут будет приветствие!!</p>';
let textArea = document.createElement("textarea");
textArea.rows = "5";
textArea.cols = "100";
textArea.autofocus = true;
textArea.id = "text__output";
textArea.classList.add("text__area");

textBoard.append(textArea);
let checkRegister = document.createElement("input");
checkRegister.type = "checkbox";
checkRegister.classList.add("check__box");
checkRegister.id = "check__register";
textBoard.append(checkRegister);

wrapper.prepend(textBoard);

let keyBoard = document.createElement('div');
keyBoard.classList.add("keyboard");
wrapper.append(keyBoard);

let note = document.createElement('div');
note.classList.add("note");
note.innerHTML = '<p>Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt </p>';
wrapper.append(note);

// Add new keys in line
function getAddKeys(nameKey, thisLine) {
    let key = document.createElement('div');
    key.classList.add("key");
    if (nameKey.length > 1) {
        key.classList.add("word__key");
        nameKey === "caps lock" ?
            key.classList.add("caps__lock") :
            key.classList.add(`${String(nameKey).toLowerCase()}`);
    }
    key.dataset.name = (`${String(nameKey)}`);
    thisLine.append(key);
}

// Add new line in keyboard
function getAddLine(nameLine, langKeyBoard) {
    let line = document.createElement('div');
    line.classList.add("line");
    line.classList.add(`${nameLine}`);
    langKeyBoard[`${nameLine}`].forEach(el => {
        getAddKeys(el, line)
    })
    keyBoard.append(line);
}
// Add new keyboard
function startKeyboard(langKeyBoard) {
    for (let key in langKeyBoard) {
        getAddLine(key, langKeyBoard)
    }
}
// Add new text in every Key
function addInKeys(langKeyBoard) {
    for (let key in langKeyBoard) {
        let count = 0;
        let arrKeys = document.querySelector(`.${key}`).querySelectorAll(".key");
        arrKeys.forEach(el => {
            let inside = `${langKeyBoard[`${key}`][count]}`
            el.innerHTML = inside;
            count++;
            if (inside.length === 1) {
                el.classList.add("word__write")
            }
        })
        count = 0;
    }
}

startKeyboard(nameKeys);
language === "eng" ?
    addInKeys(engKeyBoard) :
    addInKeys(rusKeyBoard);
let keys = document.querySelectorAll(".key");
