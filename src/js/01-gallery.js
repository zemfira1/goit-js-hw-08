//Добавь библиотеку SimpleLightbox как зависимость проекта 
// используя npm(ссылка на CDN из твоей прошлой работы больше не нужна).
//Используй свой JavaScript код из предыдущей домашней работы,
// но выполни рефакторинг с учетом того, что библиотека была установлена 
//через npm(синтаксис import /export).
//Для того чтобы подключить CSS код библиотеки в проект, 
//необходимо добавить еще один импорт, кроме того который описан в документации.

import { galleryItems } from './gallery-items';
console.log(galleryItems);

 import SimpleLightbox from "simplelightbox";
// // Дополнительный импорт стилей
 import "simplelightbox/dist/simple-lightbox.min.css";

const list = document.querySelector('ul.gallery');

function makeGallery(items) {
    let listElements = items.map(item => {
        let itemEl = document.createElement('li');
        itemEl.classList.add('gallery__item');

        let itemLink = document.createElement('a');
        itemLink.classList.add('gallery__link');
        itemLink.href = item.original;
        itemLink.rel = "noopener noreferrer";
        itemEl.append(itemLink);

        let imgEl = document.createElement('img');
        imgEl.classList.add('gallery__image');
        imgEl.src = item.preview;
        imgEl.alt = item.description;
        imgEl.dataset.source = item.original;
        itemLink.append(imgEl);

        return itemEl;
    });
    console.log(listElements);
    list.append(...listElements);
    
};
makeGallery(galleryItems);
//console.log(list);

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250}); 