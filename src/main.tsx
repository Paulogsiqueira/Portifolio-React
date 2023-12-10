import { Provider } from 'react-redux' 
import ReactDOM from 'react-dom/client'
import React from 'react'
import store from '@/redux/store.tsx'
import Modal from 'react-modal';
import App from './App.tsx'
import './styles/main.sass'

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
