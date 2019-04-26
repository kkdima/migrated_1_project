import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import Product from "./components/other_pages/Product";
// import Contact from "./components/Contact/Contact";
// import Team from "./components/Team/Team";
// import Blog from "./components/Blog/Blog";

const App = () => 
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/product" component={Product} exact />
                {/* <Route path="/team" component={Team} exact /> */}
                {/* <Route path="/blog" component={Blog} exact /> */}
                {/* <Route path="/contact" component={Contact} exact /> */}
                {/* <Route component={Error} /> */}
            </Switch>
            <Footer />
        </div>
    </Router>;

ReactDOM.render(<App/>, document.getElementById('root')
);

module.hot.accept();