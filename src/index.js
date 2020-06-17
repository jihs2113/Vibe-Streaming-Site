import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import { ThemeProvider } from 'styled-components';
import Common from './Style/Common';
import Player from './Pages/Player/Player';
import SideNav from './Components/SideNav/SideNav';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer, composeWithDevTools());


ReactDOM.render(
    <Provider store={store}>
    <ThemeProvider theme={Common} >
        <Routes />
    </ThemeProvider>
    </Provider>
   , 
    document.getElementById('root')
);