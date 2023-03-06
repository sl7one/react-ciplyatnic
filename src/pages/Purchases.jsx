import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header/Header';
import { OrderList } from '../components/Order/OrderList';
import { fetchPurchases } from '../redux/slices/purchasesOperations';
import { Footer } from '../components/Footer/Footer';

export const Purchases = () => {
  const dispatch = useDispatch();

  const purchasesList = useSelector(state => state.purchases.orders);

  const { items } = purchasesList;

  useEffect(() => {
    dispatch(fetchPurchases());
  }, [dispatch]);

  return (
    <>
      <Header title="Закупки" id="purchases" />
      <main>
        <div className="container">
          <OrderList id="purchases" items={items} />
        </div>
      </main>
      <Footer id="purchases" items={items} />
    </>
  );
};
