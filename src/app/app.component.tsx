import Loading from '@core/components/loading';
import { AuthProvider } from '@core/context/auth.context';
import ModalContainer from './components/modal/modal-container';
import ToastContainer from './components/toast/toast.container';
import Routes from './router';
import './styles/app.scss';
import './styles/common.scss';
function App() {
  return (
    <AuthProvider>
      <Routes />
      <div id="toast-root">
        <ToastContainer />
      </div>
      <div id="modal-root">
        <ModalContainer />
      </div>
      <div id="loading-root">
        <Loading />
      </div>
    </AuthProvider>
  );
}

export default App;
