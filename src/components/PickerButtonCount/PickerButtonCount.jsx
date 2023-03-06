import { utilsTitleButton } from '../../utils/titleButton';

export const PickerButtonCount = ({ onClickButton, modalType, val }) => {
  const onClick = ({ currentTarget }) => {
    onClickButton(currentTarget);
  };
  const { title, unit } = utilsTitleButton(modalType);

  return (
    <>
      <button type="click" className="client__btn" onClick={onClick} id={modalType}>
        {!val ? title : val + ' ' + unit}
      </button>
    </>
  );
};
