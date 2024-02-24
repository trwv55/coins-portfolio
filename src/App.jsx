import './scss/style.scss';
import {} from 'react';
// import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content"></div>
        </div>
    );
}

export default App;
