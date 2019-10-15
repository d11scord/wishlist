import React from 'react';
import ActionsBar from "./ActionsBar/ActionsBar";
import './WishItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class WishItem extends React.Component{
    render() {
        return(
            <div className="wishItem col-md-3 col-3">
                <img
                    src="https://static.re-store.ru/upload/iblock/a86/a865178893dca89662f589c8d3cf9cf0.jpg"
                    alt="item photo"
                    className="photo"
                />
                <p className="title">iPhone XR 256GB</p>
                <p className="price">70 000 ₽</p>
                <p className="description">Мобильный телефон Apple iPhone XR 256GB (желтый)</p>
                <ActionsBar classNmae="actionBar"/>
            </div>
        )
    }
}

export default WishItem;