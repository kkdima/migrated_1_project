
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import Header from './components/Header/Header';
import FirstSection from './components/Body/FirstSection';
import SecondSection from './components/Body/SecondSection';
import reset from './constants/css/reset';

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <Header />
                <FirstSection />
                <SecondSection />
            </Provider>
            <GlobalStyle />
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);

module.hot.accept();