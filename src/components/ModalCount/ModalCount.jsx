import { useState } from 'react';
import './modalCount.scss';
import { numbers } from './numbers';

export const ModalCount = ({ cbValue, modalType }) => {
  const [count, setCount] = useState([]);

  const onClickItem = ({ currentTarget }) => {
    if (currentTarget.innerText === 'Очистить') {
      setCount([]);
      return;
    }

    setCount(prev => [...prev, currentTarget.innerText]);
  };

  const onClickAdd = ({ currentTarget }) => {
    const { id } = currentTarget;
    cbValue(id, Number(count.join('')));
  };

  const items = numbers.map(item => (
    <li className="count__item" key={item} onClick={onClickItem}>
      {item}
    </li>
  ));

  return (
    <div className="count">
      <div className="count__title-wrap">
        <p className="count__title">{count.length === 0 ? '0' : count.join('')}</p>
        <button className="count__btn-add" type="click" onClick={onClickAdd} id={modalType}>
          Добавить
        </button>
      </div>
      <ul className="count__list">{items}</ul>
    </div>
  );
};
