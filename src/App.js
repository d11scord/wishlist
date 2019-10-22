import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from "./pages/Main";
import Friends from "./pages/Friends";
import FriendPage from "./pages/FriendPage";
import MyPage from './pages/MyPage';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link exact to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/friends-list">Search friends</Link>
                        </li>
                        <li>
                            <Link to="/friend">Fiend page</Link>
                        </li>
                        <li>
                            <Link to="/mypage">My page</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/friends-list">
                        <Friends user={FRIENDS} />
                    </Route>
                    <Route path="/friend">
                        <FriendPage user={FRIENDS[0]} products={PRODUCTS} />
                    </Route>
                    <Route path="/mypage">
                        <MyPage user={ME} products={PRODUCTS} />
                    </Route>
                    <Route path="/">
                        <Main products={PRODUCTS} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

const ME = {img: '/img/avatar.png', name: 'Антон Чащин'};

const PRODUCTS = [
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
];

const FRIENDS = [
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
];
