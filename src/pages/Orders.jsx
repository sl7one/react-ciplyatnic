import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header/Header';
import { OrderList } from '../components/Order/OrderList';
import { fetchOrders } from '../redux/slices/ordersOperations';
import { Footer } from '../components/Footer/Footer';

export const Orders = () => {
  const dispatch = useDispatch();

  const orderList = useSelector(state => state.order.orders);

  const { items } = orderList;

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <>
      <Header title="Заказы" id="orders" />
      <main>
        <div className="container">
          <OrderList id="orders" items={items} />
        </div>
      </main>
      <Footer id="orders" items={items} />
    </>
  );
};
