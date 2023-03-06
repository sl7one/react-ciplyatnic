import './modalClient.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/slices/categoriesOperations';
import { addOrders } from '../../redux/slices/ordersOperations';
import { addPurchases } from '../../redux/slices/purchasesOperations';
import { Picker } from '../Picker/Picker';
import DatePicker from 'react-datepicker';
import { utilsSetFlags } from '../../utils/flags';
import { utilsRemoveItems } from '../../utils/removeItems';
import { PickerList } from '../PickerList/PickerList';
import { ClientForm } from '../ClientForm/ClientForm';

export const ModalClient = ({ setIsOpenClient, id }) => {
  const [flags, setFlags] = useState({ label: { name: false, phone: false, location: false } });
  const dispatch = useDispatch();
  const itemsCategories = useSelector(state => state.categories.categories.items);

  const [dataForm, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
  });

  const [goods, setGoods] = useState({ poultry: [], food: [], options: [] });

  const { poultry, food, options } = goods;

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    utilsSetFlags(id, setFlags);
  }, [id]);

  const onSubmit = e => {
    e.preventDefault();
    switch (id) {
      case 'orders':
        dispatch(
          addOrders({
            date: startDate,
            order: {
              buyer: dataForm,
              data: poultry,
              food,
              options,
            },
          })
        );
        break;
      case 'purchases':
        dispatch(
          addPurchases({
            date: startDate,
            order: {
              saller: { name: dataForm.name },
              data: poultry,
            },
          })
        );
        break;
      default:
        return null;
    }
    setIsOpenClient(false);
    setFormData({
      name: '',
      phone: '',
      location: '',
    });
  };

  const onClickClose = () => {
    setIsOpenClient(false);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onChangePhone = phone => {
    setFormData(prev => ({ ...prev, phone }));
  };

  const onClickRemove = ({ currentTarget }) => {
    utilsRemoveItems(currentTarget, setGoods, poultry, food, options);
  };

  return (
    <div className="client">
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <Picker
        title="Выбери птицу"
        setData={setGoods}
        pickerType="poultry"
        modalType="product poultry"
      />
      <PickerList list={poultry} type="poultry" onClickRemove={onClickRemove} />
      <Picker title="Выбери корм" setData={setGoods} pickerType="food" modalType="product food" />
      <PickerList list={food} type="food" onClickRemove={onClickRemove} />
      <Picker
        title="Дополнительно"
        setData={setGoods}
        pickerType="options"
        modalType="product options"
      />
      <PickerList list={options} type="options" onClickRemove={onClickRemove} />

      <ClientForm
        flags={flags}
        id={id}
        dataForm={dataForm}
        onSubmit={onSubmit}
        onChange={onChange}
        onClickClose={onClickClose}
        onChangePhone={onChangePhone}
      />
    </div>
  );
};
