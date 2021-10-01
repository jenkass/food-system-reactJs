import tabs from './modules/tabs';
import cards from './modules/cards';
import form from './modules/form';
import modal from './modules/modal';
import slider from './modules/slider';
import calc from './modules/calc';
import timer from './modules/timer';
import {openModalWindow} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModalWindow('.modal', modalTimerId), 50000);

    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    cards();
    form('form',modalTimerId);
    modal('[data-modal]','.modal', modalTimerId);
    slider({
        container:'.offer__slider',
        nextArrow:'.offer__slider-next', 
        prevArraw:'.offer__slider-prev',
        slide:'.offer__slide',
        totalCounter: 'total',
        currentCounter: 'current',
        wrapper:'.offer__slider-wrapper',
        field:'.offer__slider-inner'
    });
    calc();
    timer('.timer', '2021-04-01');
});