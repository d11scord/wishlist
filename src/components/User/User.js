import React from 'react';
import './User.css';
import DefaultBtn from "../Wishlist/WishItem/ActionsBar/DefaultBtn";

class User extends React.Component {
    render() {
        return(
            <div className="col-lg-4" style={{padding: 15 + "pt", display: "inline-flex"}}>
                <img
                    className="photo"
                    src={process.env.PUBLIC_URL + this.props.me.img}
                    alt={this.props.me.name}/>
                <div className="myProfile">
                    <span className="name">{this.props.me.name}</span>
                    <span style={{display: "inline"}}>Хочу получить &#128524;</span>
                    <span style={{display: "inline", color: "#329eff"}}>Хочу подарить &#128526;</span>
                    <br/><br/>
                    <DefaultBtn style={{fontSize: "12px"}}/>
                </div>
            </div>
        )
    }
}

export default User;