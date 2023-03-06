import icons from '../../icons-sprite/icons-sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';
import './edit.scss';
import { utilsButtonsPicker } from '../../utils/buttonsPicker';
import { Portal } from '../Portal/Portal';
import { ModalType } from '../ModalType/ModalType';
import { utilsTypeList } from '../../utils/typeList';
import { utilsUpdateTypeOrders } from '../../utils/updateOrders';
import { ModalCount } from '../ModalCount/ModalCount';
import { utilsSetOrderData } from '../../utils/setOrderData';
import { utilsRemoveItems } from '../../utils/removeItems';
import { utilsSetPickerState } from '../../utils/setPickerState';
import { updateOrder } from '../../redux/slices/ordersOperations';

export const ModalEditOrder = ({ setEditModal, id }) => {
  const dispatch = useDispatch();
  const [orderData, setOrderData] = useState({
    orderId: '',
    date: '',
    name: '',
    phone: '',
    location: '',
    poultry: [],
    food: [],
    options: [],
  });

  const [isOpenModals, setIsOpenModals] = useState({
    type: false,
    count: false,
    price: false,
  });

  const [buttonId, setButtonId] = useState('');

  const [type, setType] = useState('');

  const [listType, setListType] = useState({ type: '', list: [] });

  const orders = useSelector(state => state.order.orders.items);

  useEffect(() => {
    const orderArray = orders.filter(item => item._id === id);
    const [orderItem] = orderArray;
    const { date, order, _id } = orderItem;
    const { name, location, phone } = order.buyer;
    const { data: poultry, food, options } = order;
    setOrderData({
      orderId: _id,
      date: parseISO(date),
      name,
      location,
      phone,
      poultry,
      food,
      options,
    });
  }, [id, orders]);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setOrderData(prev => ({ ...prev, [name]: value }));
  };

  const onClickDate = date => {
    setOrderData(prev => ({ ...prev, date }));
  };

  const onClickButtonProduct = ({ currentTarget }) => {
    const { id } = currentTarget;
    setButtonId(id);
    const { value } = currentTarget.attributes.modaltype;
    const [typeModal, typeList] = value.split(' ');
    utilsButtonsPicker(typeModal, setIsOpenModals);
    if (!typeList) return;
    utilsTypeList(typeList, setListType);
  };

  const onClickButtonCount = ({ currentTarget }) => {
    const { id } = currentTarget;
    setButtonId(id);
    const { value } = currentTarget.attributes.modaltype;
    const [typeModal, typeList] = value.split(' ');
    setType(typeList);
    utilsButtonsPicker(typeModal, setIsOpenModals);
  };

  const onClickRemoveItem = ({ currentTarget }) => {
    utilsRemoveItems(currentTarget, setOrderData, poultry, food, options);
  };

  const onClickAddItem = ({ currentTarget }) => {
    const { id } = currentTarget;
    const type = 'Товар';
    const count = '';
    const price = '';
    utilsSetPickerState(id, setOrderData, type, count, price);
  };

  const cbValue = (valueType, valueCount) => {
    if (valueType === 'count' || valueType === 'price') {
      utilsSetOrderData(valueType, type, setOrderData, buttonId, valueCount);
      utilsButtonsPicker(false, setIsOpenModals);
      return;
    }
    utilsUpdateTypeOrders(listType.type, setOrderData, valueType, valueCount, buttonId, type);
    utilsButtonsPicker(false, setIsOpenModals);
  };

  const { date, name, phone, location, poultry, food, options, orderId } = orderData;

  const onClickApply = () => {
    const newOrder = {
      _id: orderId,
      date,
      order: {
        buyer: {
          name,
          phone,
          location,
        },
        data: poultry,
        food,
        options,
      },
    };
    dispatch(updateOrder(newOrder));
    setEditModal(false);
  };

  const onClickClose = () => {
    setEditModal(false);
  };

  const poultryItems = poultry.map(({ id, type, count, price }) => (
    <li key={id} style={{ display: 'flex' }}>
      <button
        type="click"
        className="poultry__summary-btns"
        onClick={onClickRemoveItem}
        identificator="poultry"
        id={id}
      >
        <svg width={25} height={25}>
          <use href={icons + `#remove`}></use>
        </svg>
      </button>
      <button
        type="click"
        className="client__btn"
        onClick={onClickButtonProduct}
        modaltype="product poultry"
        id={id}
      >
        {type}
      </button>
      <button
        type="click"
        className="client__btn"
        onClick={onClickButtonCount}
        modaltype="count poultry"
        id={id}
      >
        {`${count} шт`}
      </button>
      <button
        type="click"
        className="client__btn"
        onClick={onClickButtonCount}
        modaltype="price poultry"
        id={id}
      >
        {`${price} грн`}
      </button>
    </li>
  ));
  const foodItems = food.map(({ id, type, count, price }) => (
    <li key={id} style={{ display: 'flex' }}>
      <button
        type="click"
        className="poultry__summary-btns"
        onClick={onClickRemoveItem}
        identificator="food"
        id={id}
      >
        <svg width={25} height={25}>
          <use href={icons + `#remove`}></use>
        </svg>
      </button>
      <button
        type="click"
        className="client__btn"
        onClick={onClickButtonProduct}
        modaltype="product food"
        id={id}
      >
        {type}
      </button>
      <button
        type="click"
        className="client__btn"
        onClick={onClickButtonCount}
        modaltype="count food"
        id={id}
      >
        {`${count} шт`}
      </button>
      <button
        type="click"
        className="client__btn"
        onClick={onClickButtonCount}
        modaltype="price food"
        id={id}
      >
        {`${price} грн`}
      </button>
    </li>
  ));
  const optionsItems = options.map(({ id, type, count, price }) => (
    <li key={id} style={{ display: 'flex' }}>
      <button
        type="click"
        className="poultry__summary-btns"
        onClick={onClickRemoveItem}
        identificator="options"
        id={id}
      >
        <svg width={25} height={25}>
          <use href={icons + `#remove`}></use>
        </svg>
      </button>
      <button
        type="click"
        className="client__btn"
        onClick={onClickButtonProduct}
        modaltype="product options"
        id={id}
      >
        {type}
      </button>
      <button
        type="click"
        className="client__btn"
        onClick={onClickButtonCount}
        modaltype="count options"
        id={id}
      >
        {`${count} шт`}
      </button>
      <button
        type="click"
        className="client__btn"
        onClick={onClickButtonCount}
        modaltype="price options"
        id={id}
      >
        {`${price} грн`}
      </button>
    </li>
  ));

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
    <div className="edit">
      <h1>Откорректируй заказ</h1>
      <label className="client__label date">
        <span>Дата: </span>
        {<DatePicker selected={date} onChange={onClickDate} />}
      </label>
      <label className="client__label" htmlFor="name">
        <span>Имя </span>
        <input
          className="client__input"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChange}
          required
        />
      </label>
      <label className="client__label" htmlFor="phone">
        <span>Телефон </span>
        <input
          className="client__input"
          value={phone}
          onChange={onChange}
          name="phone"
          id="phone"
          required
        />
      </label>
      <label className="client__label" htmlFor="location">
        <span>Локация</span>
        <input
          className="client__input"
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={onChange}
          required
        />
      </label>

      <div className="edit__list-tilte-wrapper">
        <h2>Птица</h2>
        <button
          className="poultry__summary-btns"
          type="click"
          onClick={onClickAddItem}
          id="poultry"
        >
          Добавить элемент
        </button>
      </div>
      <ul className="edit__list">{poultryItems}</ul>

      <div className="edit__list-tilte-wrapper">
        <h2>Корма</h2>
        <button className="poultry__summary-btns" type="click" onClick={onClickAddItem} id="food">
          Добавить элемент
        </button>
      </div>
      <ul className="edit__list">{foodItems}</ul>

      <div className="edit__list-tilte-wrapper">
        <h2>Дополнительно</h2>
        <button
          className="poultry__summary-btns"
          type="click"
          onClick={onClickAddItem}
          id="options"
        >
          Добавить элемент
        </button>
      </div>
      <ul className="edit__list">{optionsItems}</ul>

      <div className="edit__btns-wrapper">
        <button className="edit__btn" type="submit" onClick={onClickApply}>
          Изменить
        </button>
        <button className="edit__btn" type="click" onClick={onClickClose}>
          Закрыть
        </button>
      </div>
      <Portal>{modal}</Portal>
    </div>
  );
};
