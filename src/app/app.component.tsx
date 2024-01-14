import Loading from '@core/components/loading';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import ModalContainer from './components/modal/modal-container';
import ToastContainer from './components/toast/toast.container';
import router from './router';
import { GlobalState } from './store';
import './styles/app.scss';
import './styles/common.scss';
function App() {
  const user = useSelector((state: GlobalState) => state.auth);
  useEffect(() => console.log(user), [user]);

  return (
    <>
      <RouterProvider router={router} />
      <div id="toast-root">
        <ToastContainer />
      </div>
      <div id="modal-root">
        <ModalContainer />
      </div>
      <div id="loading-root">
        <Loading />
      </div>
    </>
  );
}

export default App;
