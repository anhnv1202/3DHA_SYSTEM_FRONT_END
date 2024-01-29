import store from '@app/store';
import '@core/configs/i18n.config';
import '@core/styles/global.scss';
import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import App from './app';
import '@popperjs/core';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <NextUIProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </NextUIProvider>
  </Provider>,
);
