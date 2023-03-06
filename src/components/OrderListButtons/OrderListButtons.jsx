import icons from '../../icons-sprite/icons-sprite.svg';

export const OrderListButtons = ({ flags, _id, onClickSale, onClickRemove, onClickEdit }) => {
  return (
    <div className="poultry__summary-btns-wrap">
      {flags.button.edit && (
        <button className="poultry__summary-btns" type="click" id={_id} onClick={onClickEdit}>
          <svg width={25} height={25}>
            <use href={icons + `#edit`}></use>
          </svg>
        </button>
      )}
      {flags.button.remove && (
        <button className="poultry__summary-btns" type="click" id={_id} onClick={onClickRemove}>
          <svg width={25} height={25}>
            <use href={icons + `#remove`}></use>
          </svg>
        </button>
      )}
      {flags.button.sale && (
        <button className="poultry__summary-btns" type="click" id={_id} onClick={onClickSale}>
          <svg width={25} height={25}>
            <use href={icons + `#sale`}></use>
          </svg>
        </button>
      )}
    </div>
  );
};
