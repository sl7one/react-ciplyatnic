import icons from '../../icons-sprite/icons-sprite.svg';

export const PickerList = ({ list, type, onClickRemove }) => {
  const items = (array, arrayType) =>
    array.map(({ type, count, price, id }) => (
      <li className="client__poultry-item" key={id}>
        <button
          type="click"
          className="client__remove-btn"
          id={id}
          onClick={onClickRemove}
          identificator={arrayType}
        >
          <svg width={25} height={25}>
            <use href={icons + `#remove`}></use>
          </svg>
        </button>
        <div className="client__poultry-info">
          <p>{type}</p>
          <p>{count}шт</p>
          <p>{price}грн</p>
        </div>
      </li>
    ));

  return <>{!!list.length && <ul className="client__poultry-list">{items(list, type)}</ul>}</>;
};
