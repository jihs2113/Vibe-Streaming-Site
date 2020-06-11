import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import { ThemeProvider } from 'styled-components';
import Common from './Style/Common';

ReactDOM.render(
    <ThemeProvider theme={Common} >
        <Routes />
    </ThemeProvider>
   , 
    document.getElementById('root')
);