import { useState } from 'react';
import { Link } from 'react-router-dom';

type TLogInState = boolean;

const Header = () => {
    const [logIn, setLogIn] = useState<TLogInState>(true);
    
    return (
        <div className="bg-blackMain border-b border-solid border-white">
            <div className="container-app">
                <div className="py-6 flex justify-start items-end text-white">
                    <a href="/">
                        <h2 className="text-3xl">V8 Portfolio Crypto</h2>
                    </a>
                    <div>
                        <Link to="/all" className='ml-9 color  hover:text-sky-600 transition-all text-lg text-slate-200'>Все монеты</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
