import { nanoid } from 'nanoid';

export function utilsSetOrderData(valueType, type, setOrderData, buttonId, valueCount) {
  switch (type) {
    case 'poultry':
      setOrderData(prev => {
        const { poultry } = prev;
        const filtredArray = poultry.filter(el => el.id !== buttonId);
        const filterOne = poultry.filter(el => el.id === buttonId);
        const [item] = filterOne;
        if (valueType === 'count') {
          return {
            ...prev,
            poultry: [{ ...item, id: nanoid(), count: valueCount }, ...filtredArray],
          };
        }
        return {
          ...prev,
          poultry: [{ ...item, id: nanoid(), price: valueCount }, ...filtredArray],
        };
      });
      break;
    case 'food':
      setOrderData(prev => {
        const { food } = prev;
        const filtredArray = food.filter(el => el.id !== buttonId);
        const filterOne = food.filter(el => el.id === buttonId);
        const [item] = filterOne;
        if (valueType === 'count') {
          return {
            ...prev,
            food: [{ ...item, id: nanoid(), count: valueCount }, ...filtredArray],
          };
        }
        return {
          ...prev,
          food: [{ ...item, id: nanoid(), price: valueCount }, ...filtredArray],
        };
      });
      break;
    case 'options':
      setOrderData(prev => {
        const { options } = prev;
        const filtredArray = options.filter(el => el.id !== buttonId);
        const filterOne = options.filter(el => el.id === buttonId);
        const [item] = filterOne;
        if (valueType === 'count') {
          return {
            ...prev,
            options: [{ ...item, id: nanoid(), count: valueCount }, ...filtredArray],
          };
        }
        return {
          ...prev,
          options: [{ ...item, id: nanoid(), price: valueCount }, ...filtredArray],
        };
      });
      break;
    default:
      return null;
  }
}
