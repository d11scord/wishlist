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

    render(){
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Main</Link>
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
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/friendslist">
                            <Friends user={this.props.me} friends={this.props.friends} />
                        </Route>
                        <Route path="/friend/:id">
                            <FriendPage user={this.props.me} friend={this.props.friends} />
                        </Route>
                        <Route path="/mypage">
                            <MyPage user={this.props.me} />
                        </Route>

                        <Route path="/">
                            <Main user={this.props.me} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}



export default App;
