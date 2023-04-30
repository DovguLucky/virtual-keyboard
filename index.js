// капслок при шифте ТОЛЬКО ПРИ МЫШКЕ
// При нажатии других клаиш функцианаль  сещается курсор
// правый альт
// the Shift, Alt, Ctrl, Caps lock and Space keys should work as on a real keyboard

// Eslint
// shift
// ES6
// git

const nameKeys = {
  firstLine: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  secondLine: ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  thirdLine: ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  fourthLine: ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  fiveLine: ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
};

const engKeyBoard = {
  firstLine: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  secondLine: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  thirdLine: ['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  fourthLine: ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'],
  fiveLine: ['ctrl', 'Win', 'alt', 'Space', 'alt', '&#9668;', '&#9660;', '&#9658;', 'ctrl'],
};
const engKeyBoardShift = {
  firstLine: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  secondLine: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
  thirdLine: ['caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  fourthLine: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift'],
  fiveLine: ['ctrl', 'Win', 'alt', 'Space', 'alt', '&#9668;', '&#9660;', '&#9658;', 'ctrl'],
};

const rusKeyBoard = {
  firstLine: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  secondLine: ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  thirdLine: ['caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  fourthLine: ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift'],
  fiveLine: ['ctrl', 'Win', 'alt', 'Space', 'alt', '&#9668;', '&#9660;', '&#9658;', 'ctrl'],
};
const rusKeyBoardShift = {
  firstLine: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  secondLine: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
  thirdLine: ['caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  fourthLine: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650;', 'Shift'],
  fiveLine: ['ctrl', 'Win', 'alt', 'Space', 'alt', '&#9668;', '&#9660;', '&#9658;', 'ctrl'],
};

let lock = 0;
let language = 'eng';
let count = 0;
if (localStorage.getItem('lang')) {
  const lang = localStorage.getItem('lang');
  language = lang;
}
// localStorage.clear()

const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.prepend(wrapper);

const textBoard = document.createElement('div');
textBoard.classList.add('textboard');
textBoard.innerHTML = '<p>Тут будет приветствие!!</p>';
const textArea = document.createElement('textarea');
textArea.rows = '5';
textArea.cols = '60';
textArea.autofocus = true;
textArea.id = 'text__output';
textArea.classList.add('text__area');

textBoard.append(textArea);
const checkRegister = document.createElement('input');
checkRegister.type = 'checkbox';
checkRegister.classList.add('check__box');
checkRegister.id = 'check__register';
textBoard.append(checkRegister);

wrapper.prepend(textBoard);

const keyBoard = document.createElement('div');
keyBoard.classList.add('keyboard');
wrapper.append(keyBoard);

const note = document.createElement('div');
note.classList.add('note');
note.innerHTML = '<p>Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация:  ctrl + alt </p>';
wrapper.append(note);

// Add new keys in line
function getAddKeys(nameKey, thisLine) {
  const key = document.createElement('div');
  key.classList.add('key');
  if (nameKey.length > 1) {
    key.classList.add('word__key');
    if (nameKey === 'caps lock') {
      key.classList.add('caps__lock');
    } else {
      key.classList.add(`${String(nameKey).toLowerCase()}`);
    }
  }
  key.dataset.name = (`${String(nameKey)}`);
  thisLine.append(key);
}

// Add new line in keyboard
function getAddLine(nameLine, langKeyBoard) {
  const line = document.createElement('div');
  line.classList.add('line');
  line.classList.add(`${nameLine}`);
  langKeyBoard[`${nameLine}`].forEach((el) => {
    getAddKeys(el, line);
  });
  keyBoard.append(line);
}
// Add new keyboard
function startKeyboard(langKeyBoard) {
  Object.keys(langKeyBoard).forEach((el) => {
    getAddLine(el, langKeyBoard);
  });
}

// Add new text in every Key
function addInKeys(langKeyBoard) {
  Object.keys(langKeyBoard).forEach((key) => {
    let countKey = 0;
    const arrKeys = document.querySelector(`.${key}`).querySelectorAll('.key');
    arrKeys.forEach((el) => {
      const inside = `${langKeyBoard[`${key}`][countKey]}`;
      const elm = el;
      elm.innerHTML = inside;
      countKey += 1;
      if (inside.length === 1) {
        el.classList.add('word__write');
      }
    });
    countKey = 0;
  });
}

// Position key CAPS__LOCK

function upperCaseAfterCapsLock(langKeyBoard) {
  Object.keys(langKeyBoard).forEach((key) => {
    let countCaps = 0;
    const arrKeys = document.querySelector(`.${key}`).querySelectorAll('.key');
    arrKeys.forEach((el) => {
      const inside = `${langKeyBoard[`${key}`][countCaps]}`;
      if (inside.split('').length === 1) {
        const elm = el;
        elm.innerText = inside.toUpperCase();
      }
      countCaps += 1;
    });
  });
}

function lowerCaseAfterCapsLock(langKeyBoard) {
  Object.keys(langKeyBoard).forEach((key) => {
    let countLow = 0;
    const arrKeys = document.querySelector(`.${key}`).querySelectorAll('.key');
    arrKeys.forEach((el) => {
      const inside = `${langKeyBoard[`${key}`][countLow]}`;
      if (inside.split('').length === 1) {
        const elm = el;
        elm.innerText = inside.toLowerCase();
      }
      countLow += 1;
    });
  });
}

// Reaplace language
function getOtherLanguage(event) {
  if (count === 0) {
    if (event.altKey && event.ctrlKey) {
      count = 1;
      const checkFlag = document.getElementById('check__register');
      if (language === 'eng') {
        language = 'rus';
        if (!checkFlag.checked) {
          addInKeys(rusKeyBoard);
        } else {
          upperCaseAfterCapsLock(rusKeyBoard);
        }
      } else {
        language = 'eng';
        if (!checkFlag.checked) {
          addInKeys(engKeyBoard);
        } else {
          upperCaseAfterCapsLock(engKeyBoard);
        }
      }
      localStorage.clear();
      localStorage.setItem('lang', language);
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
  const checkbox = document.getElementById('check__register');
  if (event.key === 'Shift' && !checkbox.checked) {
    if (lock === 1) {
      if (language === 'eng') {
        addInKeys(engKeyBoardShift);
      } else {
        addInKeys(rusKeyBoardShift);
      }
    } else if (lock === 0) {
      if (language === 'eng') {
        addInKeys(engKeyBoard);
      } else {
        addInKeys(rusKeyBoard);
      }
    }
  } else if (event.key === 'Shift' && checkbox.checked) {
    if (lock === 1) {
      if (language === 'eng') {
        addInKeys(engKeyBoardShift);
        lowerCaseAfterCapsLock(engKeyBoardShift);
      } else {
        addInKeys(rusKeyBoardShift);
        lowerCaseAfterCapsLock(rusKeyBoardShift);
      }
    } else if (lock === 0) {
      if (language === 'eng') {
        upperCaseAfterCapsLock(engKeyBoard);
      } else {
        upperCaseAfterCapsLock(rusKeyBoard);
      }
    }
  }
}

// MOUSE: Position key SHIFT
function positionShiftClick() {
  const checkbox = document.getElementById('check__register');
  if (!checkbox.checked) {
    if (lock === 1) {
      if (language === 'eng') {
        addInKeys(engKeyBoardShift);
      } else {
        addInKeys(rusKeyBoardShift);
      }
    } else if (lock === 0) {
      if (language === 'eng') {
        addInKeys(engKeyBoard);
      } else {
        addInKeys(rusKeyBoard);
      }
    }
  } else if (checkbox.checked) {
    if (lock === 1) {
      if (language === 'eng') {
        addInKeys(engKeyBoardShift);
        lowerCaseAfterCapsLock(engKeyBoardShift);
      } else {
        addInKeys(rusKeyBoardShift);
        lowerCaseAfterCapsLock(rusKeyBoardShift);
      }
    } else if (lock === 0) {
      if (language === 'eng') {
        upperCaseAfterCapsLock(engKeyBoard);
      } else {
        upperCaseAfterCapsLock(rusKeyBoard);
      }
    }
  }
}

// Remove click REAL keyboard
document.addEventListener('keydown', (event) => {
  event.preventDefault();
});

// Replace language and security reapeet
document.addEventListener('keydown', getOtherLanguage);
document.addEventListener('keyup', getSecurOtherLanguage);

// Press on KEYBOARD
document.addEventListener('keydown', (event) => {
  let inside = '';
  let start = textArea.selectionEnd;
  let end = textArea.selectionEnd;
  lock = 1;
  let tabStep = 0;
  Object.keys(nameKeys).forEach((key) => {
    nameKeys[`${key}`].forEach((el) => {
      if (el === event.code) {
        const searchKey = document.querySelector(`[data-name=${String(el)}]`);
        searchKey.classList.add('active');
        searchKey.classList.forEach((e) => {
          if (e === 'word__write') {
            inside = `${searchKey.innerText}`;
          } else if (e === 'space') {
            inside = ' ';
          } else if (e === 'tab') {
            inside = '    ';
            tabStep = 3;
          } else if (e === 'shiftleft' || e === 'shiftright') {
            inside = '';
            tabStep = -1;
            positionShiftClick();
          } else if (e === 'enter') {
            inside = '\r\n';
          } else if (e === 'delete') {
            start = textArea.selectionEnd;
            end = textArea.selectionEnd + 1;
            inside = '';
            tabStep = -1;
          } else if (e === 'backspace') {
            start = textArea.selectionEnd - 1;
            end = textArea.selectionEnd;
            tabStep = -1;
            inside = '';
          } else if (e === 'arrowleft' || e === 'arrowright' || e === 'arrowdown' || e === 'arrowup') {
            inside = `${searchKey.innerText}`;
          } else if (e === 'controlleft' || e === 'controlright' || e === 'altleft' || e === 'altright' || e === 'metaleft' || e === 'capslock') {
            inside = '';
            tabStep = -1;
          }
        });
      }
    });
  });
  textArea.setRangeText(`${inside}`, start, end);
  textArea.selectionStart = textArea.selectionEnd + 1 + tabStep;
  textArea.selectionEnd = textArea.selectionStart;
  tabStep = 0;
});

// Add class ACTIVE to key
document.addEventListener('keyup', (event) => {
  Object.keys(nameKeys).forEach((key) => {
    nameKeys[`${key}`].forEach((el) => {
      const searchKey = document.querySelector(`[data-name=${String(el)}]`);
      if (event.code === 'CapsLock' && event.code === el) {
        const checkFlag = document.getElementById('check__register');
        if (!checkFlag.checked) {
          checkFlag.checked = true;
          searchKey.classList.add('active');
          if (language === 'eng') {
            upperCaseAfterCapsLock(engKeyBoard);
          } else {
            upperCaseAfterCapsLock(rusKeyBoard);
          }
        } else {
          checkFlag.checked = false;
          searchKey.classList.remove('active');
          if (language === 'eng') {
            addInKeys(engKeyBoard);
          } else {
            addInKeys(rusKeyBoard);
          }
        }
      } else
      if (event.code === el) {
        searchKey.classList.remove('active');
      }
    });
  });
});

// Add functional SHIFT-key
document.addEventListener('keydown', (event) => {
  lock = 1;
  positionShift(event);
});
document.addEventListener('keyup', (event) => {
  lock = 0;
  positionShift(event);
});

// Start KEYBOARD
startKeyboard(nameKeys);
if (language === 'eng') {
  addInKeys(engKeyBoard);
} else {
  addInKeys(rusKeyBoard);
}

const keys = document.querySelectorAll('.key');

// MOUSE:  Add functional MOUSE__CLICK
keys.forEach((e) => {
  e.addEventListener('mousedown', () => {
    let inside = '';
    let start = textArea.selectionEnd;
    let end = textArea.selectionEnd;
    lock = 1;
    let tabStep = 0;
    Object.keys(nameKeys).forEach((key) => {
      nameKeys[`${key}`].forEach((el) => {
        if (el === e.dataset.name) {
          const searchKey = document.querySelector(`[data-name=${String(el)}]`);
          searchKey.classList.add('active');
          searchKey.classList.forEach((skey) => {
            if (skey === 'word__write') {
              inside = `${searchKey.innerText}`;
            } else if (skey === 'space') {
              inside = ' ';
            } else if (skey === 'tab') {
              inside = '    ';
              tabStep = 3;
            } else if (skey === 'shiftleft' || skey === 'shiftright') {
              inside = '';
              tabStep = -1;
              positionShiftClick();
            } else if (skey === 'enter') {
              inside = '\r\n';
            } else if (skey === 'delete') {
              start = textArea.selectionEnd;
              end = textArea.selectionEnd + 1;
              inside = '';
              tabStep = -1;
            } else if (skey === 'backspace') {
              start = textArea.selectionEnd - 1;
              end = textArea.selectionEnd;
              tabStep = -1;
              inside = '';
            } else if (skey === 'arrowleft' || skey === 'arrowright' || skey === 'arrowdown' || skey === 'arrowup') {
              inside = `${searchKey.innerText}`;
            } else if (skey === 'controlleft' || skey === 'controlright' || skey === 'altleft' || skey === 'altright' || skey === 'metaleft' || skey === 'capslock') {
              inside = '';
              tabStep = -1;
            }
          });
        }
      });
    });
    textArea.setRangeText(`${inside}`, start, end);
    textArea.selectionStart = textArea.selectionEnd + 1 + tabStep;
    textArea.selectionEnd = textArea.selectionStart;
    tabStep = 0;
  });
});

// MOUSE: Remove class ACTIVE  on all keys
keys.forEach((e) => {
  document.addEventListener('mouseup', () => {
    e.classList.forEach((el) => {
      if (el === 'active' && el !== 'capslock') {
        e.classList.remove('active');
        e.classList.forEach((m) => {
          if (m === 'capslock') {
            e.classList.add('active');
          }
        });
        e.classList.forEach((l) => {
          if (l === 'shiftleft' || l === 'shiftright') {
            lock = 0;
            positionShiftClick();
          }
        });
      }
    });
  });
});

// MOUSE: position SHIFT click
keys.forEach((e) => {
  e.addEventListener('mouseup', () => {
    lock = 0;
    Object.keys(nameKeys).forEach((key) => {
      nameKeys[`${key}`].forEach((el) => {
        if (el === e.dataset.name) {
          const searchKey = document.querySelector(`[data-name=${String(el)}]`);
          searchKey.classList.add('active');
          searchKey.classList.forEach((skey) => {
            if (skey === 'shiftleft' || skey === 'shiftright') {
              positionShiftClick();
            }
          });
        }
      });
    });
  });
});

// MOUSE:  CAPS__LOCK click
keys.forEach((e) => {
  e.addEventListener('click', () => {
    Object.keys(nameKeys).forEach((key) => {
      nameKeys[`${key}`].forEach((el) => {
        const searchKey = document.querySelector(`[data-name=${String(el)}]`);
        if (e.dataset.name === 'CapsLock' && e.dataset.name === el) {
          const checkFlag = document.getElementById('check__register');
          if (!checkFlag.checked) {
            checkFlag.checked = true;
            searchKey.classList.add('active');
            if (language === 'eng') {
              upperCaseAfterCapsLock(engKeyBoard);
            } else {
              upperCaseAfterCapsLock(rusKeyBoard);
            }
          } else {
            checkFlag.checked = false;
            searchKey.classList.remove('active');
            if (language === 'eng') {
              addInKeys(engKeyBoard);
            } else {
              addInKeys(rusKeyBoard);
            }
          }
        } else
        if (el === e.dataset.name) {
          searchKey.classList.remove('active');
        }
      });
    });
  });
});

// Add focus for TEXTAREA
document.addEventListener('keyup', () => {
  textArea.focus();
});
keys.forEach((el) => {
  el.addEventListener('click', () => {
    textArea.focus();
  });
});

// npx eslint ./ --ext .js,.jsx --fix
