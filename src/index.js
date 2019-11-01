import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import './index.css';
import connect from "@vkontakte/vk-connect";

connect.send("VKWebAppInit", {});
connect.sendPromise("VKWebAppGetAuthToken", {"app_id": 7177327, "scope": "friends"}).then(data => {
    connect.sendPromise("VKWebAppCallAPIMethod", {
        "method": "friends.get",
        "request_id": "0",
        "params": {
            "fields": ["nickname", "photo_200"],
            "v":"5.103",
            "access_token": data.access_token
        }
    }).then(data_friends => {
        let FRIENDS = [];

        for (let friend of data_friends.response.items) {
            FRIENDS.push(
                {id: friend.id,
                img: friend.photo_200,
                name: `${friend.first_name} ${friend.last_name}`}
            )
        };
        connect.sendPromise('VKWebAppGetUserInfo').then(data_user => {
                const ME = {
                    id: data_user.id,
                    img: data_user.photo_200,
                    name: `${data_user.first_name} ${data_user.last_name}`};

                const PRODUCTS = [
                    {id: 0, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
                    {id: 1, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
                    {id: 2, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
                    {id: 3, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
                    {id: 4, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
                    {id: 5, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
                    {id: 6, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
                ];

                ReactDOM.render(
                    <App
                        me={ME}
                        products={PRODUCTS}
                        friends={FRIENDS}
                        />, document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
                serviceWorker.unregister();

            })
    });
});
