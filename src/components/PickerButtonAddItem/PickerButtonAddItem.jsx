import icons from '../../icons-sprite/icons-sprite.svg';

export const PickerButtonAddItem = ({ onClickAddItem, id }) => {
  return (
    <button type="click" className="client__btn" onClick={onClickAddItem} id={id}>
      <svg width={25} height={25}>
        <use href={icons + `#add`}></use>
      </svg>
    </button>
  );
};
