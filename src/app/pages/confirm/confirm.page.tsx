import AuthService from '@app/services/http/auth.service';
import { ConfirmResponse } from '@app/types';
import useObservable from '@core/hooks/use-observable.hook';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Confirm() {
  const { t } = useTranslation();
  const { subscribeOnce } = useObservable();
  const token = window.location.search.replace('?token=', '');
  useEffect(() => {
    subscribeOnce(AuthService.confirm(token), (ConfirmRes: ConfirmResponse) => {
      console.log(ConfirmRes);
    });
  }, []);

  return <></>;
}

export default Confirm;
