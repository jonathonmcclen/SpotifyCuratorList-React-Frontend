import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux";

// css and styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// Routes
import Home from "./view/Home";
import PlaylistPage from "./view/PlaylistPage";
import Contact from "./view/Contact";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <div id="body">
            <Route exact path="/" component={Home} />
            <Route path="/playlists" component={PlaylistPage} />
            <Route path="/contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
