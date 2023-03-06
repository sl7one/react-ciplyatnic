import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { PickerButtonCount } from '../components/PickerButtonCount/PickerButtonCount';
import { PickerButtonProduct } from '../components/PickerButtonProduct/PickerButtonProduct';
import { utilsButtonsPicker } from '../utils/buttonsPicker';

export const utilsMapListItems = array => {
  return array.map(item => {
    const [poultry, setPoultry] = useState({ type: '', count: '', price: '' });

    const [isOpenModals, setIsOpenModals] = useState({
      type: false,
      count: false,
      price: false,
    });

    const [, setFormData] = useState({
      type: '',
      count: '',
      price: '',
    });

    useEffect(() => {
      const { type, count, price } = item;
      setPoultry({ type, count, price });
    }, [item]);

    const onClickButton = ({ currentTarget }) => {
      const { id } = currentTarget;
      utilsButtonsPicker(id, setIsOpenModals);
    };

    const { type, count, price } = poultry;
    return (
      <li className="edit__item" key={nanoid()}>
        <PickerButtonProduct
          onClickButton={onClickButton}
          id="product"
          isOpenModals={isOpenModals.type}
          type={type}
          setFormData={setFormData}
          setIsOpenModals={setIsOpenModals}
        />
        <PickerButtonCount
          onClickButton={onClickButton}
          id="count"
          val={count}
          isOpenModals={isOpenModals.count}
          setFormData={setFormData}
          setIsOpenModals={setIsOpenModals}
        />
        <PickerButtonCount
          onClickButton={onClickButton}
          id="price"
          val={price}
          isOpenModals={isOpenModals.price}
          setFormData={setFormData}
          setIsOpenModals={setIsOpenModals}
        />
      </li>
    );
  });
};
