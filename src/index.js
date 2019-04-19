
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header/Header';
import FirstSection from './components/Body/FirstSection';
import SecondSection from './components/Body/SecondSection';
import ThirdSection from './components/Body/ThirdSection';
// import Carousel from './components/Body/Carousel';
import CarouselNew from './components/Body/CarouselNew';
import Footer from './components/Footer/Footer';
import reset from './constants/css/reset';

const GlobalStyle = createGlobalStyle`${reset}`;

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : []
        };
    };
    
    // eslint-disable-next-line react/sort-comp
    loadUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    users: json
                });
            });
    }
    
    componentDidMount() {
        this.loadUsers();
    }

    render () {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <FirstSection />
                    <SecondSection />
                    <ThirdSection />
                    {/* <Carousel users={this.state.users}/> */}
                    <CarouselNew users={this.state.users}/>
                    <Footer />
                    <GlobalStyle />
                </Fragment>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Layout/>, document.getElementById('root')
);

module.hot.accept();