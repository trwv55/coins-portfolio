import './scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import List from './pages/List';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all" element={<List />} ></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
