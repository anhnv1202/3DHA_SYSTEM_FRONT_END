import Button from '@app/components/button';
import Modal from '@app/components/modal/modal.component';
import { PortalDialogProps } from '@app/services/modal.service';
import { useTranslation } from 'react-i18next';

function DemoModal({ portalDialogRef, portalData }: PortalDialogProps) {
  const { t } = useTranslation();
  return (
    <Modal onCancel={portalDialogRef.close} buttonCancelInChildren>
      <div className="w-[350px] h-auto p-5">
        <div className="text-lg pr-5">{t('demo.demoModal')}</div>
        <div className="mt-4 flex justify-center gap-3">
          <Button
            size="xs"
            label={t('demo.hello')}
            width="fit-content"
            className="px-6 text-sm"
            labelClassName="font-bold"
            onClick={() => portalDialogRef.close({ hello: t('demo.demoModal') })}
          />
        </div>
      </div>
    </Modal>
  );
}
export default DemoModal;
