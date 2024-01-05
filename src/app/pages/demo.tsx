import { SystemMessage } from '@app/common/constants';
import Button from '@app/components/button';
import ConfirmModal from '@app/components/confirm-modal';
import { addToast } from '@app/components/toast/toast.service';
import DemoService from '@app/services/http/demo.service';
import { openPortalDialog } from '@app/services/modal.service';
import useObservable from '@core/hooks/use-observable.hook';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DemoModal from './hello-world/modal.demo';

export default function Demo() {
  const { subscribeOnce } = useObservable();
  const { t } = useTranslation();
  useEffect(() => {
    subscribeOnce(DemoService.demo(), (data) => console.log(data));
  }, []);

  const handleExam = () => {
    const exam = openPortalDialog(ConfirmModal, {
      message: 'demo.demoMessageConfirm',
    });
    exam.afterClosed().subscribe((data: { isAccept: boolean }) => {
      data?.isAccept && addToast({ text: SystemMessage.UNKNOWN_ERROR, position: 'top-right' });
    });
  };
  const handleOpenModalCus = () => {
    const exam = openPortalDialog(DemoModal);
    exam.afterClosed().subscribe((data: any) => {
      data && console.log(data);
    });
  };

  return (
    <div>
      <Button
        size="xs"
        label={t('demo.hello')}
        width="fit-content"
        className="px-6 text-sm"
        labelClassName="font-bold"
        onClick={() => handleExam()}
      />
      <Button
        size="xs"
        label={t('demo.goodbye')}
        width="fit-content"
        className="px-6 text-sm"
        labelClassName="font-bold"
        onClick={() => handleOpenModalCus()}
      />
    </div>
  );
}
