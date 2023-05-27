//В HTML есть разметка формы. Напиши скрипт который будет
//сохранять значения полей в локальное хранилище когда
// пользователь что - то печатает.

//Отслеживай на форме событие input, и каждый раз записывай в локальное
//хранилище объект с полями email и message, в которых сохраняй текущие
//значения полей формы.Пусть ключом для хранилища будет строка
//"feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть
//сохраненные данные, заполняй ими поля формы.В противном случае поля
//должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект
// с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

// console.log(form);
// console.log(email);
// console.log(message);

// email.addEventListener('input', throttle(inputData, 500));
// message.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', submitData);
form.addEventListener('input', throttle(inputData, 500));

onReload();

function inputData() {
    const objData = {
        email: email.value,
        message: message.value,
    }
    //console.log(objData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
}

function submitData(event) {
    event.preventDefault();
    const objDataConsole= JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(objDataConsole);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onReload() {
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveData) {
        email.value = email;
        message.value = message;
    }
}

