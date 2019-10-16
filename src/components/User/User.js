import React from 'react';
import './User.css';
import DefaultBtn from "../Wishlist/WishItem/ActionsBar/DefaultBtn";

class User extends React.Component {
    render() {
        return(
            <div className="col-4" style={{padding: 15 + "pt", display: "inline-flex"}}>
                <img
                    className="photo"
                    src={process.env.PUBLIC_URL + this.props.me.img}
                    alt={this.props.me.name}/>
                <div className="searchProfile">
                    <span className="name">{this.props.me.name}</span>
                    <DefaultBtn/>
                </div>
            </div>
        )
    }
}

export default User;