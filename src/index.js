import { StrictMode } from 'react';
import { render } from 'react-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './index.css';

render(
  <StrictMode>
    {/* <Provider store={store.store}> */}
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
