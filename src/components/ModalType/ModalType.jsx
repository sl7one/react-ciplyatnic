import './modalType.scss';

export const ModalType = ({ cbValue, list }) => {
  const onClickItem = ({ currentTarget }) => {
    cbValue(currentTarget.innerText);
  };

  const items = list.map(item => (
    <li className="type__item" key={item} onClick={onClickItem}>
      {item}
    </li>
  ));

  return (
    <div className="type">
      <ul className="type__list">{items}</ul>
    </div>
  );
};
