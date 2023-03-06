import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { OrderList } from '../components/Order/OrderList';
import { fetchSalles } from '../redux/slices/sallesOperations';

export const Salles = () => {
  const dispatch = useDispatch();

  const orderList = useSelector(state => state.salles.orders);

  const { items } = orderList;

  useEffect(() => {
    dispatch(fetchSalles());
  }, [dispatch]);

  return (
    <>
      <Header title="Продажи" id="salles" />
      <main>
        <div className="container">
          <OrderList id="salles" items={items} />
        </div>
      </main>
      <Footer id="salles" items={items} />
    </>
  );
};
