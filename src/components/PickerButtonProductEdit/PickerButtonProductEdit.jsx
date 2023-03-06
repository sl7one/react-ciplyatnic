import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { ModalType } from '../ModalType/ModalType';
import { Portal } from '../Portal/Portal';

export const PickerButtonProductEdit = ({
  onClickButton,
  modalType,
  val,
  setFormData,
  setIsOpenModals,
  id,
  listType,
  isOpenModals,
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    !val ? setValue('Товар') : setValue(val);
  }, [val]);

  const cbValue = currentTarget => {
    setValue(currentTarget.innerText);
  };

  return (
    <>
      <button type="click" className="client__btn" onClick={onClickButton} id={modalType}>
        {value}
      </button>
      {/* <Portal isOpenModals={isOpenModals}>
        <ModalType cbValue={cbValue} setIsOpenModals={setIsOpenModals} list={listType} />
      </Portal> */}
    </>
  );
};
