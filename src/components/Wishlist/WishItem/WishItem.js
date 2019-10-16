import React from 'react';
import ActionsBar from "./ActionsBar/ActionsBar";
import './WishItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class WishItem extends React.Component{
    render() {
        return(
            <div className="wishItem col-md-3 col-12 ">
                <img
                    src={process.env.PUBLIC_URL + this.props.product.img}
                    className="productImg"
                    alt={this.props.product.name}
                />
                <span className="title">{this.props.product.title}</span>
                <span className="price">{this.props.product.price}</span>
                <span className="description">{this.props.product.description}</span>
                <ActionsBar className="actionBar"/>
            </div>
        )
    }
}

export default WishItem;
