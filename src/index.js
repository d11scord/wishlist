import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import './index.css';
import connect from "@vkontakte/vk-connect";

// connect.subscribe((e) => console.log(e));
connect.send("VKWebAppInit", {});
connect
    .sendPromise('VKWebAppGetUserInfo')
    .then(data => {

        // console.log(data);

        let ME = {img: data.photo_200, name: `${data.first_name} ${data.last_name}`};

        const PRODUCTS = [
            {id: 0, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 1, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 2, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 3, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 4, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 5, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 6, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
        ];

        const FRIENDS = [
            {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
            {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
            {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
            {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
            {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
        ];

        ReactDOM.render(<App me={ME} products={PRODUCTS} friends={FRIENDS}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();

    })
    .catch(error => {
        //Обработка событиев случае ошибки
    });

connect
    .sendPromise('VKWebAppGetFriends', {multi: true})
    .then(data => {
        console.log(data)
    })
    .catch(e =>{
        console.log(e)
    });
