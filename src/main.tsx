import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
             <QueryClientProvider client={queryClient}>
                <App />
             </QueryClientProvider>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
);
