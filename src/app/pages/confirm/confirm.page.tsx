import { PATHS, SystemMessage } from '@app/common/constants';
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
  const token = window.location.search.replace('?token=', '');
  useEffect(() => {
    subscribeOnce(AuthService.confirm(token), (confirmRes: ConfirmResponse) => {
      confirmRes.status && addToast({ text: SystemMessage.VERIFY_SUCCESS, position: 'top-right' });
      navigate(PATHS.LOGIN);
    });
  }, []);

  return <></>;
}

export default Confirm;
