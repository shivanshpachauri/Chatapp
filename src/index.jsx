import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';
// import { AlertProvider } from 'react-alert';
// import {AlertTemplate,options} from './AlertTemplate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <AlertProvider template={AlertTemplate} {...options}>
<BrowserRouter>
    <App />
</BrowserRouter>
// </AlertProvider>
);
