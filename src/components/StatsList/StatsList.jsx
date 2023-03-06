import { nanoid } from 'nanoid';

import './statistic.scss';

export const StatsList = ({ list, title }) => {
  let total = 0;

  const items = list.map(({ name, value, fill }) => {
    total += value;
    return (
      <li
        key={nanoid()}
        className="statistic__item"
        style={{
          backgroundColor: fill,
        }}
      >
        <span>{name}</span>
        <span>{value} шт</span>
      </li>
    );
  });
  return (
    <>
      <h2>{title}</h2>
      <ul className="statistic__list">{items}</ul>
      <p className="statistic__total">
        Всего <span>{total} </span> шт
      </p>
    </>
  );
};
