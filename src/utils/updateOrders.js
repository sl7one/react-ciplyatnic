import { nanoid } from 'nanoid';

export function utilsUpdateTypeOrders(id, setOrderData, valueType, valueCount, buttonId, type) {
  switch (id) {
    case 'poultry':
      setOrderData(prev => {
        const { poultry } = prev;
        const filtredArray = poultry.filter(el => el.id !== buttonId);
        const filterOne = poultry.filter(el => el.id === buttonId);
        const [item] = filterOne;
        return {
          ...prev,
          poultry: [{ ...item, id: nanoid(), type: valueType }, ...filtredArray],
        };
      });
      break;
    case 'food':
      setOrderData(prev => {
        const { food } = prev;
        const filtredArray = food.filter(el => el.id !== buttonId);
        const filterOne = food.filter(el => el.id === buttonId);
        const [item] = filterOne;
        return {
          ...prev,
          food: [{ ...item, id: nanoid(), type: valueType }, ...filtredArray],
        };
      });
      break;
    case 'options':
      setOrderData(prev => {
        const { options } = prev;
        const filtredArray = options.filter(el => el.id !== buttonId);
        const filterOne = options.filter(el => el.id === buttonId);
        const [item] = filterOne;
        return {
          ...prev,
          options: [{ ...item, id: nanoid(), type: valueType }, ...filtredArray],
        };
      });
      break;
    default:
      return null;
  }
}
