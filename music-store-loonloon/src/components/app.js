import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Header from "./header";
import Footer from "./footer";
import GenreList from "./genre-list";
import Home from "./home";
import Store from "./store";
import Cart from "./cart/cart";
import CheckOut from "./cart/check-out";
import CheckOutComplete from "./cart/check-out-complete";
import LogIn from "./account/log-in";
import LogInSuccess from "./account/log-in-success";
import AlbumList from "./album/album-list";
import AlbumDetail from "./album/album-detail";
import RegisterAccount from "./account/register-account";

const App = () => {
  return (
    <Router history={history}>
      <>
        <Header />
        <GenreList />
        <div id="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/store" component={Store} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkOut" component={CheckOut} />
            <Route path="/checkOutComplete/:id" component={CheckOutComplete} />
            <Route path="/account/login" component={LogIn} />
            <Route path="/account/loginSuccess" component={LogInSuccess} />
            <Route
              path="/albums/:id"
              render={props => {
                return (
                  <AlbumList
                    key={props.match.params.id}
                    genreId={props.match.params.id}
                    {...props}
                  />
                );
              }}
            />
            <Route path="/account/register" component={RegisterAccount} />
            <Route path="/album/:id" component={AlbumDetail} />
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  );
};

export default App;
