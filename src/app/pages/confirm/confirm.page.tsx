import { CONFIRM_TYPE, PATHS, SystemMessage } from '@app/common/constants';
import { addToast } from '@app/components/toast/toast.service';
import AuthService from '@app/services/http/auth.service';
import { ConfirmResponse } from '@app/types';
import useObservable from '@core/hooks/use-observable.hook';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Confirm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { subscribeOnce } = useObservable();
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const confirmationType = urlParams.get('type');
  useEffect(() => {
    if (token)
      confirmationType === CONFIRM_TYPE.REGISTER
        ? subscribeOnce(AuthService.confirm(token), (confirmRes: ConfirmResponse) => {
            confirmRes.status && addToast({ text: SystemMessage.VERIFY_SUCCESS, position: 'top-right' });
            navigate(PATHS.LOGIN);
          })
        : navigate(PATHS.CHANGE_PASSWORD);
  }, [token, confirmationType, navigate, subscribeOnce]);
  return <></>;
}

export default Confirm;
