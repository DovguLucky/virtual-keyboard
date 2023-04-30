// капслок при шифте ТОЛЬКО ПРИ МЫШКЕ
// При нажатии других клаиш функцианаль  сещается курсор
// правый альт
// the Shift, Alt, Ctrl, Caps lock and Space keys should work as on a real keyboard

// Eslint
// shift
// ES6
// git

let nameKeys = {
    "firstLine": ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    "secondLine": ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    "thirdLine": ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    "fourthLine": ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    "fiveLine": ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
};

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

let lock = 0;
let language = "eng";
let count = 0;
if (localStorage.getItem("lang")) {
    let lang = localStorage.getItem("lang");
    language = lang;
}
// localStorage.clear()


let body = document.querySelector('body');
let wrapper = document.createElement('div');
wrapper.classList.add("wrapper");
body.prepend(wrapper);

let textBoard = document.createElement('div');
textBoard.classList.add("textboard");
textBoard.innerHTML = '<p>Тут будет приветствие!!</p>';
let textArea = document.createElement("textarea");
textArea.rows = "5";
textArea.cols = "60";
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
note.innerHTML = '<p>Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация:  ctrl + alt </p>';
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
// Reaplace language
function getOtherLanguage(event) {
    if (count === 0) {
        if (event.altKey && event.ctrlKey) {
            count = 1;
            let checkFlag = document.getElementById("check__register");
            if (language === "eng") {
                language = "rus";
                !checkFlag.checked ?
                    addInKeys(rusKeyBoard) :
                    upperCaseAfterCapsLock(rusKeyBoard);
            } else {
                language = "eng";
                !checkFlag.checked ?
                    addInKeys(engKeyBoard) :
                    upperCaseAfterCapsLock(engKeyBoard);
            }
            localStorage.clear()
            localStorage.setItem("lang", language);
        }
    }
}
// Zeroing count for Reaplace language
function getSecurOtherLanguage(event) {
    if (!event.altKey || !event.ctrlKey) {
        count = 0;
    }
}
// Position key SHIFT
function positionShift(event) {
    let checkbox = document.getElementById("check__register")
    if (event.key === "Shift" && !checkbox.checked) {
        if (lock === 1) {
            language === "eng" ?
                addInKeys(engKeyBoardShift) :
                addInKeys(rusKeyBoardShift);
        } else if (lock === 0) {
            language === "eng" ?
                addInKeys(engKeyBoard) :
                addInKeys(rusKeyBoard);
        }
    } else if (event.key === "Shift" && checkbox.checked) {
        if (lock === 1) {
            if (language === "eng") {
                addInKeys(engKeyBoardShift)
                lowerCaseAfterCapsLock(engKeyBoardShift)
            } else {
                addInKeys(rusKeyBoardShift)
                lowerCaseAfterCapsLock(rusKeyBoardShift)
            }
        } else if (lock === 0) {
            language === "eng" ?
                upperCaseAfterCapsLock(engKeyBoard) :
                upperCaseAfterCapsLock(rusKeyBoard);
        }
    }
}

//MOUSE: Position key SHIFT 
function positionShiftClick() {
    let checkbox = document.getElementById("check__register")
    if (!checkbox.checked) {
        if (lock === 1) {
            language === "eng" ?
                addInKeys(engKeyBoardShift) :
                addInKeys(rusKeyBoardShift);
        } else if (lock === 0) {
            language === "eng" ?
                addInKeys(engKeyBoard) :
                addInKeys(rusKeyBoard);
        }
    } else if (checkbox.checked) {
        if (lock === 1) {
            if (language === "eng") {
                addInKeys(engKeyBoardShift)
                lowerCaseAfterCapsLock(engKeyBoardShift)
            } else {
                addInKeys(rusKeyBoardShift)
                lowerCaseAfterCapsLock(rusKeyBoardShift)
            }
        } else if (lock === 0) {
            language === "eng" ?
                upperCaseAfterCapsLock(engKeyBoard) :
                upperCaseAfterCapsLock(rusKeyBoard);
        }
    }
}

// Position key CAPS__LOCK

function upperCaseAfterCapsLock(langKeyBoard) {
    for (let key in langKeyBoard) {
        let count = 0;
        let arrKeys = document.querySelector(`.${key}`).querySelectorAll(".key");
        arrKeys.forEach(el => {
            let inside = `${langKeyBoard[`${key}`][count]}`
            if (inside.split("").length === 1) {
                el.innerText = inside.toUpperCase();
            }
            count++;
        })
    }
}

function lowerCaseAfterCapsLock(langKeyBoard) {
    for (let key in langKeyBoard) {
        let count = 0;
        let arrKeys = document.querySelector(`.${key}`).querySelectorAll(".key");
        arrKeys.forEach(el => {
            let inside = `${langKeyBoard[`${key}`][count]}`
            if (inside.split("").length === 1) {
                el.innerText = inside.toLowerCase();
            }
            count++;
        })
    }
}

// Remove click REAL keyboard
document.addEventListener("keydown", function (event) {
    event.preventDefault();
})

// Replace language and security reapeet
document.addEventListener("keydown", getOtherLanguage);
document.addEventListener("keyup", getSecurOtherLanguage);

// Press on KEYBOARD
document.addEventListener("keydown", function (event) {
    let textArea = document.getElementById("text__output");
    let inside = '';
    let start = textArea.selectionEnd;
    let end = textArea.selectionEnd;
    lock = 1;
    let tabStep = 0;
    for (let key in nameKeys) {
        nameKeys[`${key}`].forEach(el => {
            if (el === event.code) {
                let searchKey = document.querySelector(`[data-name=${String(el)}]`);
                searchKey.classList.add("active");
                let textArea = document.getElementById("text__output");
                searchKey.classList.forEach(e => {
                    if (e === "word__write") {
                        inside = `${searchKey.innerText}`;
                    } else if (e === "space") {
                        inside = ` `;
                    } else if (e === "tab") {
                        inside = `    `;
                        tabStep = 3;
                    } else if (e === "shiftleft" || e === "shiftright" ) {
                        inside = ``;
                        tabStep = -1;
                        positionShiftClick()
                    } else if (e === "enter") {
                        inside = `\r\n`
                    } else if (e === "delete") {
                        start = textArea.selectionEnd;
                        end = textArea.selectionEnd + 1;
                        inside = ``;
                        tabStep = -1;
                    } else if (e === "backspace") {
                        start = textArea.selectionEnd - 1;
                        end = textArea.selectionEnd;
                        tabStep = -1;
                        inside = ``;
                    } else if (e === "arrowleft" || e === "arrowright" || e === "arrowdown" || e === "arrowup") {
                        inside = `${searchKey.innerText}`;
                    } else if (e === "controlleft" || e === "controlright" || e === "altleft" || e === "altright" || e === "metaleft" || e === "capslock") {
                        inside = ``;
                        tabStep = -1;
                    }
                })
            }
        })
    }
    textArea.setRangeText(`${inside}`, start, end);
    textArea.selectionStart = textArea.selectionEnd + 1 + tabStep;
    textArea.selectionEnd = textArea.selectionStart;
    tabStep = 0;
})

// Add class ACTIVE to key
document.addEventListener("keyup", function (event) {
    for (let key in nameKeys) {
        nameKeys[`${key}`].forEach(el => {
            let searchKey = document.querySelector(`[data-name=${String(el)}]`);
            if (event.code === "CapsLock" && event.code === el) {
                let checkFlag = document.getElementById("check__register");
                if (!checkFlag.checked) {
                    checkFlag.checked = true;
                    searchKey.classList.add("active");
                    language === "eng" ?
                        upperCaseAfterCapsLock(engKeyBoard) :
                        upperCaseAfterCapsLock(rusKeyBoard);
                } else {
                    checkFlag.checked = false;
                    searchKey.classList.remove("active");
                    language === "eng" ?
                        addInKeys(engKeyBoard) :
                        addInKeys(rusKeyBoard);
                }
            } else
            if (event.code === el) {
                searchKey.classList.remove("active")
            }
        })
    }
    // keys.forEach(el => {
    //     el.addEventListener("click", ()=>{
    //         textArea.focus();
    //     })
    // })
})

// Add functional SHIFT-key
document.addEventListener("keydown", function (event) {
    lock = 1;
    positionShift(event)
})
document.addEventListener("keyup", function (event) {
    lock = 0;
    positionShift(event)
})

// Start KEYBOARD
startKeyboard(nameKeys);
language === "eng" ?
    addInKeys(engKeyBoard) :
    addInKeys(rusKeyBoard);

let keys = document.querySelectorAll(".key");


//MOUSE:  Add functional MOUSE__CLICK
keys.forEach(e => {
    e.addEventListener("mousedown", function () {
        let textArea = document.getElementById("text__output");
        let inside = '';
        let start = textArea.selectionEnd;
        let end = textArea.selectionEnd;
        lock = 1;
        let tabStep = 0;
        for (let key in nameKeys) {
            nameKeys[`${key}`].forEach(el => {
                if (el === e.dataset.name) {
                    let searchKey = document.querySelector(`[data-name=${String(el)}]`);
                    searchKey.classList.add("active");
                    searchKey.classList.forEach(e => {
                        if (e === "word__write") {
                            inside = `${searchKey.innerText}`;
                        } else if (e === "space") {
                            inside = ` `;
                        } else if (e === "tab") {
                            inside = `    `;
                            tabStep = 3;
                        } else if (e === "shiftleft" || e === "shiftright" ) {
                            inside = ``;
                            tabStep = -1;
                            positionShiftClick()
                        } else if (e === "enter") {
                            inside = `\r\n`
                        } else if (e === "delete") {
                            start = textArea.selectionEnd;
                            end = textArea.selectionEnd + 1;
                            inside = ``;
                            tabStep = -1;
                        } else if (e === "backspace") {
                            start = textArea.selectionEnd - 1;
                            end = textArea.selectionEnd;
                            tabStep = -1;
                            inside = ``;
                        } else if (e === "arrowleft" || e === "arrowright" || e === "arrowdown" || e === "arrowup") {
                            inside = `${searchKey.innerText}`;
                        } else if (e === "controlleft" || e === "controlright" || e === "altleft" || e === "altright" || e === "metaleft" || e === "capslock") {
                            inside = ``;
                            tabStep = -1;
                        }
                    })
                }
            })
        }
        textArea.setRangeText(`${inside}`, start, end);
        textArea.selectionStart = textArea.selectionEnd + 1 + tabStep;
        textArea.selectionEnd = textArea.selectionStart;
        tabStep = 0;
    })
})

// MOUSE: Remove class ACTIVE  on all keys
keys.forEach(e => {
    document.addEventListener("mouseup", () => {
        e.classList.forEach(function (el) {

            if (el === "active" && el !== "capslock") {
                e.classList.remove("active")
                e.classList.forEach(m => {
                    if (m === "capslock") {
                        e.classList.add("active")
                    }
                })
                e.classList.forEach(l => {
                    if (l === "shiftleft" || l === "shiftright") {
                        lock = 0;
                        positionShiftClick();
                    }
                })
            }
        })
    })
})

// MOUSE: position SHIFT click 
keys.forEach(e => {
    e.addEventListener("mouseup", function () {
        lock = 0;
        for (let key in nameKeys) {
            nameKeys[`${key}`].forEach(el => {
                if (el === e.dataset.name) {
                    let searchKey = document.querySelector(`[data-name=${String(el)}]`);
                    searchKey.classList.add("active");
                    searchKey.classList.forEach(e => {
                        if (e === "shiftleft" || e === "shiftright") {
                            positionShiftClick()
                        }
                    })
                }
            })
        }
    })
})

// MOUSE:  CAPS__LOCK click 
keys.forEach(e => {
    e.addEventListener("click", function () {
        for (let key in nameKeys) {
            nameKeys[`${key}`].forEach(el => {
                let searchKey = document.querySelector(`[data-name=${String(el)}]`);
                if (e.dataset.name === "CapsLock" && e.dataset.name === el) {
                    let checkFlag = document.getElementById("check__register");
                    if (!checkFlag.checked) {
                        checkFlag.checked = true;
                        searchKey.classList.add("active");
                        language === "eng" ?
                            upperCaseAfterCapsLock(engKeyBoard) :
                            upperCaseAfterCapsLock(rusKeyBoard);
                    } else {
                        checkFlag.checked = false;
                        searchKey.classList.remove("active");
                        language === "eng" ?
                            addInKeys(engKeyBoard) :
                            addInKeys(rusKeyBoard);
                    }
                } else
                if (el === e.dataset.name) {
                    searchKey.classList.remove("active")
                }
            })
        }
    })
})

// Add focus for TEXTAREA
document.addEventListener("keyup", function () {
    textArea.focus();
});
keys.forEach(el => {
    el.addEventListener("click", () => {
        textArea.focus();
    })
})

// npx eslint ./ --ext .js,.jsx