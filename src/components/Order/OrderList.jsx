import './orders.scss';
import { useDispatch } from 'react-redux';
import { removeOrder, saleOrder } from '../../redux/slices/ordersOperations';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalEditOrder } from '../ModalEditOrder/ModalEditOrder';
import { ProductsList } from '../ProductsList/ProductsList';
import { ListSummary } from '../ListSummary/ListSummary';
import { OrderListButtons } from '../OrderListButtons/OrderListButtons';
import { updateSalledOrder } from '../../redux/slices/sallesOperations';

export const OrderList = ({ id, items }) => {
  const dispatch = useDispatch();

  const [flags, setFlags] = useState({ button: { sale: true, remove: true, edit: true } });

  const [editModal, setEditModal] = useState(false);

  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    switch (id) {
      case 'orders':
        setFlags({ button: { sale: true, remove: true, edit: true } });
        break;
      case 'purchases':
        setFlags({ button: { sale: false, remove: false, edit: false } });
        break;
      case 'salles':
        setFlags({ button: { sale: false, remove: true, edit: false } });
        break;
      default:
        return console.log('NULL');
    }
  }, [id]);

  if (!items) return;

  const onClickRemove = ({ currentTarget }) => {
    switch (id) {
      case 'orders':
        dispatch(removeOrder(currentTarget.id));
        break;
      case 'salles':
        dispatch(updateSalledOrder(currentTarget.id));
        break;
      default:
        return console.log('NULL');
    }
  };

  const onClickSale = ({ currentTarget }) => {
    switch (id) {
      case 'orders':
        dispatch(saleOrder(currentTarget.id));
        break;
      case 'purchases':
        break;
      default:
        return null;
    }
  };

  const onClickEdit = ({ currentTarget }) => {
    setOrderId(currentTarget.id);
    setEditModal(true);
  };

  const orders = items.map(({ _id, order, date }) => {
    const client = order.buyer || order.saller;

    const { name, phone, location } = client;

    const { total, data, food = [], options = [] } = order;

    return (
      <li className="orders__item" key={_id}>
        <details open={true} className="poultry">
          <ListSummary id={id} name={name} date={date} phone={phone} location={location} />
          <ProductsList list={data} />
          {!!food.length && <ProductsList list={food} />}
          {!!options.length && <ProductsList list={options} />}
          <div className="poultry__summary-wrap">
            <OrderListButtons
              flags={flags}
              _id={_id}
              onClickSale={onClickSale}
              onClickRemove={onClickRemove}
              onClickEdit={onClickEdit}
            />
            <p className="poultry__summary-summ">
              Итого: <span>{total}</span> грн
            </p>
          </div>
        </details>
      </li>
    );
  });

  return (
    <>
      <ul className="orders__list"> {orders} </ul>
      {editModal &&
        createPortal(
          <ModalEditOrder setEditModal={setEditModal} id={orderId} />,
          document.querySelector('#modal')
        )}
    </>
  );
};
