import useObservable from '@core/hooks/use-observable.hook';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Confirm() {
  const { t } = useTranslation();
  const { subscribeOnce } = useObservable();
  const token = window.location.search.replace('?token=', '');
  useEffect(() => {
    // subscribeOnce(AuthService.confirm(token), (response: ) => {
    //     if (response.status === true) {
    //         //
    //     });
  }, []);

  return <></>;
}

export default Confirm;
