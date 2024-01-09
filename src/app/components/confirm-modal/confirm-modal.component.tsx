import { PortalDialogProps } from '@app/services/modal.service';
import { useTranslation } from 'react-i18next';
import Button from '../button';
import Modal from '../modal/modal.component';

function ConfirmModal({ portalDialogRef, portalData }: PortalDialogProps) {
  const { t } = useTranslation();
  return (
    <Modal onCancel={portalDialogRef.close} buttonCancelInChildren>
      <div className="w-[350px] h-auto p-5">
        <div className="text-lg pr-5">{t(portalData?.message)}</div>
        <div className="mt-4 flex justify-center gap-3">
          <Button
            size="xs"
            label={t('button.confirm')}
            width="fit-content"
            className="px-6 text-sm"
            labelClassName="font-bold"
            onClick={() => portalDialogRef.close({ isAccept: true })}
          />
          <Button
            size="xs"
            label={t('button.close')}
            theme="danger"
            width="fit-content"
            className="px-6 text-sm"
            labelClassName="font-bold"
            onClick={() => portalDialogRef.close()}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
