export const PickerButtonProduct = ({ onClickButton, modalType, val }) => {
  const onClick = ({ currentTarget }) => {
    onClickButton(currentTarget);
  };

  return (
    <button type="click" className="client__btn" onClick={onClick} id={modalType}>
      {!val ? 'Товар' : val}
    </button>
  );
};
