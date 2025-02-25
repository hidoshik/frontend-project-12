import ReactDOM from 'react-dom/client';
import init from './init';

const runApp = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  const app = await init();

  root.render(app);
};

runApp();
