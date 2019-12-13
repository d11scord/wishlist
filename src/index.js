import React from 'react';
import ReactDOM from 'react-dom';
import connect from "@vkontakte/vk-connect";
import api from './api.js';
import App from "./App";
import './index.css';

const WISHLIST_ID = 6868134;
const APP_ID = 7177327;
window.app_id = APP_ID;

// const AUTH_PARAMS = '?vk_access_token_settings=&vk_app_id=6868134&vk_are_notifications_enabled=0&vk_is_app_user=0&vk_is_favorite=0&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_user_id=199026622&sign=C_R2Gsf-lpF-yjdZ4F1L7xgpWWB0QcKRjUfmc7n-Yis';
const AUTH_PARAMS = '?vk_access_token_settings=&vk_app_id=6868134&vk_are_notifications_enabled=0&vk_is_app_user=0&vk_is_favorite=0&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_user_id=222581166&sign=mMPXcVzOrvKEyhf_xTaoNyHllfBn_tjzR0WqOm-0vbw';
//7159872   7177327
connect.send("VKWebAppInit", {});

fetch('api/user/auth' + AUTH_PARAMS, {method: 'POST'})
    .then(result => result.json())
    .then(result => {
        console.log(result);
        window.token = result.data.token;
        window.user_id = result.data.user_id;
        return connect.sendPromise("VKWebAppGetAuthToken", {"app_id": window.app_id, "scope": "friends"});
    }).then(data => {
        window.access_token = data.access_token;
        return connect.sendPromise("VKWebAppGetGeodata")
    }).then(data => {
        window.geo_data = {"lat": 55.7777649, "long": 37.6993929};
        console.log(data);
        return connect.sendPromise('VKWebAppGetUserInfo')
    }).then(data_user => {
        const ME = {
            id: data_user.id,
            img: data_user.photo_200,
            name: `${data_user.first_name} ${data_user.last_name}`
        };

    ReactDOM.render(
        <App
            me={ME}
            //friends={FRIENDS}
        />,
        document.getElementById('root')
    );
}).catch(err => {
    debugger;
});
