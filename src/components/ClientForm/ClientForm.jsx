import PhoneInput from 'react-phone-number-input/input';

export const ClientForm = ({
  flags,
  onSubmit,
  id,
  dataForm,
  onChange,
  onClickClose,
  onChangePhone,
}) => {
  return (
    <form className="client__form" autoComplete="off" onSubmit={onSubmit} required>
      <div className="client__head">
        {flags.label.name && (
          <label className="client__label" htmlFor="name">
            <input
              placeholder={id === 'orders' ? 'Имя клиента' : 'Имя поставщика'}
              className="client__input"
              type="text"
              name="name"
              id="name"
              value={dataForm.name}
              onChange={onChange}
              required
            />
          </label>
        )}
        {flags.label.phone && (
          <label className="client__label" htmlFor="phone">
            <span>+380</span>
            <PhoneInput
              className="client__input"
              placeholder="000 00 00"
              value={dataForm.phone}
              onChange={onChangePhone}
              name="phone"
              id="phone"
              country="UA"
              international
              required
              autoComplete="off"
            />
          </label>
        )}
        {flags.label.location && (
          <label className="client__label" htmlFor="location">
            <input
              placeholder="Локация отгрузки"
              className="client__input"
              type="text"
              name="location"
              id="location"
              value={dataForm.location}
              onChange={onChange}
              required
            />
          </label>
        )}
      </div>
      <div className="client__form-btns-wrapper">
        <button className="client__form-btn" type="submit">
          Добавить
        </button>
        <button className="client__form-btn" type="click" onClick={onClickClose}>
          Закрыть
        </button>
      </div>
    </form>
  );
};
