import { foodList, optionsList, poultryList } from './fakeList';

export const utilsPickerTypeList = pickerType => {
  switch (pickerType) {
    case 'poultry':
      return poultryList;
    case 'food':
      return foodList;
    case 'options':
      return optionsList;
    default:
      return [];
  }
};
