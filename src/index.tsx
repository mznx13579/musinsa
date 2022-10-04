import ReactDOM from 'react-dom/client';
import './assets/styles/tailwindcss/index.css';
import './assets/styles/base/reset.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
reportWebVitals();
