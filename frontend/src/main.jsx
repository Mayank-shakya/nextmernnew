import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { UserDetailProvider } from './context/UserDetailContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
<BrowserRouter>
       <UserDetailProvider>
        <App />
      </UserDetailProvider>

</BrowserRouter>
   
    
  </React.StrictMode>,
);
