import "./styles.css";
import React, { Component } from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Footer from './Footer';
import ErrorBoundary from "../containers/ErrorBoundary";

class App extends Component {
    render() {
        return ( 
            <>
                <Header/>
                <ErrorBoundary>
                    <Main/>
                </ErrorBoundary>
                <Footer/>
            </>
        )
    }
}

export default App;