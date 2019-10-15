import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/Main';
import Friends from './pages/Friends';
import * as serviceWorker from './serviceWorker';

const PRODUCTS = [
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
]

const FRIENDS = [
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
]

// ReactDOM.render(<Main products={PRODUCTS} />, document.getElementById('root'));
ReactDOM.render(<Friends friends={FRIENDS} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();