import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import icons from '../icons-sprite/icons-sprite.svg';
import { StatsList } from '../components/StatsList/StatsList';
import { palitraBlue, palitraGreen, palitraOrange } from '../utils/palitraForChart';

export const Statistic = () => {
  const ordersList = useSelector(state => state.order.orders.items);

  const poultrySummaryList = [];
  const foodSummaryList = [];
  const optionsSummaryList = [];

  ordersList.forEach(({ order }) => {
    const { data: poultry, food, options } = order;
    poultry.forEach(({ type, count }) => poultrySummaryList.push({ name: type, value: count }));
    food.forEach(({ type, count }) => foodSummaryList.push({ name: type, value: count }));
    options.forEach(({ type, count }) => optionsSummaryList.push({ name: type, value: count }));
  });

  const poultrySummaryObject = poultrySummaryList.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.name]: (acc[obj.name] || 0) + obj.value,
    };
  }, {});
  const foodSummaryObject = foodSummaryList.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.name]: (acc[obj.name] || 0) + obj.value,
    };
  }, {});
  const optionsSummaryObject = optionsSummaryList.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.name]: (acc[obj.name] || 0) + obj.value,
    };
  }, {});

  const poultryStats = Object.entries(poultrySummaryObject).map(([name, value], idx) => ({
    name,
    value,
    fill: palitraOrange[idx],
  }));
  const foodStats = Object.entries(foodSummaryObject).map(([name, value], idx) => ({
    name,
    value,
    fill: palitraGreen[idx],
  }));
  const optionsStats = Object.entries(optionsSummaryObject).map(([name, value], idx) => ({
    name,
    value,
    fill: palitraBlue[idx],
  }));

  poultryStats.sort(({ value: a }, { value: b }) => b - a);
  foodStats.sort(({ value: a }, { value: b }) => b - a);
  optionsStats.sort(({ value: a }, { value: b }) => b - a);

  //   if (!orderList.length) return;

  return (
    <div className="statistic container">
      <Link className="title__back" to="/orders">
        <svg width={25} height={25}>
          <use href={icons + `#back`}></use>
        </svg>
      </Link>
      <StatsList title="Птица" list={poultryStats} />
      <StatsList title="Корма" list={foodStats} />
      <StatsList title="Дополнительно" list={optionsStats} />
    </div>
  );
};
