import { useState } from 'react';
import { utilsButtonsPicker } from '../../utils/buttonsPicker';
import { PickerButtonProduct } from '../PickerButtonProduct/PickerButtonProduct';
import { PickerButtonCount } from '../PickerButtonCount/PickerButtonCount';
import { PickerButtonAddItem } from '../PickerButtonAddItem/PickerButtonAddItem';
import { utilsSetPickerState } from '../../utils/setPickerState';
import { ModalType } from '../ModalType/ModalType';
import { ModalCount } from '../ModalCount/ModalCount';
import { Portal } from '../Portal/Portal';
import { utilsTypeList } from '../../utils/typeList';

export const Picker = ({ setData, title, modalType }) => {
  const [dataForm, setFormData] = useState({
    type: '',
    count: '',
    price: '',
  });

  const [isOpenModals, setIsOpenModals] = useState({
    type: false,
    count: false,
    price: false,
    food: false,
  });

  const [listType, setListType] = useState({ type: '', list: [] });

  const [, pickerType] = modalType.split(' ');

  const { type, count, price } = dataForm;

  const onClickAddItem = ({ currentTarget }) => {
    const { id } = currentTarget;
    utilsSetPickerState(id, setData, type, count, price);
    setFormData(prev => ({ ...prev, type: '' }));
  };

  const onClickButton = currentTarget => {
    const { id } = currentTarget;
    const [typeModal, typeList] = id.split(' ');
    utilsButtonsPicker(typeModal, setIsOpenModals);
    if (!typeList) return;
    utilsTypeList(typeList, setListType);
  };

  const cbValue = (type, value) => {
    switch (type) {
      case 'count':
        setFormData(prev => ({ ...prev, count: value }));
        break;
      case 'price':
        setFormData(prev => ({ ...prev, price: value }));
        break;
      default:
        setFormData(prev => ({ ...prev, type }));
    }
    utilsButtonsPicker(false, setIsOpenModals);
  };

  const modal =
    (isOpenModals.type && (
      <ModalType cbValue={cbValue} setIsOpenModals={setIsOpenModals} list={listType.list} />
    )) ||
    (isOpenModals.count && (
      <ModalCount cbValue={cbValue} setIsOpenModals={setIsOpenModals} modalType="count" />
    )) ||
    (isOpenModals.price && (
      <ModalCount cbValue={cbValue} setIsOpenModals={setIsOpenModals} modalType="price" />
    ));

  return (
    <>
      <p className="client__title">{title}</p>
      <div className="client__btns-wrapper">
        <PickerButtonAddItem onClickAddItem={onClickAddItem} id={pickerType} />
        <PickerButtonProduct onClickButton={onClickButton} modalType={modalType} val={type} />
        <PickerButtonCount onClickButton={onClickButton} modalType="count" val={count} />
        <PickerButtonCount onClickButton={onClickButton} modalType="price" val={price} />
      </div>
      <Portal>{modal}</Portal>
    </>
  );
};
