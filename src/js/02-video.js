//В HTML есть <iframe> с видео для Vimeo плеера. 
//Напиши скрипт который будет сохранять текущее время воспроизведения 
//видео в локальное хранилище и, при перезагрузке страницы, продолжать 
//воспроизводить видео с этого времени.

// Ознакомься с документацией библиотеки Vimeo плеера.
// Добавь библиотеку как зависимость проекта через npm.
// Инициализируй плеер в файле скрипта как это описано в 
// секции pre - existing player, но учти что у тебя плеер добавлен 
// как npm пакет, а не через CDN.
// Разбери документацию метода on() и начни отслеживать событие
// timeupdate - обновление времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище. 
// Пусть ключом для хранилища будет строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() 
// для того чтобы возобновить воспроизведение с сохраненной позиции.
// Добавь в проект библиотеку lodash.throttle и сделай так,
// чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = function (event) { 
    console.log(event);
    localStorage.setItem("videoplayer-current-time", event.seconds)
};
    
player.on('timeupdate', throttle(onTimeupdate, 1000));
//player.off('timeupdate', onTimeupdate);
player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);