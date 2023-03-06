import { nanoid } from 'nanoid';

export const ProductsList = ({ list }) => {
  const items = list.map(({ count, price, type }) => {
    const id = nanoid();
    return (
      <li className="poultry__item" key={id}>
        <span>{type}</span>
        <span>{`${count}шт`}</span>
        <span>{`${price}грн`}</span>
      </li>
    );
  });

  return <ul className="poultry__list">{items}</ul>;
};
