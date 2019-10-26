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

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            myFavorites: [],
        };
    }

    filterFavs = () => {
        const myFavoriteItems = this.state.myFavorites.filter(wishItem => wishItem.isFavorite)
        this.setState({
            myFavorites: myFavoriteItems
        });
        console.log(myFavoriteItems)
    };

    componentDidMount() {
        const results = this.props.products.map(product => {
            product.isFavorite = false;
                return product;
            });
            this.setState({
                myFavorites: results
            });
    }

    handleMyFavorite = id => {
        const myFavoriteItems = this.state.myFavorites.map(wishItem => {
            if (wishItem.id === id) wishItem.isFavorite = !wishItem.isFavorite;
            console.log(wishItem.isFavorite);
            return wishItem;
        });
        this.setState({
            myFavorites: myFavoriteItems
        });
        console.log(myFavoriteItems)
    };

    render(){
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link exact to="/">Main</Link>
                            </li>
                            <li>
                                <Link to="/friendslist">Search friends</Link>
                            </li>
                            <li>
                                <Link to="/friend">Fiend page</Link>
                            </li>
                            <li>
                                <Link to="/mypage">My page</Link>
                            </li>
                            <span>========</span>
                            <li>
                                <Link to="/myfavorites">My favorites</Link>
                            </li>
                            <li>
                                <Link to="/mywants">Want</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/friendslist">
                            <Friends user={this.props.me} friends={this.props.friends} />
                        </Route>
                        <Route path="/friend">
                            <FriendPage user={this.props.friends[0]} products={this.props.products} />
                        </Route>
                        <Route path="/mypage">
                            <MyPage user={this.props.me} products={this.props.products} handleMyFavorite={this.handleMyFavorite} />
                        </Route>

                        <Route path="/myfavorites">
                            <MyPage user={this.props.me} products={this.state.myFavorites} handleMyFavorite={this.filterFavs}/>
                        </Route>
                        <Route path="/mywants">
                            <MyPage user={this.props.me} products={this.props.products} handleMyFavorite={this.handleMyFavorite}/>
                        </Route>

                        <Route path="/">
                            <Main user={this.props.me} products={this.props.products} handleMyFavorite={this.handleMyFavorite}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}



export default App;
