import { nanoid } from '@reduxjs/toolkit';

export function utilsSetPickerState(id, setData, type, count, price) {
  switch (id) {
    case 'poultry':
      setData(prev => ({
        ...prev,
        poultry: [...prev.poultry, { id: nanoid(), type, count, price }],
      }));
      break;
    case 'food':
      setData(prev => ({
        ...prev,
        food: [...prev.food, { id: nanoid(), type, count, price }],
      }));
      break;
    case 'options':
      setData(prev => ({
        ...prev,
        options: [...prev.options, { id: nanoid(), type, count, price }],
      }));
      break;
    default:
      return null;
  }
}
